import React from 'react'
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core';
import Particles from './components/Particles';


const useStyles = makeStyles((theme)=>({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const App = () => {
  const classes =useStyles();
  return (
    
    <div className={classes.wrapper}> 
    
    <AppBar  className={classes.appBar} position="static" color='inherit'>
      <Typography variant="h2" align="center">Vodeo</Typography>
      
    </AppBar>
        <VideoPlayer />
        <Options>
        <Notifications />
        </Options>    
        <Particles />
    </div>

  )
}

export default App;



