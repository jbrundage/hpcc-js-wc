import{_ as r,r as o,c as s,e as i,w as n,b as e,d as t,a as l,o as c}from"./app.12365119.js";const T='{"title":"Pie","description":"","frontmatter":{},"headers":[{"level":2,"title":"Attributes","slug":"attributes"},{"level":3,"title":"columns","slug":"columns"},{"level":3,"title":"data","slug":"data"},{"level":3,"title":"innerRadius","slug":"innerradius"},{"level":3,"title":"labelHeight","slug":"labelheight"},{"level":3,"title":"minOuterRadius","slug":"minouterradius"},{"level":3,"title":"seriesPercentageFormat","slug":"seriespercentageformat"},{"level":3,"title":"seriesValueFormat","slug":"seriesvalueformat"},{"level":3,"title":"showLabels","slug":"showlabels"},{"level":3,"title":"showSeriesPercentage","slug":"showseriespercentage"},{"level":3,"title":"showSeriesValue","slug":"showseriesvalue"},{"level":3,"title":"startAngle","slug":"startangle"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"src/pie/pie.md","lastUpdated":1642154924753}',d={},h=e("h1",{id:"pie",tabindex:"-1"},[t("Pie "),e("a",{class:"header-anchor",href:"#pie","aria-hidden":"true"},"#")],-1),p=e("p",null,[e("strong",null,"tag"),t(": "),e("code",null,"<hpcc-pie>")],-1),u=e("hpcc-preview",{previewBorder:"0px",style:{width:"100%",height:"400px"}},[e("pre",null,[e("code",null,`<hpcc-splitPanel style="width:100%;height:100%">
  <hpcc-pie style="width:100%;min-width:48px;height:100%">
  </hpcc-pie>
  <hpcc-pie innerRadius=80 style="width:100%;min-width:48px;height:100%">
  </hpcc-pie>
</hpcc-splitPanel>
<script>
  for (const pie of document.querySelectorAll("hpcc-pie")) {
    pie.columns = ["Subject", "Score"];
    pie.data = [
      ["Math", 88],
      ["English", 72],
      ["Science", 60],
      ["History", 50],
      ["Geography", 40],
      ["Biology", 30],
      ["Physics", 20],
      ["Chemistry", 10]
    ];
  }
<\/script>
`)])],-1),g=l("",49);function f(m,b,v,_,w,y){const a=o("ClientOnly");return c(),s("div",null,[h,p,i(a,null,{default:n(()=>[u]),_:1}),g])}var V=r(d,[["render",f]]);export{T as __pageData,V as default};
