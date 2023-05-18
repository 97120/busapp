import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs, { Dayjs } from "dayjs"
import data from "../Utils/data"
import { useContext, useEffect, useState } from "react"
import { PassportAppContext } from "../contexts/passportAppContext"
import { format } from "path"
import { log, time } from "console"

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
    const contextData=useContext(PassportAppContext)
    const { updateData, fetchAvailability, availability, ...data } = contextData

    const availableTimeSlots = availability.find(
        (item) => item.date === dayjs(data.bookingDate).format("DD-MM-YYYY"))
        ?.slots.filter((slot)=>slot.availableSlot>0)
    console.log(availableTimeSlots)
    
    
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
                            ...contextData,
                            bookingDate: dayJsObj.toDate(),
                        });
            }}
                />
            </LocalizationProvider>

                {/* <h1>{ data.bookingDate}</h1> */}
                <Box sx={{mt:4}}>
                    {availableTimeSlots && <>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Select Time</FormLabel>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group">
                                {availableTimeSlots.map((slot) => {
                                    return (
                                        <FormControlLabel
                                            key={slot.time}
                                            value={slot.time}
                                            control={<Radio
                                                onChange={(event) =>
                                                    updateData({
                                                        ...contextData,
                                                        time: event.target.value
                                                })
                                                }
                                            />}
                                            label={slot.time}/>
                                    )
                                })}
                            </RadioGroup>
                        </FormControl>
                         {}
                    </>}
                    {/* {availableTimeSlots &&
                        availableTimeSlots.map((slot) => {
                            return (
                                <>
                                    <h1 key={slot.time}>{ slot.time}</h1>
                                </>
                            )
                        })} */}
                </Box>

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
