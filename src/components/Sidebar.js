import { Link } from "react-router-dom";


export default function Sidebar() {
    return (

        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>


            <hr className="sidebar-divider" />


            <div className="sidebar-heading text-uppercase">
                Informations
            </div>


            <li className="nav-item">
                <Link className="nav-link" to="/users" >
                    <i className="fas fa-fw fa-user"></i>
                    <span>Users</span>
                </Link>
            </li>


            <li className="nav-item">
                <Link className="nav-link" to="/card" >
                    <i className="fas fa-fw fa-user"></i>
                    <span>Card</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/button" >
                    <i className="fas fa-fw fa-mobile"></i>
                    <span>Products</span>
                </Link>
            </li>



            <li className="nav-item">
                <Link className="nav-link" to="/products" >
                    <i className="fas fa-fw fa-mobile"></i>
                    <span>Products</span>
                </Link>
            </li>
            <hr className="sidebar-divider" />
        </ul>

    )
}