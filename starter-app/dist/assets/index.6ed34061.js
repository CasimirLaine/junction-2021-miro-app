import"./style.daf1e31c.js";import"./vendor.05a6ae7d.js";const{board:a}=window.miro;setInterval((async function(){const o=await a.getAppData("variables");console.log(o)}),3e3),async function(){await miro.board.ui.on("icon:click",(async()=>{await miro.board.ui.openPanel({pageUrl:"app.html"})}))}();
