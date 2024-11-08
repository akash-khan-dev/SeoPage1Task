const ShowFileModal = ({ isModalOpen, closeModal }) => {
  if (!isModalOpen) return null;
  return (
    <>
      <div className="modal-box"></div>
      {/* <div className="modal-overlay" onClick={closeModal}></div> */}
      {/* <div className="modal-wrapper">
        <div className="modal-container">
          <div className="modal-header">
            <h1>Upload File</h1>
          </div>
          <div className="upload-form">
            <form>
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
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ShowFileModal;
