import{_ as a,r as i,c as r,e as l,w as n,b as e,d as t,a as c,o as s}from"./app.12365119.js";const T='{"title":"Gauge","description":"","frontmatter":{},"headers":[{"level":2,"title":"Attributes","slug":"attributes"},{"level":3,"title":"colorDomain","slug":"colordomain"},{"level":3,"title":"colorRange","slug":"colorrange"},{"level":3,"title":"emptyColor","slug":"emptycolor"},{"level":3,"title":"showTick","slug":"showtick"},{"level":3,"title":"tickColor","slug":"tickcolor"},{"level":3,"title":"tickValue","slug":"tickvalue"},{"level":3,"title":"tickValueDescription","slug":"tickvaluedescription"},{"level":3,"title":"title","slug":"title"},{"level":3,"title":"titleDescription","slug":"titledescription"},{"level":3,"title":"tooltip","slug":"tooltip"},{"level":3,"title":"value","slug":"value"},{"level":3,"title":"valueDescription","slug":"valuedescription"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"src/gauge/gauge.md","lastUpdated":1642156091335}',d={},u=e("h1",{id:"gauge",tabindex:"-1"},[t("Gauge "),e("a",{class:"header-anchor",href:"#gauge","aria-hidden":"true"},"#")],-1),p=e("p",null,[e("strong",null,"tag"),t(": "),e("code",null,"<hpcc-gauge>")],-1),h=e("hpcc-preview",{previewBorder:"0px",previewHeightRatio:"0.33",style:{width:"100%",height:"400px"}},[e("pre",null,[e("code",null,`<hpcc-splitPanel style="width:100%;height:100%">
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
`)])],-1),g=c("",51);function v(f,m,q,y,_,k){const o=i("ClientOnly");return s(),r("div",null,[u,p,l(o,null,{default:n(()=>[h]),_:1}),g])}var w=a(d,[["render",v]]);export{T as __pageData,w as default};
