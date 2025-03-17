import {useEffect, useState} from "react";
import axios from "axios";
import classes from '../modules/Header.module.scss'
import cart from '../assets/cart-icon.svg'
import favorites from '../assets/favorites-icon.svg'
import profile from '../assets/profile-icon.svg'
import logo from '../assets/cyber-logo.svg'
import search from '../assets/search-icon.svg'
import burger from '../assets/Vector.svg'
import {Link} from "react-router";


export const Header = () => {
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:5000/menus/navbarItems')
            .then(function (response) {

                setData(response.data);
                console.log(response.data)
                console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);


    return (
        <>
            <header className={classes['header-wrapper']}>
                <figure className={classes['logo-wrapper']}>
                    <img src={logo} alt="cyber-logo"/>
                </figure>
                <figure className={classes['search-wrapper']}>
                    <img src={search} alt="search-icon"/>
                    <input placeholder='Search' type='text'/>
                </figure>
                <nav>
                    <div className={classes["desk-wrapper"]}>
                        <ul>
                            {data.length > 0 ? (
                                data.map((item, index) => (
                                    <li key={index}>
                                        <Link className={`${classes['navlink']} ${classes['active']}`} to={item.slug}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            ) : (
                                <li>Loading...</li>
                            )}
                        </ul>
                    </div>
                    <div className={classes["menu-toggle"]}>
                        <button className={`${classes["bar-btn"]} ${isOpen ? classes["btn-clicked"] : ""}`}
                                onClick={() => setIsOpen(!isOpen)}>
                            <img src={burger} alt="burger-icon"/>
                            <img src={burger} alt="burger-icon"/>
                            <img src={burger} alt="burger-icon"/>
                        </button>
                        <div className={`${classes["bar"]} ${isOpen ? classes["open"] : ""}`}>
                            <ul>
                                {data.length > 0 ? (
                                    data.map((item, index) => (
                                        <li key={index}>
                                            <Link className={`${classes['navlink']} ${classes['active']}`}
                                                  to={item.slug}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))
                                ) : (
                                    <li>Loading...</li>
                                )}
                            </ul>
                            <figure className={classes['toggle-icons-wrapper']}>
                                <img src={favorites} alt="favorites-icon"/>
                                <img src={profile} alt="profile-icon"/>
                                <img src={cart} alt="cart-icon"/>
                            </figure>
                        </div>

                    </div>
                </nav>
                <figure className={classes['icons-wrapper']}>
                    <img src={favorites} alt="favorites-icon"/>
                    <img src={profile} alt="profile-icon"/>
                    <img src={cart} alt="cart-icon"/>
                </figure>
            </header>
        </>
    )
}