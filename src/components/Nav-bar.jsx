import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "../modules/Nav-bar.module.css";
import logo from "../assets/LogoVector.png"
import Search from "../assets/Vector.png";
import cart from "../assets/Cart.png";
import user from "../assets/User.png";
import favorite from "../assets/Favorites.png";

const Navbar = () => {
    const [navbarItems, setNavbarItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/")
            .then((res) => res.json())
            .then((data) => {
                setNavbarItems(data)
                setLoading(false);
                console.log(data)

            })
            .catch((err) => {
                console.error("Error fetching navbar:", err);
                setError("Failed to load navbar");
                setLoading(false);
            });
    }, []);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>{error}</p>;

    return (
            <nav className={classes["navbar"]}>

                <div className={classes["logo"]}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={classes["search"]}>
                   {/*<img src={Search} alt="search"/>*/}
                   <input type="text" placeholder="Search"/>
                </div>
                <div>
                    <ul>
                        {navbarItems.map((item, index) => (
                            <li key={index}>
                                <ul>
                                    {item.name}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={classes["icons"]}>
                    <img src={cart} alt="cart"/>
                    <img src={favorite} alt="favourite"/>
                    <img src={user} alt="user"/>
                </div>

            </nav>
    );
};

export default Navbar;