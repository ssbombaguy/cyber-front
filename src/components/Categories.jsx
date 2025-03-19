import {useEffect, useState} from "react";
import axios from "axios";
import classes from '../modules/Categories.module.scss'
export const Categories = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/main/categories')
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
            <div className={classes["categories-wrapper"]}>
                <div className={classes["categories-container"]}>
                    <ul>
                        {data.map((item, index) => (
                            <li key={index}>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    )
}