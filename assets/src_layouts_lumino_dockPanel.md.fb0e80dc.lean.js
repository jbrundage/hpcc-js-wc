import{_ as i,r as l,c as s,e as o,w as n,b as e,d as t,a as d,o as r}from"./app.12365119.js";const x='{"title":"Dock Panel","description":"","frontmatter":{},"headers":[{"level":2,"title":"Attributes","slug":"attributes"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"closeRequest","slug":"closerequest"},{"level":3,"title":"layoutChanged","slug":"layoutchanged"},{"level":2,"title":"Child Element data-??? attributes","slug":"child-element-data-attributes"},{"level":3,"title":"data-label","slug":"data-label"},{"level":3,"title":"data-mode","slug":"data-mode"},{"level":3,"title":"data-ref","slug":"data-ref"},{"level":3,"title":"data-closable","slug":"data-closable"},{"level":3,"title":"data-caption","slug":"data-caption"}],"relativePath":"src/layouts/lumino/dockPanel.md","lastUpdated":1642156630689}',c={},u=e("h1",{id:"dock-panel",tabindex:"-1"},[t("Dock Panel "),e("a",{class:"header-anchor",href:"#dock-panel","aria-hidden":"true"},"#")],-1),m=e("p",null,[e("strong",null,"tag"),t(": "),e("code",null,"<hpcc-dockpanel>")],-1),h=e("hpcc-preview",{previewBorder:"0px",style:{width:"100%",height:"600px"}},[e("pre",null,[e("code",null,`<hpcc-dockpanel style="width:100%;height:100%">
  <div id="one" data-label="AAAA" style="overflow:auto;min-width:48px;min-height:48px">
    <h1>AAAA HTML Ipsum Presents</h1>
    <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
  </div>
  <div id="three" data-mode="split-right" data-closable="true" style="overflow:auto;min-width:48px;min-height:48px">
    <h1>CCCC HTML Ipsum Presents</h1>
    <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
  </div>
  <div data-mode="tab-after" data-ref="three" data-caption="What no label!" style="overflow:auto;min-width:48px;min-height:48px">
    <h1>DDDD HTML Ipsum Presents</h1>
    <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
  </div>
  <div data-mode="split-bottom" data-ref="one" style="overflow:auto;min-width:48px;min-height:48px">
    <h1>BBBB HTML Ipsum Presents</h1>
    <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
  </div>
</hpcc-dockpanel>
<script>
  document.querySelector("hpcc-dockpanel").addEventListener("closeRequest", function (evt) {
    if (!confirm(\`Close Tab "\${evt.detail.tagName} #\${evt.detail.id}"?\`)) {
      evt.preventDefault();
    }
  });
<\/script>
`)])],-1),p=d("",30);function b(f,g,v,w,_,q){const a=l("ClientOnly");return r(),s("div",null,[u,m,o(a,null,{default:n(()=>[h]),_:1}),p])}var T=i(c,[["render",b]]);export{x as __pageData,T as default};
