// Import CSS file
import '../index.css';
import React from 'react';

const Taskcard = ({ content, theme, setTheme }) => {
    return (
        <div className={`card ${theme}`}>
            {content}
        </div>
    )
}

export default Taskcard;