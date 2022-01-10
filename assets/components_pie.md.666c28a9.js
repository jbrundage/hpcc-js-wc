import{_ as r,r as o,c as s,b as i,w as n,d as e,e as t,a as l,o as c}from"./app.524a5b41.js";const V='{"title":"Pie","description":"","frontmatter":{},"headers":[{"level":2,"title":"Attributes","slug":"attributes"},{"level":3,"title":"columns","slug":"columns"},{"level":3,"title":"data","slug":"data"},{"level":3,"title":"innerRadius","slug":"innerradius"},{"level":3,"title":"labelHeight","slug":"labelheight"},{"level":3,"title":"minOuterRadius","slug":"minouterradius"},{"level":3,"title":"seriesPercentageFormat","slug":"seriespercentageformat"},{"level":3,"title":"seriesValueFormat","slug":"seriesvalueformat"},{"level":3,"title":"showLabels","slug":"showlabels"},{"level":3,"title":"showSeriesPercentage","slug":"showseriespercentage"},{"level":3,"title":"showSeriesValue","slug":"showseriesvalue"},{"level":3,"title":"startAngle","slug":"startangle"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"components/pie.md","lastUpdated":1641713324887}',d={},h=e("h1",{id:"pie",tabindex:"-1"},[t("Pie "),e("a",{class:"header-anchor",href:"#pie","aria-hidden":"true"},"#")],-1),p=e("p",null,[e("strong",null,"tag"),t(": "),e("code",null,"<hpcc-pie>")],-1),u=e("hpcc-preview",{style:{width:"100%",height:"400px"}},[e("pre",null,[e("code",null,`<hpcc-pie style="width:100%;height:100%">
</hpcc-pie>
<script>
  document.querySelector("hpcc-pie").columns = ["Subject", "Score"];
  document.querySelector("hpcc-pie").data = [
    ["Math", 88],
    ["English", 72],
    ["Science", 60],
    ["History", 50],
    ["Geography", 40],
    ["Biology", 30],
    ["Physics", 20],
    ["Chemistry", 10]
  ];
<\/script>
`)])],-1),g=l('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>See <a href="./../guide/getting-started.html">Getting Started</a> for details on how to include @hpcc-js/web-components in your application</p></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><h3 id="columns" tabindex="-1"><code>columns</code> <a class="header-anchor" href="#columns" aria-hidden="true">#</a></h3><p><i>&quot;Column&quot; labels for the data. Used to describe the data content</i></p><p><strong>Type:</strong> <code>Columns</code></p><p><strong>Default Value:</strong> [&quot;Label&quot;, &quot;Value&quot;]</p><h3 id="data" tabindex="-1"><code>data</code> <a class="header-anchor" href="#data" aria-hidden="true">#</a></h3><p><i>The data content for the pie chart.</i></p><p><strong>Type:</strong> <code>Data</code></p><p><strong>Default Value:</strong> []</p><h3 id="innerradius" tabindex="-1"><code>innerRadius</code> <a class="header-anchor" href="#innerradius" aria-hidden="true">#</a></h3><p><i>Inner radius of the pie chart. A larger value will make the pie chart appear as a donut chart.</i></p><p><strong>Type:</strong> <code>number</code></p><p><strong>Default Value:</strong> 2</p><h3 id="labelheight" tabindex="-1"><code>labelHeight</code> <a class="header-anchor" href="#labelheight" aria-hidden="true">#</a></h3><p><i>Label height. Used to position the labels.</i></p><p><strong>Type:</strong> <code>number</code></p><p><strong>Default Value:</strong> 12</p><h3 id="minouterradius" tabindex="-1"><code>minOuterRadius</code> <a class="header-anchor" href="#minouterradius" aria-hidden="true">#</a></h3><p><i>The minimum outer radius. In general the pie chart will expand to fill the available space.</i></p><p><strong>Type:</strong> <code>number</code></p><p><strong>Default Value:</strong> 20</p><h3 id="seriespercentageformat" tabindex="-1"><code>seriesPercentageFormat</code> <a class="header-anchor" href="#seriespercentageformat" aria-hidden="true">#</a></h3><p><i>Percentage format (when visible)</i></p><p><strong>Type:</strong> <code>string</code></p><p><strong>Default Value:</strong> &quot;,.0f&quot;</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Internally the format string uses <code>d3.format</code> to format the percentage. See <a href="https://github.com/d3/d3-format#locale_format" target="_blank" rel="noopener noreferrer">https://github.com/d3/d3-format#locale_format</a> for details.</p></div><h3 id="seriesvalueformat" tabindex="-1"><code>seriesValueFormat</code> <a class="header-anchor" href="#seriesvalueformat" aria-hidden="true">#</a></h3><p><i>Value format (when visible)</i></p><p><strong>Type:</strong> <code>string</code></p><p><strong>Default Value:</strong> &quot;,.0f&quot;</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Internally the format string uses <code>d3.format</code> to format the value. See <a href="https://github.com/d3/d3-format#locale_format" target="_blank" rel="noopener noreferrer">https://github.com/d3/d3-format#locale_format</a> for details.</p></div><h3 id="showlabels" tabindex="-1"><code>showLabels</code> <a class="header-anchor" href="#showlabels" aria-hidden="true">#</a></h3><p><i>Show labels for each slice</i></p><p><strong>Type:</strong> <code>boolean</code></p><p><strong>Default Value:</strong> true</p><h3 id="showseriespercentage" tabindex="-1"><code>showSeriesPercentage</code> <a class="header-anchor" href="#showseriespercentage" aria-hidden="true">#</a></h3><p><i>Show value as a percentage for each slice</i></p><p><strong>Type:</strong> <code>boolean</code></p><p><strong>Default Value:</strong> false</p><h3 id="showseriesvalue" tabindex="-1"><code>showSeriesValue</code> <a class="header-anchor" href="#showseriesvalue" aria-hidden="true">#</a></h3><p><i>Show value for each slice</i></p><p><strong>Type:</strong> <code>boolean</code></p><p><strong>Default Value:</strong> false</p><h3 id="startangle" tabindex="-1"><code>startAngle</code> <a class="header-anchor" href="#startangle" aria-hidden="true">#</a></h3><p><i>The starting position for the first slice. This is used to rotate the pie chart.</i></p><p><strong>Type:</strong> <code>number</code></p><p><strong>Default Value:</strong> 0</p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2>',49);function f(m,b,v,_,w,y){const a=o("ClientOnly");return c(),s("div",null,[h,p,i(a,null,{default:n(()=>[u]),_:1}),g])}var x=r(d,[["render",f]]);export{V as __pageData,x as default};
