import { Box, Button } from "@mui/material"  
import dayjs, {Dayjs} from "dayjs";
import { useContext, useEffect, useState } from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers";
import {PassportAppContext} from "../contexts/passportAppContext";
import { Stepper } from "./Stepper";
import PassportStepper from "./PassportStepper";

export const PassportApp = () => {
    const { updateData, ...data } = useContext(PassportAppContext)
    //const contextValue = useContext(PassportAppContext)
    
    // console.log(data)
    //const selectMonth = dayjs(data.bookingDate).month();

    //const [number, setNumber] = useState(0);
    //console.log("Possport app render.")
    //const [month,setMonth]=useState<number>()

    // useEffect(() => {
    //     fetchAvailablity()
    //     console.log("Inside useEffect.")
    // }, [number]);

    // useEffect(() => {
        
    //         fetchAvailablity()
    //     //console.log("Inside useEffect.")
    //  }, [data]);
    

    // useEffect(() => {
    //         fetchAvailablity()
    //     //console.log("Inside useEffect.")
    //  }, [selectMonth]);
    
    //console.log("Outside use effect")

    // const fetchAvailablity = async () => {
    //     //const url = "http://localhost:5000/availability/26?user=thanzaw";
    //     //const url = `http://localhost:5000/availability?month=${month}`;
    //     const url = `http://localhost:5000/availability?month=${selectMonth}`;
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log("data from server..",data)
    // }
    return <PassportStepper/>
}