!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const{board:e}=window.miro,t={card:{textFields:["title","description"]},image:{textFields:["title","url"]},shape:{textFields:["content"]},sticky_note:{textFields:["content"]},text:{textFields:["content"]}};function n(e){var t=new Array;const n=[...e.matchAll("[$]{1}[a-zA-Z0-9äöüÄÖÜ]+")];for(var o of n)t.push(o[0].substring(1));return t}function o(e,t){var o=new Array;for(var l of t.textFields){const t=n(e[l]);o.push(...t)}return o}async function l(){var n={};for(var l in t){let d=await e.get({type:[l]});for(var i of d){const e=o(i,t[l]);(null==e?void 0:e.length)&&(n[i.id]=e)}}return n}async function i(e,n,o){var l=t[e.type];const i=e.width,d=e.height;for(var a of l.textFields)e[a]=e[a].replace("$"+n,o);e.width=i,e.height=d,await e.sync()}async function d(t){var n=await l(),o=window.variables,d=function(e,t){var n=new Array;for(var o in t)t[o].includes(e)&&n.push(o);return n}(t,n),a=o[t];if(console.log(a),null!=a&&null!=a&&""!=a)for(var r of d)try{i(await e.getById(r),t,a)}catch(s){console.log(s)}}function a(){var e=window.variables;console.log(e),console.log(window),null!=e&&e.forEach((e=>{console.log(e)})),console.log("asddd")}window.appendToTable=function(e,t){console.log(e,t);let n=""+e,o="edit_"+e,l="var_"+e,i="val_"+e;document.getElementById("b1").style.display="inline",document.getElementById("input-field").style.display="none",document.getElementById("varinput").value=e,document.getElementById("valinput").value=t;var d='<button onclick="editVariable('+n+')" id="'+o+'" style="float:right; display:none;" class="editButton xbutton" onmouseover="toggleVisible('+o+')">edit</button>';document.getElementById("vtable-body").innerHTML+="<tr id="+n+">                            <td onmouseover=\"toggleVisible('"+o+"')\" onmouseout=\"toggleInvisible('"+o+'\')" scope="col">                                <div style="margin: 0;" id="'+l+'">'+e+"</div> "+d+'</td><td id="'+i+'">'+t+'                            </td>                            <td scope="col">                                <button onclick="removeRow('+n+')" class="xbutton">✕</button>                            </td>                        </tr>'},window.showVariableForm=function(){document.getElementById("varinput").value="",document.getElementById("valinput").value="",document.getElementById("b1").style.display="none",document.getElementById("input-field").style.display="inline"},window.removeRow=function(e){"string"==typeof editId?document.getElementById(e).remove():document.getElementById(e.id).remove()},window.toggleVisible=function(e){if("string"==typeof e){document.getElementById(e).style.display="inline"}else{document.getElementById(e.id).style.display="inline"}},window.toggleInvisible=function(e){if("string"==typeof e){document.getElementById(e).style.display="none"}else{document.getElementById(e.id).style.display="none"}},window.createTable=async function(){var e={},t=window.variables;for(d in console.log(t),t)e[d]=t[d];var n=await l();for(var o in n){var i=n[o];for(d of i)d in e||(e[d]="")}for(var d in window.variables=e,console.log("Table created with values: "),console.log(window.variables),e)appendToTable(d,e[d])},window.editVariable=function(e){toggleVisible("edit-field"),toggleInvisible("input-field"),toggleInvisible("b1"),document.getElementById("varedit").value=e.id,document.getElementById("varedit").disabled="disabled",document.getElementById("valedit").value=window.variables[e.id]},window.saveEdit=function(){let e=document.getElementById("varedit"),t=document.getElementById("valedit");console.log(t,e),console.log(t.value,e.value),console.log(document.getElementById("val_"+e)),console.log("val_"+e.value),document.getElementById("val_"+e.value).innerHTML=t.value;var n=window.variables;n[e.value]=t.value,window.variables=n,console.log(window.variables),d(e.value),toggleInvisible("edit-field"),toggleVisible("b1")},window.saveVariable=async function(){var e=document.getElementById("varinput").value,t=document.getElementById("valinput").value,n=window.variables;appendToTable(e,t),console.log(n),n[e]=t,console.log(n),window.variables=n,d(e)};export{a as p};