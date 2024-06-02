import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {GetHobbiesFromDB} from './hobbyAction';
import Select from "react-dropdown-select";

let HobbiesList = () => {
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(GetHobbiesFromDB());
    },[dispatch])
    const hobbies = useSelector(state=>state.hobbies)

    return (
        <div className="drop-down">
            <Select options={hobbies} onChange={(values) => this.setValues(values)} />;
        </div>
    );
};
export default HobbiesList;