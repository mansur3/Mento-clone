
// import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
// import Grid from '@mui/material/Grid';
// import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
// import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { experimentalStyled as styled } from '@mui/material/styles';



import {useContext} from "react";
import {AppContext} from "../../../Context-api/Context";





const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));









const Comment = () => {


    const {comment} = useContext(AppContext);
    // console.log(lesson);



    return (
        <>
            <Container  maxWidth="xl">
                <Grid  container spacing={6}>
             {
                 comment.map((e, i) => (
                     <Grid  item xs={6} md={4}>
                    <Box sx={{ minWidth: 275}}>
                    <Card sx = {{bgcolor : "#444", border : 1, borderColor : "gray", borderRadius : "20px", height: "400px"}} variant="outlined">
                    <CardContent>
                        <Typography sx={{ fontSize: 24, padding : "25px" }} color="white" gutterBottom>
                            "{e.speech}"
                        </Typography>
                        <Typography sx={{ fontSize: 24, padding : "25px", textAlign : "right" }} color="white" gutterBottom>
                            {e.speaker}
                        </Typography>
                        
                        </CardContent>
                        <CardActions>
                        {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                </Box>
                </Grid>
                 ))
             }
             </Grid>
            
            
                
            </Container>
        </>
    )
}
export {Comment};