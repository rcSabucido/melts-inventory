import { useState } from "react";
import { createPortal } from "react-dom";

const ConfirmationModal = ({ onClose }) => {
  return createPortal(
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800/40">
    </div>
  );
}

export default ConfirmationModal;
