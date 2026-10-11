export default function Positions() {
  return (
    <div id="wd-css-positions">
      <h2>Positions</h2>
      <div id="wd-css-position-relative">
        <h3>Relative</h3>
        <div className="wd-bg-color-gray">
          <div className="wd-bg-color-yellow wd-dimension-portrait">
            <div className="wd-pos-relative-nudge-down-right">Portrait</div>
          </div>
          <div className="wd-pos-relative-nudge-up-right wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">Landscape</div>
          <div className="wd-bg-color-red wd-dimension-square">Square</div>
          <div id="wd-your-relative" className="wd-your-pos-relative wd-bg-color-green wd-fg-color-white wd-dimension-square">On your own: top/left</div>
          <div id="wd-ai-relative" className="wd-ai-pos-relative-nudge wd-bg-color-yellow wd-dimension-landscape">With AI: top/right</div>
        </div>
        <p>The offsets leave each box&apos;s original space in the flow.</p>
      </div>
      <div id="wd-css-position-absolute">
        <h3>Absolute position</h3>
        <div className="wd-pos-relative wd-position-stage wd-bg-color-gray">
          <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">Portrait</div>
          <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">Landscape</div>
          <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">Square</div>
          <div id="wd-your-absolute" className="wd-your-pos-absolute wd-bg-color-green wd-fg-color-white wd-dimension-square">On your own: top right</div>
          <div id="wd-ai-absolute" className="wd-ai-pos-absolute-br wd-bg-color-yellow wd-dimension-square">With AI: bottom right</div>
        </div>
        <p>All five boxes anchor to this relative gray container.</p>
      </div>
      <div id="wd-css-position-fixed">
        <h3>Fixed position</h3>
        <p>Scroll to check the blue square at the right edge, halfway down the viewport, and the two corner badges. All three remain fixed.</p>
        <div className="wd-pos-fixed wd-dimension-square wd-bg-color-blue wd-fg-color-white">Fixed position</div>
        <div id="wd-your-fixed" className="wd-your-pos-fixed wd-bg-color-yellow">On your own: fixed</div>
        <div id="wd-ai-fixed" className="wd-ai-pos-fixed wd-bg-color-green wd-fg-color-white">AI fixed</div>
      </div>
    </div>
  );
}
