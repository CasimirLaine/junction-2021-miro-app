import cors from 'cors'


async function init() {
  await miro.board.ui.on("icon:click", async () => {
    await miro.board.ui.openPanel({
      // Absolute or relative URL of the page whose content you want to display inside the panel      
      pageUrl: "app.html"
    });
  });
}
const { board } = window.miro;
const appdata = await board.getAppData("variables")


init();