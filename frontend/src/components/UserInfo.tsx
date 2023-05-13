import { Box, TextField } from "@mui/material"
import { useContext, useState } from "react"
import { PassportAppContext } from "../contexts/passportAppContext"

const UserInfo = () => {
    const { updateData,...data } = useContext(PassportAppContext)
    return (
        <Box sx={{display:"flex",flexDirection:"column",margin:'0 auto',maxWidth:"200px" }}>
            <TextField
                sx={{mb:2}}
          required
          id="name"
                placeholder="Name"
                value={data.user?.name? data.user.name:null}
                onChange={(evt) =>
                    updateData({
                        ...data,
                        user:{...data.user,name:evt.target.value}
                })}
            />
            <TextField
                sx={{mb:2}}
          required
          id="nrc_number"
                placeholder="NRC Number"
                value={data.user?.nrcNumber? data.user.nrcNumber:null}
                onChange={(evt) =>
                    updateData({
                        ...data,
                        user:{...data.user,nrcNumber:evt.target.value}
                })}
            />
            <TextField
          required
          id="email"
                placeholder="Email"
                value={data.user?.email? data.user.email:null}
                onChange={(evt) =>
                    updateData({
                        ...data,
                        user:{...data.user,email:evt.target.value}
                })}
        />
        </Box>
    )
}
export default UserInfo