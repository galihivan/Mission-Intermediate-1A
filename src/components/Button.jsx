import React from 'react';

const Button = ({ type, onClick, children, className }) => {
    return (
        <button type={type} onClick={onClick} className={`w-full ${className}`}>
            {children}
        </button>
    );
};

export default Button;