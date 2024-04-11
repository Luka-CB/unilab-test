const Modal = ({ close, children }) => {
  return (
    <div className="modal-bg" onClick={close}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <i
          className="fa fa-times-circle"
          aria-hidden="true"
          onClick={close}
        ></i>
        {children}
      </div>
    </div>
  );
};

export default Modal;
