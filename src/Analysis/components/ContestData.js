import { Box, Grid, Typography, FormControlLabel, Radio, RadioGroup, Button} from '@mui/material'
import React from 'react'
import Container from '@mui/material/Container';


const data=[1,2,3,5,6,9,3,4,6,5,5,2,4];
const style = {
    width:'50%',
  };
const ContestData = () => {
    return (
        <Container maxWidth="md">
            <Typography variant="h5" sx={{ textAlign: "center", marginBottom: "2rem" }}> Today's Contest</Typography>
            <Box>
                <Grid container>
                    {
                        data.map((data,index)=>   <Grid key={index}container item xs={12} sx={{ borderBottom: "1px solid grey" }}>
                        <Grid item xs={12} md={8}>
                            <Typography variant={'body1'}>1. What is this?</Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box >
                                <RadioGroup sx={{ flexDirection: "row" }}>
                                    <FormControlLabel sx={{ color: 'green', fontWeight: "bold" }} value="solved" control={<Radio sx={{
                                        color: "green", '&.Mui-checked': { color: 'green' },
                                    }} />} label="Solved" />
                                    <FormControlLabel sx={{ color: '#b14949', fontWeight: "bold" }} value="unsolved" control={<Radio sx={{
                                        color: "#b14949", '&.Mui-checked': { color: '#b14949' },
                                    }} />} label="Unsolved" />
                                    <FormControlLabel sx={{ color: '#666363', fontWeight: "bold" }} value="tried" control={<Radio sx={{
                                        color: "#666363", '&.Mui-checked': { color: '#666363' },
                                    }} />} label="Tried" />
                                </RadioGroup>
                            </Box>
                        </Grid>
                    </Grid>)
                     
                    }
                </Grid>
                <Button variant='contained' sx={{background:"purple", marginTop:'2rem', margin:" auto"
            }}> Submit</Button>
            </Box>
        </Container>
    )
}

export default ContestData