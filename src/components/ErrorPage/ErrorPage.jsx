import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate(); 
    const handleBackToHome = () => {
          navigate("/"); 
    }
    return (
        <div className="text-center my-16">
            <h3>Opps !</h3>
            <button className='btn my-6' onClick={handleBackToHome}>Back To Home</button>
        </div>
    );
};

export default ErrorPage;