import { createContext, useState } from "react";

export interface Slot{
    time: number;
    totalSlot: number;
    bookedSlot: number;
    availableSlot:number
}

export interface Availability{
    date: string;
    month: number;
    slots:Slot[]
}
interface User {
    name: string ;
    nrcNumber: string;
    dateOfBirth: string
    phoneNumber: string;
    email:string

}

interface Booking{
    bookingDate: string|null;
    time: number|null;
    user: User | null
    availability:Availability [],
    fetchAvailability:(value:any)=>void
    updateData:(value:any) => void
}

const defaultContext = {
    bookingDate: null,
    time: null,
    user: null,
    availability: [],
    fetchAvailability:()=>{},
    updateData: ()=>{},
}


export const PassportAppContext = createContext<Booking>(defaultContext)

const PassportProvider = ({ children }: any) => {
    const [bookingData,setBookingData]=useState(defaultContext)

    const fetchAvailability = async (month:number) => {
        const url = `http://localhost:5000/availability?month=${month}`;
        const response = await fetch(url);
        const data = await response.json();
        //console.log("data from server..", data)
        setBookingData({...bookingData,availability:data})
    }
    
    return (
        <PassportAppContext.Provider value={{ ...bookingData, updateData: setBookingData,fetchAvailability }}>
            {children}
        </PassportAppContext.Provider>
    )
}

export default PassportProvider;