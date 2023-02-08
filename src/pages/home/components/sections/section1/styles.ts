import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  section1:{
    background: '#EBF4EF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '7rem',
    fontFamily: 'Plus Jakarta Sans, sans-serif !important'
  },
  grid1section1:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  grid2section1:{
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    padding: '1rem',
    flexWrap: 'wrap',
    "@media (max-width: 733px)": {
      alignItems: 'start'
    } 
  },
  box1section1:{
    border: '2px solid #007dff',
    padding: '0.3rem 1rem 0.3rem 1rem',
    borderRadius: '2rem 2rem 2rem 0rem'
  },
  typographyIcon:{
    color: '#007dff',
    fontSize: '0.7rem',
    fontWeight: '700',
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    textAlign: 'center'
  },
  typographyTitle:{
    color: '#2c3e50',
    fontSize: '2.2rem',
    marginTop: '0.7rem',
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    textAlign: 'center',
    fontWeight: '500',
    "@media (max-width: 733px)": {
      textAlign: 'start',
      fontSize: '1.2rem',
    }
  },
  typographySubTitle:{
    color: '#007dff',
    fontSize: '4rem',
    fontWeight: '700',
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    textAlign: 'center',
    padding: '0rem 1rem 0rem 0rem',
    //overflowY: 'auto',
    position: 'relative',
    "@media (max-width: 733px)": {
      textAlign: 'start',
      fontSize: '2rem',
    }   
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
    //background: 'rgba(0, 125, 255, 0.44)',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'start',
    paddingTop: '0.55rem',
    "@media (max-width: 733px)": {
      paddingTop: '0rem',
      width:'100%'
    }   
  },
  labelTitle:{
    position: 'relative', 
    paddingRight: '1.1rem', 
    "@media (max-width: 771px)": {
      paddingTop: '0rem',
      width:'100%',
      display: 'flex',
    },
    "@media (max-width: 733px)": {
      paddingRight: '0.7rem'
    }     
  },
  typographyDescription:{
    color: '#385675',
    fontWeight: '600 !important',
    fontSize: '0.8rem !important',
    marginTop: '0.8rem',
    textAlign: 'center',
    "@media (max-width: 733px)": {
      textAlign: 'start'
    }       
  },
  imgAssent:{
    height: 'auto',
    width: '2.5rem',
    "@media (max-width: 733px)": {
      width: '1.4rem',
    }
  },
  dividerSection1:{
    width: '100%', 
    borderColor: '#E2E1DE',
    margin: '0.5rem 0rem 0rem 0rem'
  },
  labelText:{
    fontWeight: '700',
    color: '#192D42'
  },
  
}));

