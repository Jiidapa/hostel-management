import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Form } from 'react-bootstrap';

const Calendar = () => {
    let now = new Date();
    let start = now.setDate(now.getDate() + 1);
    let end = now.setDate(now.getDate() + 1);
    const [startDate, setStartDate] = useState(start);
    const [endDate, setEndDate] = useState(end);
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <Form.Label>เช็คอิน</Form.Label>
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="dd/MM/yyyy"
                        className="form-control"
                    />
                </div>
                <div className="col-md-6">
                    <Form.Label>เช็คเอาท์</Form.Label>
                    <DatePicker
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="dd/MM/yyyy"
                        className="form-control"
                    />
                </div>
            </div>
        </>
    )
}

export default Calendar
