import React from 'react';
import { Link } from 'react-router-dom';

interface AdminButtonProps {
  isAdmin: boolean;
}

const AdminButton: React.FC<AdminButtonProps> = ({ isAdmin }) => {
  return (
    <>
      {isAdmin && (
        <Link to="http://localhost:8080/" target="_blank" rel="noopener noreferrer">
          Accéder au Back Office
        </Link>
      )}
    </>
  );
};

export default AdminButton;
