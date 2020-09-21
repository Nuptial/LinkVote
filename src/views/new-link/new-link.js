import React, { useState } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toast from "../../components/toast/toast";
import "./new-link.sass";

const NewLink = () => {
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [isButtonClickable, setIsButtonClickable] = useState(true);
  const [isToastActive, setIsToastActive] = useState(false);

  const returnToListing = () => {
    window.location.href = "/";
  };

  const onToastClosed = () => {
    setIsToastActive(false);
  };

  const validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );

    return !!pattern.test(str);
  };

  const checkandAddNewLink = () => {
    if (!validURL(linkUrl) || !linkName) {
      alert("NOT VALID");

      return;
    }

    addNewLinkToLocalStorage();
  };

  const addNewLinkToLocalStorage = () => {
    const allLinks = JSON.parse(localStorage.getItem("links") || "[]");
    const link = {
      name: linkName,
      url: linkUrl,
      points: 0,
      createdAt: new Date(),
      id: Date.now(),
    };

    allLinks.unshift(link);

    localStorage.setItem("links", JSON.stringify(allLinks));
    setIsButtonClickable(false);
    setIsToastActive(true);
  };

  const onToastUnMount = () => {
    setIsButtonClickable(true);
  };

  return (
    <>
      <div className="new-link-container">
        <div className="return-to-listing" onClick={returnToListing}>
          <FontAwesomeIcon icon={faArrowLeft} className="icon" />
          Return To List
        </div>
        <h1>Add New Link</h1>
        <span>Link Name:</span>
        <input
          placeholder="e.g.Alphabet"
          onChange={(e) => setLinkName(e.target.value)}
          disabled={!isButtonClickable}
        ></input>
        <span>Link URL:</span>
        <input
          placeholder="e.g.http://abc.xyz"
          onChange={(e) => setLinkUrl(e.target.value)}
          disabled={!isButtonClickable}
        ></input>
        <button onClick={checkandAddNewLink} disabled={!isButtonClickable}>
          ADD
        </button>
      </div>
      {isToastActive && (
        <Toast
          onToastClosed={onToastClosed}
          linkName={linkName}
          message="added."
          onToastUnMount={onToastUnMount}
        ></Toast>
      )}
    </>
  );
};

export default NewLink;
