(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{RXBc:function(e,s,a){"use strict";a.r(s);var t=a("q1tI"),r=a.n(t),n=a("/MKj"),j=a("iae6"),l=a("tRbT"),i=a("R/WZ"),o=a("RotF"),c=a.n(o),m=a("wd/R"),d=a.n(m),u=a("50B7"),h=a("30+C"),g=a("469l"),k=a("ofer"),p=a("Ie8z"),b=a("oa/T"),v=a("hlie"),y="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",z=Object(i["a"])(e=>({card:{height:"100%"},media:{height:0,paddingTop:"56.25%"}})),A=e=>{var s=e.article,a=z();if(s)return r.a.createElement(h["a"],{className:a.card},r.a.createElement(u["a"],{avatar:r.a.createElement(g["a"],{"aria-label":"recipe",className:a.avatar},s.source.name.charAt(0)),title:s.source.name,subheader:d()(s.publishedAt).format("YYYY-MM-DD HH:mm")}),r.a.createElement(p["a"],{className:a.media,image:s.urlToImage||y,title:s.title}),r.a.createElement(b["a"],null,r.a.createElement(k["a"],{variant:"h6",component:"h2",gutterBottom:!0},r.a.createElement(v["a"],{href:s.url,color:"inherit",target:"_blank",rel:"noopener noreferrer"},s.title)),r.a.createElement(k["a"],{variant:"body2",color:"textSecondary",component:"p"},s.description)))},f=Object(t["memo"])(A),E=Object(i["a"])(e=>({loadingBlock:{marginTop:90,marginBottom:120,display:"flex",flexDirection:"column",alignItems:"center"}}));function x(e){var s=e.articles,a=e.dispatch,t=e.isLoading,n=E();return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:n.loadingBlock},r.a.createElement(j["a"],{size:60,thickness:4})):null,r.a.createElement(c.a,{pageStart:1,loadMore:e=>a({type:"news/fetchMore",payload:{isAppend:!0,page:e}}),hasMore:s.length<100&&0!==s.length,loader:r.a.createElement("div",{className:n.loadingBlock,key:"loader"},r.a.createElement(j["a"],{size:60,thickness:4}))},r.a.createElement(l["a"],{container:!0,spacing:1},r.a.createElement(l["a"],{container:!0,item:!0,xs:12,spacing:3,direction:"row",alignItems:"stretch"},s.map(e=>r.a.createElement(l["a"],{item:!0,md:4,sm:6,xs:12,key:e.url},r.a.createElement(f,{article:e})))))))}s["default"]=Object(n["c"])(e=>{var s=e.news,a=e.loading,t=s.totalResults,r=s.articles;return{totalResults:t,articles:r,isLoading:a.effects["news/initFetch"]}})(x)},RnhZ:function(e,s,a){var t={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-SG":"zavE","./en-SG.js":"zavE","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function r(e){var s=n(e);return a(s)}function n(e){if(!a.o(t,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=n,e.exports=r,r.id="RnhZ"}}]);