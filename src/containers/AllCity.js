import React from 'react';
import {useSelector} from 'react-redux'

const AllCity = () => {
    const ArrayCity = useSelector(state => state.ArrCity)

    return (
        <ul className="info">
            {ArrayCity.map((item) => (
                <li key={item.id}>
                    <div className="left_item">{item.name}</div>
                    <div className="right_item">
                        <div>Temperature: {item.main.temp} ℃</div>
                        <div>Precipitation: {item.weather[0].main}</div>
                    </div>
                </li>
            ))}
        </ul>
    )
}


export default AllCity;
