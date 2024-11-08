/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadFIle } from "../ReduxFeature/slice";
import { IoMdArrowBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
const UploadModal = ({
  isModalOpen,
  closeModal,
  handleFileInputChange,
  fileState,
  setFileState,
}) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const file = useSelector((file) => file.fileUpload.data);
  if (!isModalOpen) return null;

  const handleUploadData = (e) => {
    e.preventDefault();
    if (fileState.length > 0) {
      setShow(true);
      dispatch(uploadFIle([...file, fileState]));
      localStorage.setItem("file", JSON.stringify(fileState));
      setFileState([]);

      // for send data backend
      uploadFIleData();
    }
  };

  const uploadFIleData = async () => {
    try {
      const url = "http://localhost:8000/api/upload";
      const data = await axios.post(url, {
        file: fileState,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleCloseModal = () => {
    setShow(false);
    closeModal();
    setFileState([]);
  };
  const showVewList = file.flat(Infinity);
  return (
    <>
      {show ? (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-wrapper">
            <div className="back-btn">
              <IoMdArrowBack onClick={() => setShow(false)} />
            </div>
            <div className="cross-btn">
              <RxCross2 onClick={handleCloseModal} />
            </div>

            <div className="modal-container">
              <div className="modal-header">
                <h1>Your Uploaded file List </h1>
              </div>
              <div className="upload-form">
                {showVewList.map((file, index) => (
                  <div key={index} className="file-wrapper">
                    <div className="file-item">
                      <img src={file.data} alt={`file-preview-${index}`} />
                    </div>
                    <p>{file.name}</p>{" "}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-wrapper">
            <div className="cross-btn">
              <RxCross2 onClick={handleCloseModal} />
            </div>
            <div className="modal-container">
              <div className="modal-header">
                <h1>Upload File</h1>
              </div>
              <div className="upload-form">
                <form onSubmit={handleUploadData}>
                  <div className="upload-part">
                    <input
                      onChange={handleFileInputChange}
                      type="file"
                      name="attachment"
                      id=""
                      multiple
                      accept=".txt,.rtl,.png,.jpg,.jpeg,.webp,"
                    />
                    <button className="upload-button" type="submit">
                      Submit
                    </button>
                  </div>
                </form>

                {fileState.map((file, index) => (
                  <div key={index} className="file-wrapper">
                    <div className="file-item">
                      <img src={file.data} alt={`file-preview-${index}`} />
                    </div>
                    <p>{file.name}</p>{" "}
                  </div>
                ))}
                <div className="see-all-btn">
                  <button onClick={() => setShow(true)}>View All</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UploadModal;
