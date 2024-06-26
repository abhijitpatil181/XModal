import "./Modal.css";
const Modal = ({ children, open }) => {
  console.log("form", open);

  return (
    <>
      {open && (
        <div className="modal-overlay active">
          <div className="modal">{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
