import React from 'react';
import { useNavigate } from 'react-router-dom';

interface AdminButtonProps {
  isAdmin: boolean;
}

const AdminButton: React.FC<AdminButtonProps> = ({ isAdmin }) => {
  const navigate = useNavigate();

  return (
    <>
      {isAdmin && (
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Accéder au Back Office
        </button>
      )}
    </>
  );
};

export default AdminButton;

