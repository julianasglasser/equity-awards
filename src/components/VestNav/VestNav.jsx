import React, { useState } from 'react';
import './vestNav.scss';
import VestInfo from '../VestInfo';

export default function VestNav({ data }) {
    const [state, setstate] = useState({active: 0});

    const changeState = (evt) => {
        setstate({active: evt.target.id}); 
    };

    return (
        <div>
            <ul>
                {data.map((vest, index) => (
                <li key={index} className={Number(state.active) === index ? 'active' : 'inactive'}>
                    <button id={index} onClick={changeState} type="button">
                        {vest.label}
                    </button>
                </li>
                ))}
            </ul>
            <VestInfo props={data[state.active]}/>
        </div>
    );
}
