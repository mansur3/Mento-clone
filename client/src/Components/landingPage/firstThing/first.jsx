
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
// import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import logo1 from "./googlePlayButton.svg";
import logo2 from "./AppStoreButton.svg";



import {useState, useEffect} from "react";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



const First = () => {

   
    
    return (
        <>
            <Container  maxWidth="xl">
                <Grid sx = {{padding: 5}} container spacing={16}>
                    
                    <Grid sx = {{mt: 8}} item xs={6} md={4}>
                        <Typography variant = "h2" sx = {{fontSize: "52px", fontFamily : "Roboto Slab", fontWeight: "800", color : "white"}} component = "div" >
                            Learn From India's Biggest Mentors
                        </Typography>
                        <Typography variant = "h1" sx = {{paddingRight : 4, lineHeight : "2", fontSize: "22px", fontFamily : "Roboto Condensed", color : "white", mt: "5px"}} component = "div" >
                             SCROLL DOWN TO DISCOVER
                            LEARN FROM THE BEST
                            OVER 350+ VIDEO LESSONS
                            GET SIGNED CERTIFICATES
                        </Typography>
                        <Box sx = {{mt : 4,  borderRadius: "10px"}}  variant="contained">
                            <Button sx = {{mr : 0.3, bgcolor : "black"}}><img src = {logo1} alt = "sdd" /></Button>
                            <Button sx = {{bgcolor : "black"}}><img src = {logo2} alt = "appstore" /></Button>
                        </Box>
                        

                    </Grid>
                    <Grid item xs={6} md={8}>
                        <video    style={{ width : "100%", height: "500px", marginTop : "100px", borderRadius: "10px"}} loop autoPlay muted>
                            <source src = "https://d1tthr7pv14hhy.cloudfront.net/Images/general/background1.mp4" type = "video/mp4" />
                            <source src="movie.ogg" type="video/ogg" />
                        </video>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export {First};