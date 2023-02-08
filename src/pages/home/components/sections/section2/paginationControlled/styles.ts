import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  boxGlobal: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%'
  },
  gridGlobal:{
    margin: '0.5rem',
    marginBottom: '1rem',  
    display: 'flex',
    flexWrap: 'wrap',
    "@media (max-width: 1288px)": {
      flexDirection: 'column',
      alignItems: 'start',
      gap: '0.5rem'
    }
  },
  gridItem1:{
    display: 'flex',
    alignItems: 'center', 
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  gridItem2:{
    display: 'flex', 
    alignItems: 'center', 
    gap: '0.5rem',
    justifyContent:'end',
    flexGrow: '1',
    flexWrap: 'wrap',
    "@media (max-width: 388px)": {
      justifyContent:'start'
    }
  },
  textOrder:{
    fontSize: '0.7rem', 
    fontWeight: '600',
    color: '#2c3e50',
  },
  buttonDropdown:{
    border: '1px solid #2c3e50',
    fontSize: '0.7rem',
    padding: '0rem 0.5rem 0rem 0.5rem',
    height: '1.8rem',
    borderRadius: '0.5rem',
    color: '#2c3e50'
  },
  gridRenderPage:{
    marginTop: '2rem',
    marginBottom: '2.7rem'
  },
  boxPagination:{
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: '0.5rem',
    marginTop: '1.5rem'
  },
  textPage:{
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    fontWeight: '600',
    color: '#2c3e50'
  },
  pagination:{
    alignItems: 'center', 
    height: '2rem'
  },
  divider:{
    width: '100%', borderColor: '#BDC6D0'
  },
  buttonSelectd: {
    display: 'flex',
    justifyContent: 'center',
    alignItems :'center',
    height: '1.6rem',
    padding: '0px 0.7rem 0rem 0.7rem !important',
    fontSize: '0.7rem',
    background: '#007dff',
    borderRadius: '5rem',
    fontWeight: '600',
    textTransform: 'none',
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    color: 'white',
    '&:hover':{
        background: '#007dff',
        color: 'white',
        border: '1px solid #BFF1ED'
    },
    "@media (min-width: 1520px)": {
      fontSize: '1rem',
      height: '2rem'
    }
  },
  buttonNotSelect:{
    display: 'flex',
    justifyContent: 'center',
    alignItems :'center',
    height: '1.6rem',
    padding: '0px 0.7rem 0rem 0.7rem !important',
    paddingBottom: '0px',
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    fontSize: '0.7rem',
    //fontWeight: '600',
    borderRadius: '5rem',
    textTransform: 'none',
    background: 'white',
    border: '1px solid #2c3e50',
    color: '#2c3e50',
    '&:hover':{
        border: '1px solid #007dff',
        color: '#007dff'
    },
    "@media (min-width: 1520px)": {
      fontSize: '1rem',
      height: '2rem'
    }
  },
  iconPagination:{
    border: '0px',
    fontSize: '1.2rem',
    color: '#2c3e50',
    '&.Mui-selected':{
      borderColor: '#007dff',
      color: '#007dff'
    }
  }
}));
