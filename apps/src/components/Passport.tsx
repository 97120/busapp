import { Box, Button } from "@mui/material"  
import dayjs from "dayjs";
import { log } from "console";
import { useEffect, useState } from "react";

export const PassportApp = () => {

    const [number, setNumber] = useState(0);
    console.log("Possport app render.")

    useEffect(() => {
        fetchAvailablity()
        console.log("Inside useEffect.")
    }, [number]);
    console.log("Outside use effect")

    const fetchAvailablity = async () => {
        const url = "http://localhost:5000/availability?user=thanzaw";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
    }
    return (
         <Box
         sx={{maxWidth:300,margin:"0 auto" ,mt:10}}>
        <h1>Passport App</h1>
            <Button variant="contained"
                onClick={()=>setNumber(number+1)}
            >
                Click  {number}
            </Button>
    </Box>
        
    )
}