import { Box } from "@mui/material"
import { useContext } from "react";
import { PassportAppContext } from "../contexts/passportAppContext";
import dayjs from "dayjs";
const ComfirmAndReview = () => {
    const {bookingDate,time,user,updateData}=useContext(PassportAppContext)
    return (
        <Box
        sx={{display:'flex',width:"50%",flexDirection:"column",margin:"0 auto"}}>
            <h1>Comfirm and Review</h1>
            <h2>{ dayjs(bookingDate).format("DD/MM/YYYY")}</h2>
            <p>Name:<span style={{fontWeight:"bold",fontStyle:"italic"}}> { user?.name}</span></p>
            <p>NRC:<span style={{fontWeight:"bold",fontStyle:"italic"}}> { user?.nrcNumber}</span></p>
            <p>Email:<span style={{fontWeight:"bold",fontStyle:"italic"}}> { user?.email}</span></p>
        </Box>
    )
}
export default ComfirmAndReview;