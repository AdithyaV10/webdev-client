export default function Zindex() {
  return (
    <div id="wd-z-index">
      <h2>Z index</h2>
      <div className="wd-pos-relative wd-zindex-stage wd-bg-color-gray">
        <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">Portrait</div>
        <div className="wd-zindex-bring-to-front wd-pos-absolute-50-50 wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">Landscape: 10</div>
        <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">Square</div>
        <div id="wd-your-zindex" className="wd-your-zindex wd-bg-color-green wd-fg-color-white wd-dimension-square">On your own: 5</div>
        <div id="wd-ai-zindex" className="wd-ai-zindex-top wd-bg-color-yellow wd-dimension-square">With AI: 20</div>
      </div>
      <p>Blue (10) covers the later red square and my green box (5). The AI box (20) covers both.</p>
    </div>
  );
}
