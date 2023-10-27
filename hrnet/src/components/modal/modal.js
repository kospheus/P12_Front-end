import React, { useState, useEffect } from 'react';
import './modal.css'; // Assurez-vous de définir vos styles CSS pour le modal toast.

function Modal({ message, showToast, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (showToast) {
      setVisible(true);
      // Fermez le toast après 3 secondes (ajustez ce délai selon vos besoins).
      const timeout = setTimeout(() => {
        setVisible(false);
        onClose();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showToast, onClose]);

  return (
    <div className={`modal-toast ${visible ? 'visible' : ''}`}>
      {message}
    </div>
  );
}

export default Modal;