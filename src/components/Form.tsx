import type {SubmitEvent} from "react";
import {useState} from "react";
import {useAppDispatch} from "../app/hooks.ts";
import {putCity} from "../features/city/citySlice.ts";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useAppDispatch();

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(putCity(city));
        setCity('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={city} onChange={e => setCity(e.target.value)}/>
            <button type="submit">Get Weather</button>
        </form>
    )
}

export default Form;