import { useEffect, useState, react } from 'react';
import Column from '../components/Column';

const Homepage = ({theme, setTheme}) => {
    return (
        <>
          <div className={`board ${theme}`}>
            <Column title="To Do"theme={theme} setTheme={setTheme}/>
            <Column title="In Progress" />
            <Column title="Review" />
            <Column title="Done" />
          </div>  
        </>
    )
}

export default Homepage;