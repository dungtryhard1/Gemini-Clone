import React, { useContext, useState } from "react";
import "./Sidebar.scss";
import { Context } from "../../context/context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <>
      <div className="sidebar">
        <div className="top">
          <i
            onClick={() => setExtended((prev) => !prev)}
            className="fa fa-bars fa-1x px-2"
          ></i>
          <div onClick={() => newChat()} className="new-chat">
            <i className="fa fa-plus fa-1x"></i>
            {extended ? <p className="text-nowrap pe-2">New Chat</p> : null}
          </div>
          {extended ? (
            <div className="recent">
              <p className="recent-title">Recent</p>
              {prevPrompts.map((prevPrompt, index) => {
                return (
                  <div
                    onClick={() => loadPrompt(prevPrompt)}
                    className="recent-entry"
                  >
                    <i className="fa fa-regular fa-comment fa-1x"></i>
                    <p className="recent-list">{prevPrompt}</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <i className="fa fa-question fa-1x pe-1"></i>
            {extended ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <i className="fa fa-history fa-1x"></i>
            {extended ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <i className="fa fa-gear fa-1x"></i>
            {extended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
