import React, { useContext, useState } from "react";
import "./Main.scss";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  const [show, setShow] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
    if (!e.target.value) {
      setShow("");
    } else {
      setShow("show");
    }
  };

  const handlePressEnter = (event) => {
    if (event && event.key === "Enter") {
      onSent();
    }
  };

  return (
    <div className="main container">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.userIcon} alt="userIcon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards row">
              <div className="card-item">
                <p>Suggest for me some beautiful places to travel</p>
                <img src={assets.compassIcon} alt="compassIcon" />
              </div>
              <div className="card-item">
                <p>Roadmap to become a back-end developer</p>
                <img src={assets.codeIcon} alt="codeIcon" />
              </div>
              <div className="card-item">
                <p>The highlights news of the world today</p>
                <img src={assets.newsIcon} alt="newsIcon" />
              </div>
              <div className="card-item">
                <p>Some ideas to contribute a youtube channel</p>
                <img src={assets.bulbIcon} alt="bulbIcon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.userIcon} alt="user" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.geminiIcon} alt="" />
              {!loading ? (
                <>
                  <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                  {/* <p>{resultData}</p> */}
                </>
              ) : (
                <div className="loader">
                  <hr/>
                  <hr/>
                  <hr/>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="main-bottom">
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter the prompt here"
            value={input}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handlePressEnter(e)}
          />
          <div className="search-box-icons">
            <i className="fa fa-image"></i>
            <i className="fa fa-microphone"></i>
            {input ? (
              <i
                className="fa fa-paper-plane hidden"
                id={show}
                onClick={() => onSent()}
              ></i>
            ) : null}
          </div>
        </div>
        <p className="bottom-info">
          Gemini may provide inaccurate information, including information about
          people, so please verify Gemini's responses.
          <br />
          <a href="https://support.google.com/gemini/answer/13594961?visit_id=638568093795261281-60058261&p=privacy_notice&rd=1#privacy_notice">
            Your privacy and Gemini Apps
          </a>
        </p>
      </div>
    </div>
  );
};

export default Main;
