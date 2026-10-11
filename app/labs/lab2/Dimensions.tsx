export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">Landscape</div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
      </div>
      <h3>Personal dimension example</h3>
      <div id="wd-your-dimension" className="wd-your-dimension wd-bg-color-gray">
        My 180 × 90px box keeps its declared dimensions while this longer text wraps.
      </div>
      <h3>AI dimension sample</h3>
      <div id="wd-ai-dimension" className="wd-ai-dimension wd-bg-color-yellow">
        This longer sentence wraps inside a fixed-size box.
      </div>
    </div>
  );
}
