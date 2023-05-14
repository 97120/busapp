import { Box, Button } from "@mui/material"
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs, { Dayjs } from "dayjs"
import data from "../Utils/data"
import { useContext, useEffect, useState } from "react"
import { PassportAppContext } from "../contexts/passportAppContext"
import { format } from "path"
import { log } from "console"

const DateAndTime = () => {
    
    // const [month,setMonth]=useState<number>( dayjs().month())
    // const { updateData, ...data } = useContext(PassportAppContext)
    //const {...data}=useContext(PassportAppContext)
    
    //console.log(availability)
    // console.log(data)
    //console.log(typeof dayjs().toDate())


    // const fetchAvailablity = async (month:number) => {
    //     //const url = "http://localhost:5000/availability/26?user=thanzaw";
    //     //const url = `http://localhost:5000/availability?month=${month}`;
    //     const url = `http://localhost:5000/availability?month=${month}`;
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log("data from server..", data)
    //     updateData({ ...updateData, availability: data })
    
    // }

    const { updateData, fetchAvailability, availability, ...data } = useContext(PassportAppContext)
    console.log(availability)
    
    const shouldDisableDate = (date:Dayjs) => {
        if (!availability) return true;
        //console.log(availability,date.format("DD-MM-YYYY"))
        const availabilityDate = availability.find((item) => item.date === date.format("DD-MM-YYYY"))
        
        
        if (!availabilityDate) return true;

        const isAvailable = availabilityDate.slots.some((slot) => slot.availableSlot > 0)
        
        return isAvailable? false: true;
        //return false;
    }
    
    return (
        <>
             <Box
            sx={{ maxWidth: 300, margin: "0 auto", mt: 5 }}>
            <h1>Passport App</h1>
            
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker
                    format="DD-MM-YYYY"
                        disablePast
                        shouldDisableDate={shouldDisableDate}
                        value={data.bookingDate?dayjs(data.bookingDate):null}
                        onOpen={()=>fetchAvailability(dayjs().month())}
                        onMonthChange={(date:Dayjs)=>fetchAvailability(date.month())}
                    onChange={(value) => {
                        const dayJsObj = value as unknown as Dayjs
                        // setMonth(dayJsObj.month())
                        updateData({
                            ...data,
                            bookingDate: dayJsObj.toDate(),
                        })
                        }}
                />
            </LocalizationProvider>

             {/* <h1>{ data.bookingDate}</h1> */}

{/*             
             <Button variant="contained"
                onClick={() => setNumber(number + 1)}
                sx={{ mt: 3, ml: 10 }} >
                Click  {number}
            </Button> */}
            
        </Box>
        </>
    )
}
export default DateAndTime;
