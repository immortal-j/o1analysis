import { Box, Grid, Typography, FormControlLabel, Radio, RadioGroup, Button } from '@mui/material'
import React, { useState } from 'react'
import Container from '@mui/material/Container';
import TimerWrapper from "../components/NewTImer";
const data = [1, 2, 3, 5, 6, 9, 3, 4, 6, 5, 5, 2, 4];
const style = {
    width: '50%',
};
const ContestData = () => {
    const [timerstarted, setTimerstarted] = useState(false);
    const handleTimer = (arg) => {
        setTimerstarted(arg);
    }
    return (
        <Container maxWidth="lg">
            <Typography variant="h4" sx={{ textAlign: "center", margin: "2rem 0" }}> Today's Contest</Typography>
            {/* <Box textAlign='center'>
                <Button variant='contained' sx={{
                    background: "#2C6DE7", margin: '0.5rem 0',
                    width: "30%"
                }}> Start</Button>
            </Box> */}
            <TimerWrapper timerstarted={timerstarted} handleTimer={handleTimer} />
            <Box>
                <Grid container>
                    {
                        data.map((data, index) => <Grid key={index} container item xs={12} sx={{ background: "#ebebeb", padding: '1rem', margin: "1rem 0", borderRadius: "0.5rem", boxShadow: " rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px" }} justifyContent="space-between">
                            <Grid item xs={12} md={12}>
                                <Typography variant={'body1'} sx={{ padding: '2rem 1rem', background: "white", borderRadius: "1rem", margin: "0.5rem 0", boxShadow: " rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px" }}>{index + 1} What is this?</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Container sx={{ padding: '0.5rem', background: "white", borderRadius: "1rem" }}>
                                    <RadioGroup sx={{ flexDirection: "row", justifyContent: "space-around" }}>
                                        <FormControlLabel sx={{ color: 'green', fontWeight: "bold", }} value="solved" control={<Radio sx={{
                                            color: "green", '&.Mui-checked': { color: 'green' },
                                        }} />} label="Solved" />
                                        <FormControlLabel sx={{ color: '#b14949', fontWeight: "bold", }} value="unsolved" control={<Radio sx={{
                                            color: "#b14949", '&.Mui-checked': { color: '#b14949' },
                                        }} />} label="Unsolved" />
                                        <FormControlLabel sx={{ color: '#666363', fontWeight: "bold", }} value="tried" control={<Radio sx={{
                                            color: "#666363", '&.Mui-checked': { color: '#666363' },
                                        }} />} label="Tried" />
                                    </RadioGroup>
                                </Container>
                            </Grid>
                        </Grid>)

                    }
                </Grid>
                <Box textAlign='center'>
                    <Button variant='contained' sx={{
                        background: "#2C6DE7", margin: '2rem 0',
                        width: "30%"
                    }}> Submit</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default ContestData