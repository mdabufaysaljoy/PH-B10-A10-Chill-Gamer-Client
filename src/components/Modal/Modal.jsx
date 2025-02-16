import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 overflow-y-scroll h-screen rounded-lg shadow-lg w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
