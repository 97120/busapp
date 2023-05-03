import { Box, Button } from "@mui/material"
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs, { Dayjs } from "dayjs"
import data from "../Utils/data"
import { useContext, useState } from "react"
import { PassportAppContext } from "../contexts/passportAppContext"

const DateAndTime = () => {
    
    const [month,setMonth]=useState<number>( dayjs().month())
    const { updateData, ...data } = useContext(PassportAppContext)
    console.log(data)
    return (
        <>
             <Box
            sx={{ maxWidth: 300, margin: "0 auto", mt: 5 }}>
            <h1>Passport App</h1>
            

            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker
                    format="DD-MM-YYYY"
                    disablePast
                    onChange={(value) => {
                        const dayJsObj = value as Dayjs
                        setMonth(dayJsObj.month())
                        updateData({
                            ...data,
                            bookingDate: dayJsObj.format("DD-MM-YYYY")
                        })
                    }}
                />
            </LocalizationProvider>

             <h1>{ data.bookingDate}</h1>

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