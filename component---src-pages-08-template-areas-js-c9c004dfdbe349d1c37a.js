webpackJsonp([0xbf18e365346b],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/danbrown/Documents/projects/008_mozilla/playground-3/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/danbrown/Documents/projects/008_mozilla/playground-3/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/danbrown/Documents/projects/008_mozilla/playground-3/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/danbrown/Documents/projects/008_mozilla/playground-3/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/danbrown/Documents/projects/008_mozilla/playground-3/node_modules/babel-preset-stage-0/lib/index.js","/Users/danbrown/Documents/projects/008_mozilla/playground-3/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/08-template-areas.js':function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n("./node_modules/react/react.js"),l=a(r),o=n("./src/components/layout/Main.js"),s=a(o),d=n("./src/components/CodeBlock.js"),i=a(d),u=n("./src/components/layout/DevHomework.js"),c=a(u),m=n("./src/components/CodepenLink.js"),p=a(m),f=function(){return l.default.createElement("div",null,l.default.createElement("h2",null,"Template Areas"),l.default.createElement("p",null,"In our previous example, we learned how to create a basic layout by positioning items with grid lines. Another method for positioning items is to use named grid areas with the"," ",l.default.createElement("code",null,"grid-template-areas")," and ",l.default.createElement("code",null,"grid-area")," properties. The best way to explain this is with an example. Let's recreate the grid from our previous example with the grid-template-areas property:"),l.default.createElement(i.default,null,'\n.container {\n  display: grid;\n  width: 100%;\n  height: 600px;\n  grid-template-columns: 200px 1fr 1fr;\n  grid-template-rows: 80px 1fr 1fr 100px;\n  grid-gap: 1rem;\n  grid-template-areas:\n      "header header header"\n      "sidebar content-1 content-1"\n      "sidebar content-2 content-3"\n      "footer footer footer";\n}\n      '),l.default.createElement("p",null,"Here we have defined three columns and four rows. Instead of placing each individual item, we can define the entire layout using the ",l.default.createElement("code",null,"grid-template-areas")," property. We can then assign those areas to each grid item using the ",l.default.createElement("code",null,"grid-area")," property."),l.default.createElement("p",null,"Our HTML:"),l.default.createElement(i.default,null,'\n<div class="container">\n  <div class="header">header</div>\n  <div class="sidebar">sidebar</div>\n  <div class="content-1">Content-1</div>\n  <div class="content-2">Content-2</div>\n  <div class="content-3">Content-3</div>\n  <div class="footer">footer</div>\n</div>\n      '),"The rest of our CSS:",l.default.createElement(i.default,null,"\n.header {\n  grid-area: header;\n}\n\n.sidebar {\n  grid-area: sidebar;\n}\n\n.content-1 {\n  grid-area: content-1;\n}\n\n.content-2 {\n  grid-area: content-2;\n}\n\n.content-3 {\n  grid-area: content-3;\n}\n\n.footer {\n  grid-area: footer;\n}\n      "),l.default.createElement("p",null,"Here is the result:"),l.default.createElement("div",{className:"container-8"},l.default.createElement("div",{className:"item header-8"},"header"),l.default.createElement("div",{className:"item sidebar-8"},"sidebar"),l.default.createElement("div",{className:"item content-1-8"},"Content-1"),l.default.createElement("div",{className:"item content-2-8"},"Content-2"),l.default.createElement("div",{className:"item content-3-8"},"Content-3"),l.default.createElement("div",{className:"item footer-8"},"footer")),l.default.createElement(p.default,{link:"https://codepen.io/mozilladevelopers/pen/Xejyed"}))},g=function(){return l.default.createElement(c.default,null,l.default.createElement("p",null,"Did you know that FireFox DevTools can display the area names? Try it out! Inspect the grid above and open the layout panel. From here you can toggle the overlay grid and the 'Display Area Names' feature. Don't have Firefox?"," ",l.default.createElement("a",{href:"https://www.mozilla.org/en-US/firefox/developer/"},"Download Firefox Developer Edition"),"."))};t.default=function(){return l.default.createElement(s.default,{currentPageNum:8,tutorial:l.default.createElement(f,null),homework:l.default.createElement(g,null)})},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-08-template-areas-js-c9c004dfdbe349d1c37a.js.map