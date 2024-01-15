import React from "react";
import ReactDOM from "react-dom";
const ModalWrapper = ({ children, modalVisible , toggleModalVisible }) => {
  if (modalVisible === false) return null;
  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, { toggleModalVisible: toggleModalVisible });
  });
  return ReactDOM.createPortal(
    <div
      onClick={(e) => {
        toggleModalVisible(false);
      }}
      className="fixed z-10 top-0 bottom-0 right-0 left-0 bg-black/50 grid place-items-center"
    >
      <div
        className="bg-white rounded-2xl overflow-hidden sm:w-[80%] md:w-[max(60%,600px)] lg:w-[max(650px,28%)]"
        onClick={(e) => e.stopPropagation()}
      >
        {childrenWithProps}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalWrapper;
