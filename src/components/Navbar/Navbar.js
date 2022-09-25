import Cart from '../Cart/Cart';
import './Navbar.css';
import mainLogo from '../../icons/vegetables.png';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';
import sidebarIcon from '../../icons/sidebar.png';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItems, setcartItems, product, setproduct }) => {
    const [sidebar, setsidebar] = useState(false);
    const sidebarHandler = () => {
        setsidebar(prev => !prev);
    }
    return (
        <>
            <Sidebar
                sidebar={sidebar}
                sidebarHandler={sidebarHandler}
                mainLogo={mainLogo}
                sidebarIcon={sidebarIcon}
            />

            <nav className="navbar">
                <div className="logoAndHeading">
                    <img onClick={sidebarHandler}
                        className='sidebarIcon'
                        src={sidebarIcon}
                        alt="Sidebar Icon" />
                    <Link className='homepage-logo' to={''}>
                        <img className='mainLogo'
                            src={mainLogo}
                            alt="Main Logo for the farmers market" />
                        <h1 className='main-heading'>Farmer's Market</h1>
                    </Link>
                </div>
                <Cart
                    cartItems={cartItems}
                    setcartItems={setcartItems}
                    product={product}
                    setproduct={setproduct} />
            </nav>
        </>
    );
}

export default Navbar;