import {Api} from "../../Api";

export const AddCity = (city) => {
    return (dispatch)=>{
        Api.gettingWeatherDetail(city).then((res)=>{
            dispatch({ type: 'ADD_CITY', payload: res.data });
        });
    }
};
