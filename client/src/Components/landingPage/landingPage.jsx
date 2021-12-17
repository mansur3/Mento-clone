
import Box from '@mui/material/Box';
import {First} from "./firstThing/first";
import {AllLesson} from "./AllLesson/AllLesson";
import {Comment} from "./comment/Comment";
import {BeforeFooter} from "./BeforeFooter/BeforeFooter";

const Main = () => {
    return (
        <>
        
        
            <Box sx={{ flexGrow: 1, backgroundColor : "#242833" }}>
                <First />
                <AllLesson />
                <Comment />
                <BeforeFooter />
            </Box>
        
     
        </>
    )
}

export {Main}