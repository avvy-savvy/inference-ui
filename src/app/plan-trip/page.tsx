'use client';
import React, {useState} from "react";
import {TextField, Box, Container, Button, MenuItem} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, {Dayjs} from "dayjs";
import Copyright from "@/components/Copyright";
import Typography from "@mui/material/Typography";

const risks = ["No Inputs Provided", "Normal Risk", "High Risk"]

const initialArrivalInfo = {
    'lat': 0, 'lng': 0, "date": "", 'risk': risks[0]
}

export default function PlanTrip() {
    const [data, setData] = useState(initialArrivalInfo)

    const handleLatitude = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        console.log(value);
        setData({...data, 'lat': value})
    }

    const handleLongitude = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        console.log(value);
        setData({...data, 'lng': value})
    }

    const handleDate = (newValue: Dayjs | null) => {
        const value = newValue == null ? "" : `${newValue.get('month') + 1}/${newValue.get('date')}/${newValue.get('year')}`;
        console.log(value);
        setData({...data, 'date': value})
    }

    async function onSubmit() {
        const location = `${window.location.hostname}:5000`;
        const input_date = data['date'].split("/");
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "lat": data['lat'],
                "lng": data['lng'],
                "date": `${input_date[2]}-${input_date[0].padStart(2, '0')}-${input_date[1].padStart(2, '0')}`
            })
        };
        const response = await fetch(`http://${location}/query_trip_possibility`, settings)
        if (!response.ok) {
            console.log(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        console.log(result)
        let risk;
        try {
            const risk_probability = parseFloat(result['prob'])
            risk = risk_probability < 1.0 ? risks[1] : risks[2]
        } catch (error) {
            console.log(error)
            risk = risks[0]
        }
        setData({
            ...data, 'risk': risk
        })
    }

    return (<LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container maxWidth="sm" sx={{marginTop: '7rem', marginBottom: '7rem'}}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant="h4" component="h1" sx={{mb: 2}} align="center">
                        Plan Trip
                    </Typography>
                    <div>
                        <DatePicker label="Select Arrival Date"
                                    value={data['date'] == '' ? null : dayjs(data['date'], 'MM/DD/YYYY')}
                                    onChange={handleDate}
                                    slotProps={{
                                        textField: {
                                            fullWidth: true,
                                            helperText: "Please select arrival date"
                                        }
                                    }}/>
                    </div>

                    <div>
                        <TextField
                            id="latitude"
                            type="number"
                            label="Select Latitude"
                            value={data['lat']}
                            onChange={handleLatitude}
                            helperText="Please select latitude"/>
                        <TextField
                            id="longitude"
                            type="number"
                            label="Select Longitude"
                            value={data['lng']}
                            onChange={handleLongitude}
                            helperText="Please select longitude"/>
                    </div>
                    <div>
                        <Button variant="contained" style={{width: '50%'}} onClick={onSubmit}>Submit</Button>
                    </div>

                    <br/>
                    <div>
                        <TextField
                            id="risk"
                            select
                            label="Avalanche Risk"
                            disabled
                            value={data['risk']}
                            helperText="Avalanche risk for selected inputs">
                            {risks.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </Box>
                <br/>
                <Copyright/>
            </Container></LocalizationProvider>
    );
}