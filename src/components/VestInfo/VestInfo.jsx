import React from 'react';
import './vestInfo.scss';
import { parse, format } from 'date-fns';

const formatDate = (targetDate) => {
    const parsedDate = parse(targetDate, 'P', new Date());
    const formattedDate = format(parsedDate, "MMMM d yyyy");
    return formattedDate;
}

const formatAmount = (amount) => {
    // For simplicity, I just removed the trailing zeros.
    // I also could have used toFixed(0) to remove all decimals, but
    // I understood from the doc it would be better to have a decimal
    // point when needed.
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
                    {props.vesting_schedule.map((schedule, index) => (
                        <tr key={index}>
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
