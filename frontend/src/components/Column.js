import React from 'react';
import Taskcard from "../components/Taskcard";

const Column = ({ title, theme, setTheme }) => {

    return (
      <div className={`column ${theme}`}>
        <h2 className={`todo ${theme}`}>{title}</h2>
        <div className="cards">
          <Taskcard content="Task 1" theme={theme} setTheme={setTheme}/>
          <Taskcard content="Task 2" />
          {/* Add more cards as needed */}
        </div>
      </div>
    );
  }
  
export default Column;