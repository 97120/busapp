import { createContext, useState } from "react";

interface User {
    name: string;
    nrcNumber: string;
    dateOfBirth: string
    phoneNumber: string;
    email:string

}

interface Booking{
    bookingDate: string|null;
    time: number|null;
    user: User | null
    updateData:(value:any)=>void
}

const defaultContext = {
    bookingDate: null,
    time: null,
    user: null,
    updateData: ()=>{},
}


export const PassportAppContext = createContext<Booking>(defaultContext)

const PassportProvider = ({ children }: any) => {
    const [bookingData,setBookingData]=useState(defaultContext)
    return (
        <PassportAppContext.Provider value={{ ...bookingData, updateData: setBookingData }}>
            {children}

        </PassportAppContext.Provider>
    )
}

export default PassportProvider;