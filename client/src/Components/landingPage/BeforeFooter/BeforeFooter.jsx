import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';

import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';
import logo1 from "../firstThing/AppStoreButton.svg";
import logo2 from "../firstThing/googlePlayButton.svg";









export const BeforeFooter = () => {
    return (
        <>
         <Container  maxWidth="xl">
            <Typography sx = {{fontSize: "52px", mt : 8, fontFamily : "Poppins, sans-serif", fontWeight: "600", color : "white"}} component="div">               
                
                    <Box sx={{ textAlign: 'center', m: 1 }}>
                        <Typography variant = "h2" sx = {{fontSize: "32px", fontFamily : "Roboto Slab", fontWeight: "700", color : "white"}} component = "div" >
                            Learn On The go
                        </Typography>
                    </Box>
                    <Box  sx={{ textAlign: 'center', m: 1 }}>
                        <Typography variant = "p" sx = {{fontSize: "22px", fontFamily : "Roboto Condensed", color : "gray",  fontWeight: "700"}} component = "div" >
                            DOWNLOAD OUT APP FROM THE STORE 
                        </Typography>
                        <Typography variant = "p" sx = {{fontSize: "22px", fontFamily : "Roboto Condensed", color : "gray",  fontWeight: "700"}} component = "div" >
                            AND LARN ON THE GO.
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', ml : 75, width : 300 }}>
                        {/* <Grid spacing = {2}>
                            <Grid md={6}> */}
                                <Box>
                                <img src = {logo2} alt = "appstore" />
                                </Box>
                           
                            {/* </Grid>
                            <Grid md = {6}> */}
                                <Box sx = {{ml : 2}}>
                                <img src = {logo1} alt = "sdd" />
                                </Box>
                            
                            {/* </Grid>
                        </Grid> */}
                    </Box>
                    
            </Typography>
            <Grid sx = {{padding: 5}} container>
                    
                
                    
            </Grid>
                
        </Container>
        </>
    )
}


// export {BeforeFooter}








