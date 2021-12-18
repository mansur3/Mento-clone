
import Box from '@mui/material/Box';
import {First} from "./firstThing/first";
import {AllLesson} from "./AllLesson/AllLesson";
import {Comment} from "./comment/Comment";
import {BeforeFooter} from "./BeforeFooter/BeforeFooter";
import Navbar from '../Shared_Components/Navbar/Navbar';
import Container from '@mui/material/Container';


const Main = () => {
    return (
        <>
            
            {/* <Box>
                
            </Box> */}
            <Box sx={{ flexGrow: 1, backgroundColor : "#242833" }}>
            <Container  maxWidth="xl">
                <Box sx = {{ml : -5}}>
                <Navbar  />
                </Box>
                     
                
                
            </Container>
                <First />
                <AllLesson />
                <Comment />
                <BeforeFooter />
            </Box>
        
     
        </>
    )
}

export {Main}