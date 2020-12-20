import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {AddCity} from "../store/actions/AddCityAction";

const FormAddCity = () => {
    const dispatch = useDispatch()
    const [Value, setValue] = useState('')
    return (
        <div className="form_container">
            <input
                value={Value}
                placeholder="Название города"
                onChange={e => setValue(e.target.value)} type="text"/>
            <button onClick={() => (dispatch(AddCity(Value)), setValue(''))}>Добавить</button>
        </div>
    )
}
export default FormAddCity;