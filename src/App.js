import React from "react";
import "./app.css";
import Rating from "./Rating";
import { Call, Message, ScreenShare } from "@mui/icons-material";
const App = () => {
  return (
    <div className="mainWrapper">
      <div className="topContainer">
        <img src="assets/front_image.jpg" className="imageStyle" />
      </div>
      <div className="iconWrapper">
        <img src="assets/icon_image.jpg" className="iconStyle" />
      </div>
      <div className="contactWrapper">
        <div className="contactIcon">
          <Call className="callStyle" />
        </div>
        <div className="QuestionsStyle">
          <span> Do you want to ask any question to SANJEEVANI HOSPITAL?</span>
          <br />

          <a href="" className="QuestionLinkStyle">
            My Question
          </a>
        </div>
        <div className="viewStar">
          <Rating />
          <hr />
          <div className="recommendStyle">
            <a href="" className="recommentStyle">
              Recommend
            </a>
            <div className="shareStyle">
              Suggest <ScreenShare />
            </div>
          </div>
        </div>
      </div>
      <div className="midContainer">
        <h5>Timing</h5>
        <div>Sat - Sun - 11:00 AM - 02:00 PM and 08:00 PM - 09:00 PM</div>
        <br />
        <div>Mon - Thu - 11:00 AM - 02:00 PM and 08:00 PM - 09:00 PM</div>
      </div>
      <br />
      <div className="notification">
        <span>
          <Message className="messageStyle" />
        </span>
        <b>New Office safety precautions</b>
        <br />
        <span>Messege from the office of Sai Hospital</span>
      </div>
      <div className="multiFeature">
        <h1 style={{ color: "#125d12" }}>Sai Multi-speciality Hospital</h1>
        <span>365 Recommendation</span>
        <div className="statement">
          <h3>Statement</h3>
          <span>
            Board certified dermatologist with over 10 years
            experience.Knowledgeable,professional staff available.Most
            insurances accepted.Costomic menu of serivices include,files,cool
            isear hair removal,verios
            <a href="" style={{ textDecoration: "none" }}>
              See More{" "}
            </a>
          </span>
          <br />
        </div>
      </div>
      <div className="midWrapper">
        <h1>Specialites in Sai multi-specialities hospital</h1>
        <div className="avtarStyle">
          <div className="avtar_one "></div>
          <div className="avtar_two">two</div>
          <div className="avtar_three">three</div>
        </div>
        <div className="avtar">
          <div className="avtar_four">four</div>
          <div className="avtar_five">five</div>
          <div className="avtar_six">six</div>
        </div>
      </div>
      <div className="bottomContainer"></div>
    </div>
  );
};

export default App;
