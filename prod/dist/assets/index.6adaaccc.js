import"./style.daf1e31c.js";import{a as o}from"./vendor.ad7e5710.js";const{board:a}=window.miro;const t={method:"GET",url:"https://sheltered-savannah-34228.herokuapp.com/https://api.miro.com/v2/boards/o9J_lhnZ4CE%3D/widgets?limit=50",headers:{Accept:"application/json",Authorization:"Bearer Vqzj_BDeXukWefLeX3uWguYSyeg"}};setInterval((async function(){const e=await a.getAppData("variables");console.log(e),o.request(t).then((function(o){console.log(o.data),console.log(o.data.data.map((o=>o.data)))})).catch((function(o){console.error(o)}))}),3e3),console.log("board",a),async function(){await miro.board.ui.on("icon:click",(async()=>{await miro.board.ui.openPanel({pageUrl:"app.html"})}))}();
