'use client';
import React, { useEffect } from 'react';
import RenderReserveWrite from '../components/writeComp/writeComp';
import Calendar from '../components/CalendarComp/CalendarComp';


const scheduleCalendar = () => {
    useEffect(() => {
        const today = new Date();
        //setSelectedDate(today);
    }, [])

    return (
        <div className="calendar">
            <Calendar />
            <RenderReserveWrite />
        </div>
    );
};

export default scheduleCalendar;