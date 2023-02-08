import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  gridSection:{
    background: '#EBF4EF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2.5rem 0rem 2.5rem 0rem',
  },
  gridSection2:{
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    gap: '3.5rem',
    flexWrap: 'wrap', 
    "@media (max-width: 1294px)": {
      gap: '0.5rem',
    }  
  },
  gridText:{
    //border: '1px solid black',
    //flexGrow: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText:{
    //border: '1px solid black', 
    //marginLeft: '4rem', 
    display: 'flex',
    flexDirection: 'column',
    gap: '0.7rem'
  },
  boxText2:{
    display: 'flex', 
    flexDirection: 'column', 
    flexWrap: 'wrap'
  },
  title:{
    fontSize: '2rem', 
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    color: '#2c3e50',
    display: 'flex', 
    flexDirection: 'column', 
    flexWrap: 'wrap'
  },
  labelText:{
    fontWeight: '600'
  },
  subTitle:{
    fontSize: '1.15rem',
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    color: '#2c3e50'
  },
  textDivider:{
    width: '100%',
    borderBottom: '2px solid #D4D3D3',
  },
  textDivider2:{
    borderRight: '2px solid #757575',
    marginRight: '0.5rem'
  },
  boxButtons:{
    display: 'flex', 
    flexDirection: 'column', 
    gap: '0.5rem', 
    paddingTop: '0.4rem'
  },
  boxButtons2:{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  boxButtons3:{
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
    background: '#007dff', 
    color: 'white',
    borderRadius: '2rem',
    fontSize: '0.8rem',
    fontWeight: '600',
    padding: '1rem 2rem 1rem 2rem',
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    '&:hover':{
      background: '#0060C1'
    }
  },
  boxSelo:{
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxTextFeatures:{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.3rem' 
  },
  boxTextFeatures2:{
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    paddingRight: '0.5rem'
    //justifyContent: 'center'
  },
  boxTextFeatures3:{
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    //paddingLeft: '0.5rem'
    //justifyContent: 'center'
  },
  boxTextFeaturesFont:{
    fontSize: '0.8rem',
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    color: '#2c3e50',
    fontWeight: '600'
  }
}));