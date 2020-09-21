import React, { useState } from "react";
import SubmitLink from "../../components/submit-link/submit-link";
import OrderByDropdown from "../../components/order-by-dropdown/order-by-dropdown";
import Link from "../../components/link/link";
import Pagination from "../../components/pagination/pagination";
import Dialog from "../../components/dialog/dialog";
import Toast from "../../components/toast/toast";
import "./listing.sass";

const Listing = () => {
  const [links, setLinks] = useState(
    JSON.parse(localStorage.getItem("links") || "[]")
  );
  let [activePage, setActivePage] = useState(1);
  const [isDialogActive, setIsDialogActive] = useState(false);
  const [isToastActive, setIsToastActive] = useState(false);
  const [selectedLink, setSelectedLink] = useState({});

  const onDialogOpened = (link) => {
    setSelectedLink(link);
    setIsDialogActive(true);
  };

  const onDialogClosed = () => {
    setIsDialogActive(false);
  };

  const onDialogConfirm = () => {
    removeLinkLocalStorage();
    onDialogClosed();
    setIsToastActive(true);
  };

  const onToastClosed = () => {
    setIsToastActive(false);
  };

  const onChangeDropdown = (value) => {
    let sortedLinks = [];

    if (value === "lv") {
      sortedLinks = [...links.sort((a, b) => a.points - b.points)];
    } else if (value === "mv") {
      sortedLinks = [...links.sort((a, b) => b.points - a.points)];
    } else {
      sortedLinks = [
        ...links.sort((a, b) => {
          const aDate = new Date(a.createdAt);
          const bDate = new Date(b.createdAt);

          return bDate - aDate;
        }),
      ];
    }

    setLinks(sortedLinks);
  };

  const removeLinkLocalStorage = () => {
    const newLinks = links.filter((link) => {
      return link.id !== selectedLink.id;
    });

    localStorage.setItem("links", JSON.stringify(newLinks));
    setLinks(newLinks);

    if (newLinks.length % 5 === 0 && activePage !== 1) {
      setActivePage(--activePage);
    }
  };

  const onUpVote = (selectedLink) => {
    const foundIndex = links.findIndex((link) => link.id === selectedLink.id);
    links[foundIndex].points++;

    const newLinks = [...links];

    localStorage.setItem("links", JSON.stringify(newLinks));
    setLinks(newLinks);
  };

  const onDownVote = (selectedLink) => {
    const foundIndex = links.findIndex((link) => link.id === selectedLink.id);
    links[foundIndex].points--;

    const newLinks = [...links];

    localStorage.setItem("links", JSON.stringify(newLinks));
    setLinks(newLinks);
  };

  const generateLinks = () => {
    return links.slice((activePage - 1) * 5, activePage * 5).map((link) => {
      return (
        <Link
          link={link}
          key={link.id}
          onDialogOpened={() => onDialogOpened(link)}
          onUpVote={() => onUpVote(link)}
          onDownVote={() => onDownVote(link)}
        ></Link>
      );
    });
  };

  return (
    <div className="listing-container">
      <SubmitLink
        onClick={() => {
          window.location.href = "/new";
        }}
      ></SubmitLink>
      <div className="horizontal-line"></div>
      <OrderByDropdown onChangeDropdown={onChangeDropdown}></OrderByDropdown>
      {generateLinks()}
      {links.length > 5 && (
        <Pagination
          activePage={activePage}
          setActivePage={setActivePage}
          links={links}
        ></Pagination>
      )}
      {isDialogActive && (
        <Dialog
          onDialogClosed={onDialogClosed}
          onDialogConfirm={onDialogConfirm}
          selectedLink={selectedLink}
        ></Dialog>
      )}
      {isToastActive && (
        <Toast
          onToastClosed={onToastClosed}
          linkName={selectedLink.name}
          message="removed."
          onToastUnMount={() => {}}
        ></Toast>
      )}
    </div>
  );
};

export default Listing;
