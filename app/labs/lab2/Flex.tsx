export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <h3>Horizontal row</h3>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white">Column 3</div>
      </div>
      <h3>Growing last column</h3>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">Column 3</div>
      </div>
      <h3>Fixed first column, growing last column</h3>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">Column 3</div>
      </div>
      <h3>On your own: growing first, fixed last</h3>
      <div id="wd-your-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">Grow</div>
        <div className="wd-bg-color-yellow">Natural</div>
        <div className="wd-bg-color-blue wd-fg-color-white wd-width-110px">110px</div>
      </div>
      <h3>With AI: fixed first, growing last</h3>
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">110px</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Natural</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">Grow</div>
      </div>
    </div>
  );
}
