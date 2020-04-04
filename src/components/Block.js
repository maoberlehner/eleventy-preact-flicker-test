const { html } = require(`htm/preact`);

const withHydration = require(`./with-hydration`);

function Block({ stuff, color }) {
  return html`
    <div style="height:300px;background:${color};">
      <div onClick=${() => console.log(color)}>${JSON.stringify(stuff)}</div>
    </div>
  `;
}

module.exports = withHydration(Block);
