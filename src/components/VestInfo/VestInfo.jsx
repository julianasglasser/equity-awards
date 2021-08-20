import React from 'react';
import './vestInfo.scss';
import { parse, format } from 'date-fns';

const formatDate = (targetDate) => {
    const parsedDate = parse(targetDate, 'P', new Date());
    const formatedDate = format(parsedDate, "MMMM d yyyy");
    return formatedDate;
}

const formatAmount = (amount) => {
    // for simplicity, I just removed the trailing zeros
    const amountWithoutTrailingZeros = Number.parseFloat(amount.toString());
    return amountWithoutTrailingZeros.toLocaleString('en-US');
}

export default function VestInfo({ props }) {
    return (
        <div className="vestInfo">
            <p className="vestInfo__name">{props.vesting_manager_name}</p>
            <table className="vestInfo__table">
                <thead>
                    <tr>
                        <th>Vesting Date</th>
                        <th>Shares Vesting</th>
                        <th>Cumulative Shares Vested</th>
                    </tr>
                </thead>
                <tbody>
                    {props.vesting_schedule.map((schedule) => (
                        <tr>
                            <td>{formatDate(schedule.vesting_date)}</td>
                            <td>{formatAmount(schedule.amount)}</td>
                            <td>{formatAmount(schedule.cumulative_amount)}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </div>
    );
}
