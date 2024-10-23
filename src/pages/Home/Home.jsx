import "./Home.css";

import profile from "../../../public/image.png";

import cardone from "../../../public/IMG_0727.jpg";
import cardtwo from "../../../public/IMG_0844.jpg";
import cardthree from "../../../public/IMG_1151.jpg";

function Home() {
  return (
    <div className="Home-container">
      <div className="Home-img">
        <img src={profile} alt="" />
      </div>
      <div className="Home-text">
        <h1>
          Hello,it's <span>Aomsin</span>
        </h1>
        <h4>
          &nbsp;&nbsp;สาขาวิชาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์
        </h4>
        <p>
          &nbsp;&nbsp;"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div className="Home-card-container">
        <div className="card-home">
          <img src={cardone} alt="" />
          <div className="card-home-text">
            <h3>Card Title 1</h3>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>

        <div className="card-home">
          <img src={cardtwo} alt="" />
          <div className="card-home-text">
            <h3>Card Title 2</h3>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="" className="btn btn btn-primary">
              Read More
            </a>
          </div>
        </div>

        <div className="card-home">
          <img src={cardthree} alt="" />
          <div className="card-home-text">
            <h3>Card Title 3</h3>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="" className="btn btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
