import React, { useEffect } from 'react';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Fermer automatiquement la notification après quelques secondes (optionnel)
    }, 3000); // Fermer après 3 secondes, ajustez selon vos besoins

    return () => {
      clearTimeout(timer); // Nettoyer le timer à la fin de l'effet
    };
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-md z-50">
      {message}
    </div>
  );
};

export default Notification;
