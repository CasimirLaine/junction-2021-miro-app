import * as React from 'react';
import ReactDOM from 'react-dom';

async function init() {
  const [sticker] = await miro.board.widgets.create({
    type: 'sticker',
    text: 'Hello, World!',
  });

  await miro.board.viewport.zoomToObject(sticker);
}

function App() {
  React.useEffect(() => {
    init();
  }, []);

  return (
    <div className="grid wrapper">
      <div className="cs1 ce12">
        <img src="/src/assets/congratulations.png" />
      </div>
      <div className="cs1 ce12">
        <h1>Congratulations!</h1>
        <p>You've just created your first Miro app!</p>
        <p>
          To explore more and build your own app, see the Miro Developer
          Platform documentation.
        </p>
      </div>
      <div className="cs1 ce12">
        <a
          className="button button-primary"
          target="_blank"
          href="https://developers.miro.com/docs/welcome"
        >
          Read the documentation
        </a>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
