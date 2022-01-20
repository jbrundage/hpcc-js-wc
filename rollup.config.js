import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";
import commonJS from "@rollup/plugin-commonjs";
import transformTaggedTemplate from "rollup-plugin-transform-tagged-template";
import filesize from "rollup-plugin-filesize";
import sourcemaps from "rollup-plugin-sourcemaps";
import { terser } from "rollup-plugin-terser";

import * as pkg from "./package.json";

function transformHTMLFragment(data) {
    data = data.replace(/\s*([<>])\s*/g, "$1"); // remove spaces before and after angle brackets
    return data.replace(/\s{2,}/g, " "); // Collapse all sequences to 1 space
}

// function transformCSSFragment(data) {
//     if (/\/\*(?![\s\S]*\*\/)[\s\S]*/g.test(data)) {
//         throw new Error("Unterminated comment found in CSS tagged template literal");
//     }

//     return data.replace(
//         /(?:\s*\/\*(?:[\s\S])+?\*\/\s*)|(?:;)\s+(?=\})|\s+(?=\{)|(?<=:)\s+|\s*([{};,])\s*/g,
//         "$1"
//     );
// }

function transformCSSFragment(data) {
    const newlines = /\n/g;
    const separators = /\s*([{};])\s*/g;
    const lastProp = /;\s*(\})/g;
    const extraSpaces = /\s\s+/g;
    const endingSpaces = / ?\s+$/g;

    data = data.replace(newlines, "");
    data = data.replace(separators, "$1");
    data = data.replace(lastProp, "$1");
    data = data.replace(endingSpaces, " ");
    return data.replace(extraSpaces, " ");
}

const parserOptions = {
    sourceType: "module",
};

export default [
    {
        input: "dist/index.js",
        output: [
            {
                file: pkg.jsdelivr.split(".min").join(""),
                format: "umd",
                sourcemap: true,
                plugins: [],
                name: pkg.name
            },
            {
                file: pkg.jsdelivr,
                format: "umd",
                sourcemap: true,
                plugins: [terser()],
                name: pkg.name
            },
            {
                file: pkg.jsdelivr.split(".min").join("").split(".umd").join(".esm"),
                format: "es",
                sourcemap: true,
                plugins: [],
                name: pkg.name
            },
            {
                file: pkg.jsdelivr.split(".umd").join(".esm"),
                format: "es",
                sourcemap: true,
                plugins: [terser()],
                name: pkg.name
            }
        ],
        treeshake: {
            moduleSideEffects: (id, external) => {
                if (id.indexOf(".css") >= 0) return true;
                return false;
            }
        },
        plugins: [
            alias({
                entries: [
                ]
            }),
            resolve(),
            commonJS(),
            transformTaggedTemplate({
                tagsToProcess: ["css"],
                transformer: transformCSSFragment,
                parserOptions,
            }),
            transformTaggedTemplate({
                tagsToProcess: ["html"],
                transformer: transformHTMLFragment,
                parserOptions,
            }),
            sourcemaps(),
            filesize({
                showMinifiedSize: false,
                showBrotliSize: true,
            }),
        ],
    },
];
