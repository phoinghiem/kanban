import react from 'react'

import '../index.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <img src='' alt='logo' className='logo'/>
        
            <div className='searchbar'>
                <input type="text" placeholder='search'/>
            </div>
        
        </div> 
    )
}

export default Navbar;