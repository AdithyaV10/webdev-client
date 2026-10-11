export default function BoxModel() {
  return (
    <div id="wd-css-box-model">
      <h2>Box model</h2>
      <div className="wd-box-model-parent">
        <div>Parent background shows through the transparent margin.</div>
        <div className="wd-box-model-box">
          <span className="wd-box-model-border-label">Border: the 10px red ring</span>
          <span className="wd-box-model-padding-label">Padding: 20px inside the border</span>
          <div className="wd-box-model-content">Content</div>
          <span className="wd-box-model-margin-label">Margin: the 20px gray gap outside the border</span>
        </div>
      </div>
      <h3>box-sizing</h3>
      <div className="wd-box-sizing-demo">
        <div id="wd-box-sizing-content" className="wd-box-sizing-content">
          content-box: 200 × 180px content; 260 × 240px including padding and border
        </div>
        <div id="wd-box-sizing-border" className="wd-box-sizing-border">
          border-box: 200 × 180px includes padding and border; content is 140 × 120px
        </div>
        <div id="wd-your-box-sizing" className="wd-box-sizing-border wd-your-box-sizing">
          Personal example: border-box keeps the declared 240px width; content is 180px wide.
        </div>
        {/* border-box keeps the declared width; this content-box adds 60px. */}
        <div id="wd-ai-box-sizing" className="wd-box-sizing-content">
          AI sample: the same 200px width, 20px padding and 10px border produce a 260px outer width.
        </div>
      </div>
    </div>
  );
}
