!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=74)}({74:function(e,t){window.PGC_SGB&&(console.log("%c SimpLy Gallery Block v.2.2.1 ","background: rgba(0,0,0,0.2); color: rgba(255,255,255,1)"),window.PGC_SGB.searcher=function(){var e=["masonry","justified","grid","slider","albums"];window.PGC_SGB.isPremium&&(e.push("portfolio"),e.push("portfolio2"),e.push("tagsbox"),e.push("list"),e.push("splitcarousel"),e.push("horizon"));var t={PLUG_ID:"pgcsimplygalleryblock",SKINS_LIST:e,BLOCK_PREF:"wp-block",checkScrip:function(e){for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1){if(t[n].src===e)return n=t.length,!0}return!1},loadSkinScripts:function(e){for(var n="pgc_sgb_".concat(e),r=document.getElementsByClassName("".concat(t.BLOCK_PREF,"-").concat(t.PLUG_ID,"-").concat(e)),o={},c=window.PGC_SGB,i=0;i<r.length;i+=1)if(!r[i].classList.contains("simpLy-gallery-freedom-block")&&c&&c.skinsList&&c.skinsList[n]&&!o[e]){if(!t.checkScrip(c.skinsList[n])){var l=document.createElement("script");l.setAttribute("type","text/javascript"),l.src=c.skinsList[n],l.async=!0,document.body.appendChild(l)}o[e]=!0}},removeAllGalleries:function(){var e=window.PGC_SGB;if(e.galleries)for(var t in e.galleries)if(e.galleries[t]){var n=e.galleries[t];n.remove(),n.viewPort.parentNode&&n.viewPort.parentNode.removeChild(n.viewPort),delete window.PGC_SGB.galleries[t]}},initBlocks:function(){for(var e=0;e<t.SKINS_LIST.length;e+=1){var n=t.SKINS_LIST[e],r=document.getElementsByClassName("".concat(t.BLOCK_PREF,"-").concat(t.PLUG_ID,"-").concat(n));if(r.length)if(window["pgc_sgb_".concat(n)])for(var o=0;o<r.length;o+=1){var c=r[o];!c.classList.contains("simpLy-gallery-freedom-block")&&c.getElementsByClassName("sgb-preloader").length&&window["pgc_sgb_".concat(n)].createGalleryByVp(c)}else t.loadSkinScripts(n)}},initBlocksBySlugID:function(e,n){if(window["pgc_sgb_".concat(e)]){var r=document.getElementById(n);r&&window["pgc_sgb_".concat(e)].createGalleryByVp(r)}else t.loadSkinScripts(e)},searchBlocks:function(){for(var e=0;e<t.SKINS_LIST.length;e+=1)t.loadSkinScripts(t.SKINS_LIST[e])},toType:function(e){for(var n=t.SKINS_LIST.slice(),r=0;r<n.length;r+=1)n[r]===e&&(n.splice(r,1),r=n.length);for(var o=0;o<n.length;o+=1){var c=document.getElementsByClassName("".concat(t.BLOCK_PREF,"-").concat(t.PLUG_ID,"-").concat(n[o]));if(c.length>0)for(var i=0;i<c.length;i+=1){if(window.PGC_SGB.galleries)for(var l in window.PGC_SGB.galleries)if(window.PGC_SGB.galleries[l]){var a=window.PGC_SGB.galleries[l];a.viewPort===c[i]&&a.remove(),delete window.PGC_SGB.galleries[l]}var s=c[i];s.className="".concat(t.BLOCK_PREF,"-").concat(t.PLUG_ID,"-").concat(e),window["pgc_sgb_".concat(e)]&&window["pgc_sgb_".concat(e)].createGalleryByVp&&window["pgc_sgb_".concat(e)].createGalleryByVp(s)}}t.searchBlocks()}};return t}(),window.addEventListener("load",(function(){window.PGC_SGB.searcher.searchBlocks()})))}});