import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import "react-datepicker/dist/react-datepicker.css";
import "./DateSearchBar.css";

//DatePicker Configuration in Spanish
registerLocale('es', es)

const DateSearchBar = (props) => {

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const today = new Date();

    useEffect(() => {
        console.log(props.reset)
        if (props.reset) {
            setDateRange([null, null])
        }
    }, [props.reset]);

    const handleSelection = (dates) => {
        setDateRange(dates);
        props.handleDates(dates);
    }

    return (
        <>
            <div className= "date-search-bar" id="dateSearchBar">
                <div className="calendar-container" id="calendars">
                    <FontAwesomeIcon icon={faCalendarDay} />
                    <DatePicker
                        className="DatePicker"
                        locale="es"
                        placeholderText="Check in - Check out"
                        selected={startDate}
                        selectsRange={true}
                        monthsShown={2}
                        dateFormat="dd 'de' MMM. 'de' yyyy"
                        closeOnScroll={true}
                        minDate={today}
                        onChange={(dates) => handleSelection(dates)}
                        startDate={startDate}
                        endDate={endDate}
                    />
                </div>
            </div>
        </>
    )
}

export default DateSearchBar;
