import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  // Lightbox state
  const [lightboxData, setLightboxData] = useState(null); // { imgSrc, title, caption }

  // Certificate Modal state
  const [showCertificate, setShowCertificate] = useState(false);

  // Toast state
  const [toast, setToast] = useState(null); // { title, message }

  const openLightbox = (imgSrc, title = 'Photo Preview', caption = '') => {
    setLightboxData({ imgSrc, title, caption });
  };

  const closeLightbox = () => {
    setLightboxData(null);
  };

  const openCertificate = () => {
    setShowCertificate(true);
  };

  const closeCertificate = () => {
    setShowCertificate(false);
  };

  const showToast = (title, message) => {
    setToast({ title, message });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  return (
    <ModalContext.Provider
      value={{
        lightboxData,
        openLightbox,
        closeLightbox,
        showCertificate,
        openCertificate,
        closeCertificate,
        toast,
        showToast
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
}
