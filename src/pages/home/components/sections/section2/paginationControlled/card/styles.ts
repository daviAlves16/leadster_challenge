import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  gridGlobal:{
    display: 'flex', 
    flexDirection: 'column',
    padding: '0.5rem'
  },
  card:{
    filter: 'none',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
    borderRadius: '14px'
  },
  cardBody:{
    display: 'flex',
    flexDirection: 'column',
    padding: '0px !important',
    //background: 'blue'
  },
  img:{
    width: '100%'
  },
  span:{
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: '1',
    top: '0',
    right: '0',
    left: '0',
    height: '100%',
    borderRadius: 'inherit',
    background: 'rgba(0, 125, 255, 0.44)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconPlay:{
    width: '4rem', 
    height: '4rem', 
    color: 'white'
  },
  boxTitle:{
    flexGrow: '1', 
    padding: '0.6rem 1rem 1rem 1rem'    
  },
  textTitle:{
    fontSize: '0.85rem',
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    fontWeight: '600'    
  },
  cardFooter:{
    padding: '0px'
  }
}));
