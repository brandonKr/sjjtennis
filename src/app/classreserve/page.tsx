'use client';
import React, { useEffect, useState } from 'react';
import { format, addMonths, subMonths, setSeconds } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';
import "../assets/styles/calendar.css";

interface RenderHeaderProps {
    currentMonth: Date;
    prevMonth: () => void;
    nextMonth: () => void;
}

const RenderHeader: React.FC<RenderHeaderProps> = ({ currentMonth, prevMonth, nextMonth }) => {
    return (
        <div className="header row">
            <div className="col col-start">
                <span className="text">
                    <span className="text month">
                        {format(currentMonth, 'M')}월
                    </span>
                    {format(currentMonth, 'yyyy')}
                </span>
            </div>
            <div className="col col-end">
                <label onClick={prevMonth} >전달</label>
                <label onClick={nextMonth} >다음달</label>
            </div>
        </div>
    );
};

const RenderDays: React.FC = () => {
    const days = [];
    const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat'];
    for (let i = 0; i < 7; i++) {
        days.push(
            <div className="col" key={i}>
                {date[i]}
            </div>,
        );
    }
    return <div className="days row">{days}</div>;
};

interface RenderCellsProps {
    currentMonth: Date;
    selectedDate: Date;
    onDateClick: (day: Date) => void;
}


const RenderCells: React.FC<RenderCellsProps> = ({ currentMonth, selectedDate, onDateClick }) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';
    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, 'd');
            const cloneDay = day;
            days.push(
                <div
                    className={`col cell ${
                        !isSameMonth(day, monthStart)
                            ? 'disabled'
                            : isSameDay(day, selectedDate)
                            ? 'selected'
                            : format(currentMonth, 'M') !== format(day, 'M')
                            ? 'not-valid'
                            : 'valid'
                    }`}
                    key={formattedDate}
                    onClick={() => onDateClick(cloneDay)}
                >
                    <span
                        className={
                            format(currentMonth, 'M') !== format(day, 'M')
                                ? 'text not-valid'
                                : ''
                        }
                    >
                        {formattedDate}
                    </span>
                </div>,
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className="row" key={format(day, 'yyyy-MM-dd')}>
                {days}
            </div>,
        );
        days = [];
    }
    return <div className="body">{rows}</div>;
};

const RenderReserveWrite : React.FC = () => {
    let times = [];
    for (let i = 10; i < 22; i++) {
        times.push(
            <option value="{i}:00">{i}:00</option>
        )
    };

    return (
        <div>
            시작시간
            <select name="start" id="start">
                {times}
            </select>
            종료시간
            <select name="end" id="end">
                {times}
            </select>
            <br/>
            <label>
            예약자
            <input type="text" placeholder="예약자" size={10}/>
            전화번호
            <input type='text' placeholder="전화번호" size={10}/>
            </label>
            <br/>
            <button>예약하기</button>
        </div>
    )
};

const Calendar: React.FC = () => {
    const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };
    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };
    const onDateClick = (day: Date) => {
        setSelectedDate(day);
    };

    useEffect(() => {
        const today = new Date();
        setSelectedDate(today);
    }, [])

    return (
        <div className="calendar">
            <RenderHeader
                currentMonth={currentMonth}
                prevMonth={prevMonth}
                nextMonth={nextMonth}
            />
            <RenderDays />
            <RenderCells
                currentMonth={currentMonth}
                selectedDate={selectedDate}
                onDateClick={onDateClick}
            />
            <RenderReserveWrite />
        </div>
    );
};

export default Calendar;