(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{aArQ:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("/MKj"),o=a("bKel"),c=a.n(o),l=a("R/WZ"),s=a("Ji2X"),m=a("5CWz"),h=a("bXiM"),p=a("lO0E"),d=a("ofer"),u=a("hlie"),b=a("bSwy"),w=a.n(b),g=a("MjS+"),f=a("ye/S"),E=Object(l["a"])(e=>({offset:e.mixins.toolbar,search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(f["b"])(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(f["b"])(e.palette.common.white,.25)},marginLeft:0,width:"100%",[e.breakpoints.down("sm")]:{marginLeft:e.spacing(1),width:"auto"},[e.breakpoints.up("sm")]:{marginLeft:e.spacing(1),width:"auto"}},searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%",[e.breakpoints.up("sm")]:{width:120,"&:focus":{width:200}},[e.breakpoints.down("sm")]:{width:120,"&:focus":{width:150}}},media:{height:0,paddingTop:"56.25%"},infiniteScroll:{minHeight:600,height:"100vh",marginTop:20}})),v=e=>{var t=e.dispatch,a=E();return i.a.createElement("div",{className:a.search},i.a.createElement("div",{className:a.searchIcon},i.a.createElement(w.a,null)),i.a.createElement(g["a"],{placeholder:"Search",classes:{root:a.inputRoot,input:a.inputInput},onKeyUp:e=>{t({type:"news/setKeyword",payload:{keyword:e.target.value}})},inputProps:{"aria-label":"search"}}))},j=Object(n["memo"])(Object(r["c"])()(v)),y=()=>i.a.createElement(h["a"],{position:"fixed"},i.a.createElement(s["a"],{maxWidth:"lg"},i.a.createElement(p["a"],null,i.a.createElement(d["a"],{variant:"h6"},i.a.createElement(u["a"],{href:"./",color:"inherit"},"US News")),i.a.createElement("div",{style:{flexGrow:1}}),i.a.createElement(j,null)))),k=Object(n["memo"])(y),O=Object(l["a"])(e=>({offset:e.mixins.toolbar,main:{minHeight:600,height:"100vh",marginTop:20}}));function x(e){var t=e.children,a=O();return i.a.createElement(i.a.Fragment,null,i.a.createElement(m["a"],null),i.a.createElement(k,null),i.a.createElement("div",{className:a.offset}),i.a.createElement("main",{className:a.main},i.a.createElement(s["a"],{maxWidth:"lg"},t)))}t["default"]=c()(Object(r["c"])()(x))}}]);