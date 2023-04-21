import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import movies, { buses } from './Utils/data';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { stations } from './Utils/data';
import { Bus, SearchStations } from './typings/type';


function App() {
  const [searchStations, setSearchStations] = useState<SearchStations>({ startStation: null, endStation: null })
  //console.log(searchStations)
  const [directBus, setDirectBus] = useState<Bus[] | null>(null)
  
  const handleClick = () => {
    const busStartStation = buses.filter((bus) =>
      bus.stations.find((station) =>
        station.id === searchStations.startStation?.id))
    
    const directBus = busStartStation.filter((bus) =>
      bus.stations.find((station) =>
      station.id === searchStations.endStation?.id))
      
    console.log("Direcr Bus", directBus)
    setDirectBus(directBus)
  }
  

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:"row",
        justifyContent: "center",
        mt: 5
      }}>
         {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      <Box
        sx={{
          margin: " 0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection:"column",
        alignItems:"center"}}
      >
        <Autocomplete
      disablePortal
      id="movies"
      options={movies}
      sx={{ width: 300,mb:3 }}
          renderInput={(params) => <TextField {...params} label="Movies" />}
        />
        
        <Autocomplete
      disablePortal
      id="movies"
      options={stations}
      sx={{ width: 300,mb:3 }}
          renderInput={(params) => <TextField {...params} label=" Start Station" />}

          onChange={(event, value) => {
            value && setSearchStations({ ...searchStations, startStation:value})
          }}
        />

        <Autocomplete
      disablePortal
      id="movies"
      options={stations}
      sx={{ width: 300,mb:3 }}
          renderInput={(params) => <TextField {...params} label="End station" />}
          onChange={(event,value) => {
            value && setSearchStations({ ...searchStations, endStation:value})
          }}
      />
        
        <Button sx={{ mb: 3 }}
          variant="contained" href="#contained-buttons" onClick={handleClick}>
            Click
        </Button>
        
        <Box sx={{ margin: "0 auto", mt: 2, textAlign: "center" }}>
        
          {searchStations.startStation && (
          <h1>{searchStations.startStation.label}</h1>
        )}
        {searchStations.endStation && (
          <h1>{searchStations.endStation.label}</h1>
        )}
        </Box>
        
        <Box>
          {directBus && directBus?.map((bus) => {
            return <h1>{ bus.name}</h1>
          })}
        </Box>

        <LocalizationProvider dateAdapter={AdapterDayjs}  >
         <DatePicker />
      </LocalizationProvider>
      </Box>
      
    </Box>
  );
}

export default App;
