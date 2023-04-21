import { Box, Autocomplete, TextField, Button } from "@mui/material"
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { useState } from "react"
import movies, { buses, stations } from "../Utils/data"
import { SearchStations, Bus } from "../typings/type"

export const BusApp = () => {
    const [searchStations, setSearchStations] = useState<SearchStations>({ startStation: null, endStation: null })
  //console.log(searchStations)
  const [directBus, setDirectBus] = useState<Bus[] | null>(null)
  
/*
  {
    id: 2,
    name: "YBS 45",
    stations: [
      { id: 3, label: "Yankin" },
  { id: 4, label: "Tamwe" },
  { id: 5, label: "Yuzana Plaza" },
  { id: 6, label: "Saint Paul" },
  { id: 7, label: "Suele" },
  { id: 8, label: "Thingangyun" },
  { id: 9, label: "South okkala" },
  { id: 10, label: "North okkala" }
    ]
  }, */

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
            return <h1 key={bus.id}>{ bus.name}</h1>
          })}
        </Box>

        <LocalizationProvider dateAdapter={AdapterDayjs}  >
         <DatePicker />
      </LocalizationProvider>
      </Box>
      
    </Box>
  );
}