// Importing react
import react from 'react'
// Importing assests
import light_logo from '../assets/light_logo.png';
import dark_logo from '../assets/dark_logo.png';
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';
import searchlight from '../assets/search-light.png';
import searchdark from '../assets/search-dark.png';
// Import CSS file
import '../index.css';

const Navbar = ({theme, setTheme}) => {
    
    //Creating a function for switching theme
    const switch_theme = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light') 
        //console.log('switch?')
    }

    return (
        <div className={`navbar-container ${theme}`}>
            <img src={theme == 'light' ? light_logo : dark_logo } alt='logo' className='logo'/>
            <div className='navbar-right'>
                <div className='search-box'>
                    <input type="text" placeholder='Search'/>
                    <img src={theme == 'light' ? searchlight : searchdark} alt='search-icon' className='search-icon'/>
                </div>
                <img src={theme == 'light' ? moon : sun} alt='moon-icon' className='switch-icon' onClick={()=>{switch_theme()}}/>
            </div>     
        </div> 
    )
}

export default Navbar;