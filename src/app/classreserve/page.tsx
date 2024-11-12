'use client';
import React, { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import RenderReserveWrite from '../components/writeComp/writeComp';
import Calendar from '../components/CalendarComp/CalendarComp';

const list = (await axios.get(`http://localhost:3000/api/schedule`)).data;

// READ section
const ReadSection = () => {
    return (
      <div className="space-y-2">
      <div className="mt-2 text-center font-bold text-2xl">TODO LIST</div>
      <div className="rounded-lg border border-gray-800">
        <ul role="list" className="divide-y divide-gray-500">
          {list.map((item: { NAME: number; PHONE: string }) => (
            <li
              key={item.NAME}
              className="flex p-2 justify-between gap-x-6 text-lg"
            >
              <span>{item.PHONE}</span>
              <span>ID # {item.NAME}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    )
  }

const scheduleCalendar = () => {
    useEffect(() => {
        const today = new Date();
        //setSelectedDate(today);
    }, [])

    return (
        <div className="calendar">
            <Calendar />
            <RenderReserveWrite />
            <ReadSection />
        </div>
    );
};

export default scheduleCalendar;