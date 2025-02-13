import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate()

    const HandleLogOut = () =>{
        navigate('/login', {
            replace: true
        })
    }

    return (
        
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">

        <div className="navbar-collapse">
            <div className="navbar-nav">

                <NavLink 
                    className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` }
                    to="/arms"
                >
                    Arms
                </NavLink>

                <NavLink 
                    className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` } 
                    to="/delts"
                >
                    Delts
                </NavLink>

                <NavLink 
                    className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` }
                    to="/lats"
                >
                    Lats
                </NavLink>

                <NavLink 
                    className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` } 
                    to="/pec"
                >
                    Pecs
                </NavLink>

            </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end pt-1 m-2">
            <ul className="navbar-nav ml-auto">
                
                <span className="nav-link text-primary nav-item mx-2">
                    Musclegrid
                </span>

                <button onClick={ HandleLogOut } className="btn btn-outline-primary nav-link nav-item">
                    Logout
                </button>
                
            </ul>
        </div>
    </nav>
    )
}