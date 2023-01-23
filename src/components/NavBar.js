import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import { useNavigate, Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";


function NavBar() {
    const navigate = useNavigate();
    const {isAuth, login, logout,email} = useContext( AuthContext )
    console.log("Authentication status:" +isAuth);
    console.log("Email:"+email);
    //console.log("Logout status:" +logout);
    //console.log("Login status:" +login);

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>


            {(isAuth===true) ?

                <button
                    type="button"
                    onClick={logout}
                >
                    Log Out
                </button>
                :
                <div>
                    <button
                        type="button"
                        onClick={() => navigate('/signin')}
                    >
                        Log in
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/signup')}
                    >
                        Registreren
                    </button>

                </div>}
        </nav>
    );
}

export default NavBar;