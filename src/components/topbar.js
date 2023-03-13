import { NavLink } from "react-router-dom";
import './components.css';

const Topbar = function (props) {

    return (
        <>
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src="/assets/argentBankLogo.png"
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                <NavLink to="/login" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        &nbsp;Sign In
                    </NavLink>
                </div>
            </nav>
        </>
    )

}
export default Topbar;