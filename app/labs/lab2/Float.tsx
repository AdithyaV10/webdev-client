import Image from "next/image";

const LOREM = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic reprehenderit doloremque adipisci iste deserunt. Inventore, hic. Esse nihil unde aut, dignissimos eos consequatur veniam distinctio? ";

export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        <Image className="wd-float-right" src="/images/teslabot.jpg" alt="Tesla robot, floated right" width={200} height={200} />
        {LOREM}{LOREM}
        <Image className="wd-float-left" src="/images/teslabot.jpg" alt="Tesla robot, floated left" width={200} height={200} />
        {LOREM}{LOREM}
        <Image className="wd-float-right" src="/images/teslabot.jpg" alt="Tesla robot, floated right again" width={200} height={200} />
        {LOREM}{LOREM}
        <Image className="wd-float-left" src="/images/teslabot.jpg" alt="Tesla robot, floated left again" width={200} height={200} />
        {LOREM}{LOREM}
        <div className="wd-float-done" />
      </div>
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">Yellow</div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">Blue</div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">Red</div>
        <Image className="wd-float-right" src="/images/teslabot.jpg" alt="Tesla robot beside colored floats" width={200} height={200} />
        <div className="wd-float-done" />
      </div>
      <h3>On your own: opposite-direction float</h3>
      <div>
        <div id="wd-your-float" className="wd-float-left wd-dimension-square wd-bg-color-green wd-fg-color-white">My left float</div>
        <p>{LOREM}{LOREM}</p>
        <div className="wd-float-done" />
      </div>
      <h3>With AI: right float and clearing</h3>
      <div>
        <div id="wd-ai-float" className="wd-float-right wd-dimension-square wd-bg-color-yellow">AI right float</div>
        <p>{LOREM}</p>
        <div className="wd-float-done" />
      </div>
      <p>This text follows the clearer and starts below the floats.</p>
    </div>
  );
}
