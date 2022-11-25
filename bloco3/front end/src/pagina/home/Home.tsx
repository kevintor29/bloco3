import React from "react";
import './Home.css';
import { Button, Grid, Paper, Typography}from '@material-ui/core';
import { Box } from "@mui/material";
import { width } from "@mui/system";

function Home(){
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#ff3d00" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Bem vindos</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>fale seus comentarios!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#dd2c00", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        
        </>
    )
}

export default Home;{/* <Grid container spacing={2}>
            <Grid item xs={12} sm={8}></Grid>
            <Paper style={{height:"100vh", background: "ligthgrey"}}/>
            <Grid item container direction= "column" xs={12} sm={4} spacing={2}>
                <Grid item>
                    <Paper style={{height:"49vh", background: "orange"}}/>
                </Grid>
                <Grid item>
                    <Paper style={{height:"49vh", background: "green"}}/>
                </Grid>
            </Grid>
</Grid> 
<Paper>
            <Box p={2}>
               <Box display= 'flex' justifyContent='center'>
                
                </Box>
                <img src="https://preview.redd.it/7p2vdhbxspc81.png?width=1600&format=png&auto=webp&s=9d8b1caa2f936ba76302c7584d62532ac546ea5d" alt="" style={ {width:"100%" ,height:"100%"}} />
                <Box display="flex" justifyContent="center">
                <Button variant= 'contained' color='primary'>texto1</Button>
                <Button variant= 'contained' color='secondary'>texto2</Button>
                </Box>
                
            </Box>
        </Paper>*/}