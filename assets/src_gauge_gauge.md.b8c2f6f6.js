import{_ as a,r as i,c as r,e as l,w as n,b as e,d as t,a as c,o as s}from"./app.12365119.js";const T='{"title":"Gauge","description":"","frontmatter":{},"headers":[{"level":2,"title":"Attributes","slug":"attributes"},{"level":3,"title":"colorDomain","slug":"colordomain"},{"level":3,"title":"colorRange","slug":"colorrange"},{"level":3,"title":"emptyColor","slug":"emptycolor"},{"level":3,"title":"showTick","slug":"showtick"},{"level":3,"title":"tickColor","slug":"tickcolor"},{"level":3,"title":"tickValue","slug":"tickvalue"},{"level":3,"title":"tickValueDescription","slug":"tickvaluedescription"},{"level":3,"title":"title","slug":"title"},{"level":3,"title":"titleDescription","slug":"titledescription"},{"level":3,"title":"tooltip","slug":"tooltip"},{"level":3,"title":"value","slug":"value"},{"level":3,"title":"valueDescription","slug":"valuedescription"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"src/gauge/gauge.md","lastUpdated":1642154924753}',d={},u=e("h1",{id:"gauge",tabindex:"-1"},[t("Gauge "),e("a",{class:"header-anchor",href:"#gauge","aria-hidden":"true"},"#")],-1),p=e("p",null,[e("strong",null,"tag"),t(": "),e("code",null,"<hpcc-gauge>")],-1),h=e("hpcc-preview",{previewBorder:"0px",previewHeightRatio:"0.33",style:{width:"100%",height:"400px"}},[e("pre",null,[e("code",null,`<hpcc-splitPanel style="width:100%;height:100%">
  <hpcc-gauge showTick title="G-01" titleDescription="Gauge 01" style="width:100%;min-width:48px;height:100%">
  </hpcc-gauge>
  <hpcc-gauge title="G-02" style="width:100%;min-width:48px;height:100%">
  </hpcc-gauge>
  <hpcc-gauge showTick title="G-03" style="width:100%;min-width:48px;height:100%">
  </hpcc-gauge>
  <hpcc-gauge title="G-04" style="width:100%;min-width:48px;height:100%">
  </hpcc-gauge>
</hpcc-splitPanel>
<script>
  for (const gauge of document.querySelectorAll("hpcc-gauge")) {
    gauge.value = Math.random();
    gauge.tickValue = Math.random();
  }
<\/script>
`)])],-1),g=c('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>See <a href="./../../README.html">Getting Started</a> for details on how to include @hpcc-js/web-components in your application</p></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><h3 id="colordomain" tabindex="-1"><code>colorDomain</code> <a class="header-anchor" href="#colordomain" aria-hidden="true">#</a></h3><p><i>This array augments the mapping of the value to the fill colorRange</i></p><p><strong>Type:</strong> <code>number[]</code></p><p><strong>Default Value:</strong> [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]</p><h3 id="colorrange" tabindex="-1"><code>colorRange</code> <a class="header-anchor" href="#colorrange" aria-hidden="true">#</a></h3><p><i>Array of colors for the filled gauge portion. The fill color will be relative to the gauge value</i></p><p><strong>Type:</strong> <code>HTMLColor[]</code></p><p><strong>Default Value:</strong> [&quot;green&quot;, &quot;green&quot;, &quot;green&quot;, &quot;green&quot;, &quot;green&quot;, &quot;green&quot;, &quot;green&quot;, &quot;green&quot;, &quot;orange&quot;, &quot;red&quot;, &quot;red&quot;]</p><h3 id="emptycolor" tabindex="-1"><code>emptyColor</code> <a class="header-anchor" href="#emptycolor" aria-hidden="true">#</a></h3><p><i>Color of the empty portion of the gauge</i></p><p><strong>Type:</strong> <code>string</code></p><p><strong>Default Value:</strong> &quot;lightgray&quot;</p><h3 id="showtick" tabindex="-1"><code>showTick</code> <a class="header-anchor" href="#showtick" aria-hidden="true">#</a></h3><p><i>Show &quot;tick&quot; indicator on the gauge</i></p><p><strong>Type:</strong> <code>boolean</code></p><p><strong>Default Value:</strong> false</p><h3 id="tickcolor" tabindex="-1"><code>tickColor</code> <a class="header-anchor" href="#tickcolor" aria-hidden="true">#</a></h3><p><i>Color of the tick indicator</i></p><p><strong>Type:</strong> <code>HTMLColor</code></p><p><strong>Default Value:</strong> &quot;black&quot;</p><h3 id="tickvalue" tabindex="-1"><code>tickValue</code> <a class="header-anchor" href="#tickvalue" aria-hidden="true">#</a></h3><p><i>Tick value of the gauge, expects value from 0 to 1</i></p><p><strong>Type:</strong> <code>number</code></p><p><strong>Default Value:</strong> 0</p><h3 id="tickvaluedescription" tabindex="-1"><code>tickValueDescription</code> <a class="header-anchor" href="#tickvaluedescription" aria-hidden="true">#</a></h3><p><i>Description to display when mouse is over the tick indicators</i></p><p><strong>Type:</strong> <code>string</code></p><p><strong>Default Value:</strong> &quot;&quot;</p><h3 id="title" tabindex="-1"><code>title</code> <a class="header-anchor" href="#title" aria-hidden="true">#</a></h3><p><i>Title to display at the bottom of the gauge</i></p><p><strong>Type:</strong> <code>string</code></p><p><strong>Default Value:</strong> &quot;&quot;</p><h3 id="titledescription" tabindex="-1"><code>titleDescription</code> <a class="header-anchor" href="#titledescription" aria-hidden="true">#</a></h3><p><i>Description to display when mouse is over the title</i></p><p><strong>Type:</strong> <code>string</code></p><p><strong>Default Value:</strong> &quot;&quot;</p><h3 id="tooltip" tabindex="-1"><code>tooltip</code> <a class="header-anchor" href="#tooltip" aria-hidden="true">#</a></h3><p><i>Tooltip to display when mouse is over the gauge</i></p><p><strong>Type:</strong> <code>string</code></p><p><strong>Default Value:</strong> &quot;&quot;</p><h3 id="value" tabindex="-1"><code>value</code> <a class="header-anchor" href="#value" aria-hidden="true">#</a></h3><p><i>Main value of the gauge, expects value from 0 to 1</i></p><p><strong>Type:</strong> <code>number</code></p><p><strong>Default Value:</strong> 0</p><h3 id="valuedescription" tabindex="-1"><code>valueDescription</code> <a class="header-anchor" href="#valuedescription" aria-hidden="true">#</a></h3><p><i>Description to display when mouse is over the gauge arc</i></p><p><strong>Type:</strong> <code>string</code></p><p><strong>Default Value:</strong> &quot;&quot;</p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2>',51);function v(f,m,q,y,_,k){const o=i("ClientOnly");return s(),r("div",null,[u,p,l(o,null,{default:n(()=>[h]),_:1}),g])}var w=a(d,[["render",v]]);export{T as __pageData,w as default};