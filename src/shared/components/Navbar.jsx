import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark pading-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Prueba
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active': ''}`}
                        to="/form"
                    >
                        Formulario
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        Mario Hernández
                    </span>
                    <button className='nav-item nav-link btn btn-outline-danger'>
                        Logout 
                    </button>
                </ul>
            </div>
        </nav>
    )
}