export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>

      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />

      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot Optimus humanoid robot"
      />

      <br />
      My image:
      <br />
      <img
        id="wd-your-image"
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        width="300px"
        alt="Scenic outdoor landscape"
      />

      <br />
      AI sample image:
      <br />
      <img
        id="wd-ai-image"
        src="https://images-assets.nasa.gov/image/PIA12348/PIA12348~orig.jpg"
        width="200px"
        alt="NASA space image"
      />
    </div>
  );
}