import  React,{useContext, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DateAndTime from './DateAndTime';
import UserInfo from './UserInfo';
import { log } from 'console';
import { PassportAppContext } from '../contexts/passportAppContext';
import ComfirmAndReview from './ComfirmAndReview';

const steps = ['Date & Time', 'User Info', 'Preview & Comfirm'];

const PassportStepper = () => {
  //const {bookingDate,time,user}=useContext(PassportAppContext)
  const {...data}=useContext(PassportAppContext)
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {
     console.log(data)
  },[activeStep])
  
  const createBooking = () => {
    // console.log(bookingDate);
    // console.log(time)
    // console.log(user)
    console.log("can create booking now..")
  }
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  return (
    <Box sx={{ maxWidth:'50%',margin:"0 auto" ,mt:7 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      
        <>
        <Box sx={{ mt: 5, mb: 20 }}>
          
          {activeStep ===0 && <DateAndTime/>}
          {activeStep === 1 && <UserInfo />}
          {activeStep === 2 && <ComfirmAndReview />}

          
        </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            
            
            {activeStep === steps.length - 1 ? (
              <Button onClick={createBooking}>Finish</Button>) : (
                <Button onClick={handleNext}>Next</Button>
              )
              }
            
          </Box>
        </>
     
    </Box>
  );
}

export default PassportStepper;