import{_ as o}from"./preload-helper.717546fd.js";import{findVariables as a}from"./items.b324bc18.js";const{board:t}=window.miro;!async function(){var o=await a();console.log(o)}(),async function(){await t.setAppData("variables",{variable:"val1",value2:"val2"});const o=await t.getAppData("variables");console.log(o);const a=await t.createStickyNote({content:"Hello, from prod"});console.log(a),await t.viewport.zoomTo(a)}();const e=document.getElementById("vtable");console.log(e),o((()=>import("./items.b324bc18.js")),[]);
