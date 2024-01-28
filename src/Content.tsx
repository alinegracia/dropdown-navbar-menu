import "./Content.css";

function Content() {
  return (
    <div className="main-container">
      <div className="content-container">
        <div className="text-container">
          <h1 className="content-title">Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <div></div>
          <button className="learn-btn">Learn More</button>
          <div className="client">
            <img src="./client-databiz.svg" />
            <img src="./client-audiophile.svg" />
            <img src="./client-meet.svg" />
            <img src="./client-maker.svg" />
          </div>
        </div>

        <div className="main-img">
          <img src="./image-hero-desktop.png" />
        </div>
      </div>
    </div>
  );
}

export default Content;
