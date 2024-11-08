/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BsStack } from "react-icons/bs";
import { FaClipboardList, FaPaperclip } from "react-icons/fa";
import { IoChatbubblesOutline, IoCalendar } from "react-icons/io5";
import Profile from "./Profile";
import pic from "../assets/images/playBussBoost.jpg";
import axios from "axios";
import UploadFileModal from "./UploadModal";
import { useSelector } from "react-redux";
const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileState, setFileState] = useState([]);
  const [countAttachment, setCountAttachment] = useState(0);
  const file = useSelector((file) => file.fileUpload.data);

  // for get input field value
  const handleFileInputChange = async (e) => {
    const files = e.target.files;
    const convertArray = Array.from(files);
    let multiple = [];

    for (let i = 0; i < convertArray.length; i++) {
      const reader = new FileReader();
      const fileName = convertArray[i].name;
      reader.readAsDataURL(convertArray[i]);
      reader.onload = () => {
        multiple.push({ data: reader.result, name: fileName });
        if (multiple.length === convertArray.length) {
          setFileState(multiple);
        }
      };
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const countAttest = file.flat(Infinity);

  return (
    <div className="card_margin">
      <div className="card">
        <div className="profile_container">
          <Profile pic={pic} profileTitle={"Client Name"} />
          <Profile pic={pic} profileTitle={"Client 2"} />
        </div>
        <div className="notes">
          <div className="notes_description">
            <BsStack />
            <p>Lconsectetur adiptatenim...</p>
          </div>
          <div className="note_count">
            <FaClipboardList />
            <span>1/2</span>
          </div>
        </div>
        <div className="card_bottom">
          <div className="total_client">
            <div className="clients">
              <Profile pic={pic} />
              <Profile pic={pic} />
              <div className="client_count">
                <span>12+</span>
              </div>
            </div>
            <div className="client_message">
              <IoChatbubblesOutline />
              <span>12+</span>
            </div>
            <div className="client_attachment">
              <div onClick={openModal} className="attachment-icon ">
                <FaPaperclip />
              </div>
              <span>{countAttest.length ? countAttest.length : 0}</span>
            </div>
            <div className="date">
              <IoCalendar />
              <input type="date" />
            </div>
          </div>
        </div>
      </div>
      <UploadFileModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        handleFileInputChange={handleFileInputChange}
        fileState={fileState}
        setFileState={setFileState}
      />
    </div>
  );
};

export default Card;
