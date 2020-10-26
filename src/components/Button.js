import React from 'react';

const Button = (props) => {
    return (
        <div className="main-button">
            {props.text}
        </div>
    );
};

export default Button;