!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const e={},t=function(t,n){return n&&0!==n.length?Promise.all(n.map((t=>{if((t=`/${t}`)in e)return;e[t]=!0;const n=t.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const i=document.createElement("link");return i.rel=n?"stylesheet":"modulepreload",n||(i.as="script",i.crossOrigin=""),i.href=t,document.head.appendChild(i),n?new Promise(((e,t)=>{i.addEventListener("load",e),i.addEventListener("error",t)})):void 0}))).then((()=>t())):t()},n=t((()=>import("./items.a8218602.js")),[]),{board:o}=window.miro;let i=0,l={};window.printFunction=function(){console.log("Print statement!")},window.appendToTable=function(){i+=1;let e="edit"+i;document.getElementById("b1").style.display="inline",document.getElementById("input-field").style.display="none";var t=document.getElementById("varinput").value,n=document.getElementById("valinput").value;document.getElementById("varinput").value="",document.getElementById("valinput").value="";let o='<button id="'+e+'" style="float:right; display:none;" class="editButton xbutton" onmouseover="toggleVisibility('+e+', true)">edit</button>';document.getElementById("vtable-body").innerHTML+="<tr id="+i+"><td onmouseover=\"toggleVisibility('"+e+"')\" onmouseout=\"toggleVisibility('"+e+'\')" scope="col">'+t+" "+o+"</td><td>"+n+'</td><td scope="col"><button onclick="removeRow('+i+')" class="xbutton">✕</button></td></tr>',l[t]=n,saveVariables()},window.showVariableForm=function(){document.getElementById("b1").style.display="none",document.getElementById("input-field").style.display="inline"},window.removeRow=function(e){document.getElementById(e).remove()},window.toggleVisibility=function(e,t){let n=document.getElementById(e);t&&n.style&&(n.style.display="inline"),n.style&&"none"===n.style.display?n.style.display="inline":n.style.display="none"},window.test=function(){n.then((e=>{e.findVariables().then((e=>(console.log("Print",e),e))).then((e=>{for(var t in e)if(e.hasOwnProperty(t))for(var n=e[t],o=0;o<n.length;o++)document.getElementById("varinput").value=n[o],appendToTable()}))}))},window.editVariable=function(e,t,n){document.getElementById("editVariableForm").style.display="inline";let o=document.getElementById("valedit");document.getElementById("varedit").value=t,o.value=n},window.closeEditVariable=function(){document.getElementById("editVariableForm").style.display="none";let e=document.getElementById("valedit");document.getElementById("varedit").value="",e.value=""},window.closeEditVariable=function(e){let t=document.getElementById("valedit"),n=document.getElementById("varedit"),o=document.getElementById("var"+e),i=document.getElementById("var"+e);o.innerHTML=n.innerHTML,i.innerHTML=t.innerHTML},window.saveVariables=function(){console.log(l),console.log("board",o),o.setAppData("variables",l).then((e=>{o.getAppData("variables").then((e=>{console.log("appdata set",e),n.then((e=>{e.setVariables()}))}))}))};export{t as _};
