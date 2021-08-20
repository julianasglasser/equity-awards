import React, { useState } from 'react';
import './vestNav.scss';
import VestInfo from '../VestInfo';

export default function VestNav({ data }) {
    const [state, setstate] = useState({ active: 0 });

    const changeState = (evt) => {
        setstate({ active: evt.target.id });
    };

    return (
        <div className="vestNav">
            <ul>
                {data.map((vest, index) => (
                    <li key={index}>
                        <button
                            className={Number(state.active) === index ? 'active' : 'inactive'}
                            id={index}
                            onClick={changeState}
                            type="button"
                        >
                            {vest.label}
                        </button>
                    </li>
                ))}
            </ul>
            <VestInfo props={data[state.active]} />
        </div>
    );
}
