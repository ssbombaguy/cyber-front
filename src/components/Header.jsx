import {useEffect, useState} from "react";
import axios from "axios";
import classes from '../modules/Header.module.scss'
import cart from '../assets/cart-icon.svg'
import favorites from '../assets/favorites-icon.svg'
import profile from '../assets/profile-icon.svg'
import logo from '../assets/cyber-logo.svg'
import search from '../assets/search-icon.svg'
import {Link} from "react-router";

export const Header = () => {
    const [data, setData] = useState([]);

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
                <figure>
                    <img src={logo} alt="cyber-logo"/>
                </figure>
                <figure className={classes['search-wrapper']}>
                    <img src={search} alt="search-icon"/>
                    <input placeholder='Search' type='text'/>
                </figure>
                <nav>
                    <ul>
                        {data.length > 0 ? (
                            data.map((item,index) => (
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