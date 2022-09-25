import { CSSTransition } from 'react-transition-group';
import SidebarContent from '../SidebarContent/SidebarContent';
import './Sidebar.css';

const Sidebar = ({ sidebar, sidebarHandler, sidebarIcon, mainLogo }) => {
    return (
        <>
            <CSSTransition
                mountOnEnter
                unmountOnExit
                in={sidebar}
                timeout={200}
                classNames='overlay'>
                <div className='overlay'
                    onClick={sidebarHandler}
                ></div>
            </CSSTransition>

            <CSSTransition
                mountOnEnter
                unmountOnExit
                in={sidebar}
                timeout={200}
                classNames='sidebar'
            >
                <div className="sidebar">
                    <div className="sidebarNav">
                        <img onClick={sidebarHandler} className='sidebarIcon' src={sidebarIcon} alt="Sidebar Icon" />
                        <img className='mainLogo' src={mainLogo} alt="Main Logo for the farmers market" />
                        <h1 className='main-sidebar-heading'>Farmer's Market</h1>
                    </div>
                    <SidebarContent sidebarHandler={sidebarHandler}/>
                </div>
            </CSSTransition>
        </>
    );
}

export default Sidebar;
