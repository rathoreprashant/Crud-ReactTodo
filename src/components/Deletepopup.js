import React from "react";
import ReactModal from "react-modal";

const Deletepopup = ({
  Modal,
  setModal,
  setDeleteConfirm,
}) => {
  const ConfirmFunc = (confirm) => {
    setDeleteConfirm(confirm);
    setModal(false);
  };
  return (
    <div>
      <ReactModal className="modall" isOpen={Modal}>
        <button
          className="btn-DeleteConfirm-close"
          onClick={() => setModal(false)}
        >
          <i class="bi bi-x icon"></i>
        </button>
        <h2>Delete?</h2>
        <div>
          <button
            className="btn-DeleteConfirm-Yes"
            onClick={() => ConfirmFunc(true)}
          >
            Yes
          </button>
          <button
            className="btn-DeleteConfirm-No"
            onClick={() => ConfirmFunc(false)}
          >
            No
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default Deletepopup;
