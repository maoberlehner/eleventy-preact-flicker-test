const { html } = require(`htm/preact`);

const Block = require(`./Block`);

const LayoutDefault = require(`./LayoutDefault`);

module.exports = () => html`
  <${LayoutDefault}>
    <div class="App">
      <${Block} stuff=${{ a: `a` }} color="blue"/>
      <${Block} stuff=${{ a: `b` }} color="yellow"/>
      <${Block} stuff=${{ a: `c` }} color="red"/>
      <${Block} stuff=${{ a: `d` }} color="orange"/>
      <${Block} stuff=${{ a: `e` }} color="cyan"/>
    </div>
  <//>
`;
