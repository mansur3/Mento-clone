
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import {useContext} from "react";
import {AppContext} from "../../../Context-api/Context";

import {Link} from "react-router-dom";





const AllLesson = () => {


    const {lesson} = useContext(AppContext);
    // console.log(lesson);



    return (
        <>
            <Container  maxWidth="xl">
            <Typography sx = {{fontSize: "18px", fontFamily : "Poppins, sans-serif", fontWeight: "600", color : "white"}} component="div">
                
               
                <Box sx={{ textAlign: 'center', m: 1 }}>ALL LESSONS</Box>
                
                </Typography>


                
                <Grid sx = {{padding: 5}} container spacing={16}>

                    {
                        lesson.map((e, i) => (
                            <Grid sx = {{mt: 8}} item xs={6} md={4}>
                                <Link to = {`/singletopic/${e._id}`}>
                                <Typography variant = "h2" sx = {{fontSize: "22px", fontFamily : "Roboto Slab", fontWeight: "800", color : "white"}} component = "div" >
                                    Learn From India's Biggest Mentors
                                </Typography>
                                </Link>
        
                            </Grid>
                        ))
                    }
                    
                    
                    <Grid sx = {{mt: 8}} item xs={6} md={4}>
                        <Typography variant = "h2" sx = {{fontSize: "22px", fontFamily : "Roboto Slab", fontWeight: "800", color : "white"}} component = "div" >
                            Learn From India's Biggest Mentors
                        </Typography>
 
                    </Grid>
                    
                </Grid>
                
            </Container>
        </>
    )
}
export {AllLesson};