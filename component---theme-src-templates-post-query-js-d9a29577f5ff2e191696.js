"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[492],{19271:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(93580),l=r(38121),a=r(27378),o=r(29601),i=(r(25414),r(45962));var c=function(e){var t,r,n,c=e.location,s=e.sidebarItems,u=(t="sidebar",r=a.useRef(),n=a.useCallback((function(e){return window.sessionStorage.setItem(t,e.target.scrollTop)}),[t]),a.useEffect((function(){var e=window.sessionStorage.getItem(t);e&&r.current&&(r.current.scrollTop=e)}),[t]),{ref:r,onScroll:n});return Array.isArray(s)&&s.length>0?a.createElement(l.Z,{display:["none",null,null,"block"],position:"sticky",top:o.M,height:"calc(100vh - "+o.M+"px)",minWidth:260,color:"auto.gray.8",bg:"auto.gray.0"},a.createElement(l.Z,Object.assign({borderStyle:"solid",borderColor:"border.primary"},u,{borderWidth:0,borderRightWidth:1,borderRadius:0,height:"100%",style:{overflow:"auto"}}),a.createElement(l.Z,{display:"flex",flexDirection:"column"},a.createElement(i.Z,{location:c,items:s})))):null},s=r(35280);var u=function(e){var t=e.children,r=e.location,n=e.pageContext,i=n.sidebarItems,u=n.tagsGroups,m=(0,s.u)(i,u);return a.createElement(l.Z,{display:"flex",flexDirection:"column",minHeight:"100vh"},a.createElement(o.Z,{location:r,sidebarItems:m,tagsGroups:u}),a.createElement(d,{display:"flex",flex:"1 1 auto",flexDirection:"row"},a.createElement(c,{location:r,sidebarItems:m}),a.createElement(l.Z,{as:"main"},t)))},d=(0,n.ZP)(l.Z).withConfig({displayName:"layout___StyledBox",componentId:"sc-7a5ttt-0"})({zIndex:0})},49278:function(e,t,r){var n=r(27378),l=r(48942),a=r(38121),o=r(33054),i=r(89042);t.Z=function(e){var t=e.tag,r=e.nodes,c=e.shouldShowInstantView,s=void 0!==c&&c,u=(0,i.Z)(),d=r.sort((function(e,t){var r=new Date(e.fields.lastUpdatedAt||0).getTime();return new Date(t.fields.lastUpdatedAt||0).getTime()-r})),m=function(e){return n.createElement(l.Z.a,Object.assign({},e,{references:s?d:[]}))};return n.createElement(a.Z,null,n.createElement(l.Z.h2,null,"# ",t),n.createElement(a.Z,null,n.createElement(l.Z.ul,null,d&&d.map((function(e){return n.createElement("li",{key:e.fields.slug},n.createElement(m,{href:e.fields.slug},e.fields.title),u.shouldShowLastUpdated&&n.createElement(o.Z,{color:"text.placeholder",fontSize:1},"  - ",u.lastUpdatedText," ",e.fields.lastUpdated))})))))}},79836:function(e,t,r){r.r(t),r.d(t,{default:function(){return O}});var n=r(93580),l=r(27378),a=r(81437),o=r(19271),i=r(38121),c=r(77410),s=r(97709),u=r(48149),d=r(48942),m=function(e){var t=e.references;return t.length?l.createElement(i.Z,{bg:"auto.gray.1",borderRadius:"2",px:"3",py:"4",mt:"4"},l.createElement(c.Z,{as:"h4",fontSize:"2",mb:"3",color:"text.placeholder"},l.createElement(s.Z,{mr:2,size:16,sx:{top:"-3px",position:"relative"},icon:u.xPt,color:"text.placeholder"}),"LINKS TO THIS PAGE"),l.createElement(d.Z.ul,{style:{paddingLeft:"16px"}},t.map((function(e){return l.createElement("li",{key:e.fields.slug},l.createElement(d.Z.a,{href:e.fields.slug,references:[e]},e.fields.title||e.fields.slug))})))):null},f=r(81368),p=r(13357),g=r(33054),E=r(29601),h=r(45895),b=r(89042);var y=function(e){var t=e.lastUpdated,r=(0,b.Z)(),n=r.lastUpdatedText;return r.shouldShowLastUpdated?l.createElement("div",null,t?l.createElement(g.Z,{fontSize:1,color:"auto.gray.7",mt:1},n," ",l.createElement("b",null,t)):null):null};function Z(e){var t=e.editUrl,r=e.lastUpdated,n=(0,b.Z)();return t||r?l.createElement(i.Z,{borderStyle:"solid",borderColor:"border.primary",borderWidth:0,borderTopWidth:1,borderRadius:0,mt:8,py:5},l.createElement(i.Z,{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},t?l.createElement(h.Z,{mb:"1",href:t},l.createElement(s.Z,{icon:u.vdY,mr:2}),n.editUrlText):null,r&&l.createElement(y,{lastUpdated:r}))):null}Z.defaultProps={contributors:[]};var x=Z;function v(e){var t=e.items,r=e.depth,n=function(e,t){var r=l.useState(),n=r[0],a=r[1],o=l.useRef();return l.useEffect((function(){var r=e.map((function(e){return document.querySelector(e)}));return o.current&&o.current.disconnect(),o.current=new IntersectionObserver((function(e){e.forEach((function(e){null!=e&&e.isIntersecting&&a(e.target.getAttribute("id"))}))}),t),r.forEach((function(e){return o.current.observe(e)})),function(){return o.current.disconnect()}}),[e,t]),n}(t.map((function(e){return'[id="'+e.url.slice(1)+'"]'})),{rootMargin:"0% 0% -24% 0%"});return l.createElement(S,{as:"ul",m:0,p:0},t.map((function(e){return l.createElement(i.Z,{as:"li",key:e.url,pl:r>0?3:0},e.title?l.createElement(h.Z,{display:"inline-block",py:1,href:e.url,fontSize:[2,null,1],color:"auto.gray.6",sx:{fontWeight:e.url==="#"+n?"bold":"medium"},"aria-current":e.url==="#"+n?"location":void 0},e.title):null,e.items?l.createElement(v,{items:e.items,depth:r+1}):null)})))}v.defaultProps={depth:0};var w=v,S=(0,n.ZP)(i.Z).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-1jtv948-0"})({listStyle:"none"}),k=r(69373),I=r.n(k),U=r(49278),C=function(e){var t=e.tags,r=e.nodes;return t.length?l.createElement(i.Z,{bg:"auto.gray.1",borderRadius:"2",px:"3",py:"4",mt:"4"},l.createElement(c.Z,{as:"h4",fontSize:"2",mb:"3",color:"text.placeholder"},l.createElement(s.Z,{mr:1,size:16,sx:{top:"-3px",position:"relative"},icon:u.aqf,color:"text.placeholder"}),"Tags"),l.createElement(i.Z,null,t.map((function(e){var t=[{fields:{slug:"/tags/"+I()(e)+"/"},component:l.createElement(U.Z,{nodes:r.filter((function(t){return t.frontmatter.tags.includes(e)})),tag:e})}];return l.createElement(d.Z.a,{key:e,href:"/tags/"+I()(e)+"/",references:t,mr:3},"#",e)})))):null},T=r(35280);function A(e){var t=e.type,r=void 0===t?"normal":t,n=e.title,a=e.url,o=e.items,i=e.depth,c=void 0===i?0:i;return o=o||[],l.createElement("li",null,l.createElement(d.Z.a,{href:a},"tag"===r?"#"+n:n),Array.isArray(o)&&o.length>0?l.createElement(d.Z.ul,null,o.map((function(e,t){return l.createElement(A,Object.assign({key:e.title,depth:c+1},e))}))):null)}var D=function(e){var t=e.data,r=e.pageContext,n=e.location,s=t.mdx,u=t.tagsOutbound,h=(0,b.Z)(),y=(0,T.u)(r.sidebarItems,r.tagsGroups),Z=s.tableOfContents,v=s.frontmatter,S=s.fields,k=s.rawBody,I=s.body,U=s.inboundReferences,D=s.outboundReferences,O=s.excerpt,W=S.title,M=S.lastUpdatedAt,P=S.lastUpdated,_=S.gitCreatedAt,j=S.slug,z=S.url,L=S.editUrl,B=v.title,G=v.date,N=v.description,H=v.imageAlt,q=v.dateModified,X=v.tags,K=v.language,V=X&&X[0],Y=G?new Date(G):_?new Date(_):null,F={title:W,frontmatterTitle:B,description:N,rawBody:k,excerpt:O,datePublished:Y,dateModified:q?new Date(q):M?new Date(M):Y,category:V,imageUrl:v.image?v.image.publicURL:null,imageAlt:H,url:z,slug:j,tags:X||[],language:K};return l.createElement(o.Z,{pageContext:r,location:n},l.createElement(p.Z,{post:F}),l.createElement(i.Z,{id:"skip-nav",display:"flex",width:"100%",p:[4,5,6,7],sx:{justifyContent:"center",flexDirection:"row-reverse"}},Z.items?l.createElement(R,{sx:{width:220,flex:"0 0 auto",marginLeft:6},display:["none",null,"block"],position:"sticky",top:E.M+24,maxHeight:"calc(100vh - "+E.M+"px - 24px)"},l.createElement(g.Z,{display:"inline-block",fontWeight:"bold",mb:1},"On this page"),l.createElement(w,{items:Z.items})):null,l.createElement(i.Z,{width:"100%",maxWidth:"960px"},B&&l.createElement(i.Z,{mb:4},l.createElement(i.Z,{display:"flex",sx:{alignItems:"center"}},l.createElement(c.Z,{as:"h1",mr:2},B))),Z.items?l.createElement(i.Z,{borderWidth:"1px",borderStyle:"solid",borderColor:"border.primary",borderRadius:2,display:["block",null,"none"],mb:5,bg:"auto.gray.1"},l.createElement(i.Z,{p:3},l.createElement(i.Z,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},l.createElement(g.Z,{fontWeight:"bold"},"On this page"))),l.createElement(i.Z,{p:3,sx:{borderTop:"1px solid",borderColor:"border.gray"}},l.createElement(w,{items:Z.items}))):null,l.createElement(f.MDXProvider,{components:{a:function(e){return l.createElement(d.Z.a,Object.assign({},e,{references:D}))}}},l.createElement(a.MDXRenderer,null,I)),"/"===j&&h.shouldShowSidebarListOnIndex&&y.length>0&&y.map((function(e){return l.createElement(i.Z,{key:e.title},l.createElement(d.Z.h2,null,e.title),e.items.map((function(e){return l.createElement(d.Z.ul,{key:e.title},l.createElement(A,{title:e.title,url:e.url,type:e.type,items:e.items}))})))})),l.createElement(m,{references:U}),l.createElement(C,{tags:X,nodes:u.nodes}),l.createElement(x,{editUrl:L,lastUpdated:P}))))},R=(0,n.ZP)(i.Z).withConfig({displayName:"post-page___StyledBox",componentId:"sc-17hbw1s-0"})({gridArea:"table-of-contents",overflow:"auto"}),O=D},35280:function(e,t,r){r.d(t,{u:function(){return n}});var n=function(e,t){return e.length>0?e:t.length>0?[{title:"Tags",items:t}]:[]}}}]);
//# sourceMappingURL=component---theme-src-templates-post-query-js-d9a29577f5ff2e191696.js.map