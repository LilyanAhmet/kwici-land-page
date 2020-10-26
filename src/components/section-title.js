import React from 'react';
import indicator from '../images/rectangle.svg'
const SectionTitle = (props) => {
    return (
        <div className="title">
            <img src={indicator}/>
            <h2>
                {props.title}
            </h2>
        </div>
    );
};

export default SectionTitle;