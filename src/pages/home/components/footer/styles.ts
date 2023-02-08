import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  gridFooter:{
//background: 'red', 
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3rem 0rem 1.5rem 0rem',
  },
  gridFooter2:{
    width: '70%', 
  },
  gridLogo:{
    //background: 'pink',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '2rem',
    gap: '0.2rem'
  },
  textLogo:{
    fontSize: '0.65rem',
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    color: '#7f88a6',
    fontWeight: '500'
  },
  gridText:{
    marginBottom: '1.5rem'
  },
  gridItem:{
    padding: '1rem 1rem 2rem 0rem'
  },
  titleFooter:{
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    fontSize: '0.9rem',
    fontWeight:'600',
    color: '#2c3e50',
    marginBottom: '2rem'
  },
  textFooter:{
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    fontSize: '0.8rem',
    fontWeight:'500',
    color: '#7f88a6',
  },
  boxTextFooter: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem'
  },
  boxGlobalIcons:{
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '0.4rem'
  },
  boxIcon:{
    background: '#EFEFF0',
    borderRadius : '50%',
    width: '2rem',
    height: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon:{
    color: '#7f88a6', 
    fontSize: '0.7rem'
  },
  fontRights:{
    fontSize: '0.7rem',
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    color: '#7f88a6',
    fontWeight: '500',
    padding: '0.2rem 0rem 0.2rem 0rem'
  },
  footerDivider:{
    width: '100%', 
    borderBottom: '1px solid #EFEFF0'
  },
  gridRights:{
    display: 'flex', 
    justifyContent: 'space-between', 
    width: '70%',
    marginTop: '2rem',
    flexWrap: 'wrap'
  },
  labelFooter2:{
    color:'#2c3e50'
  },
  labelFooter3:{
    color: '#007dff'
  }
}));