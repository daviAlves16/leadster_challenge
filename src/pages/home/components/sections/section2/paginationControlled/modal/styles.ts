import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  buttonDownload:{
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    //background: 'pink',
    textTransform: 'none',
    fontSize: '0.6rem',
    padding: '0px',
    height: '1.5rem',
    paddingRight: '0.3rem',
    display : 'flex',
    alignItems: 'center',
    fontWeight: '600'
},
boxIcon:{
    borderRadius: 'inherit',
    padding: '0.3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:'0.3rem',
    height: '100%'
},
icon:{
    fontSize: '0.75rem'
    //padding: '5px'
},
modalGlobal:{
    paddingTop: '1rem', 
    borderTop: '5px solid #007dff'
},
modalHeader:{
    display :'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '1.5rem'    
},
boxHeader:{
    width: '70%' 
},
textHeader:{
    fontSize: '1.1rem',
    fontWeight: '600',
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    color: '#2c3e50',    
},
labelHeader:{
    color: '#007dff'    
},
modalBody:{
    padding: '0px'
},
boxPlayer:{
    width: '100%', 
    marginBottom: '0px !important'
},
boxTexts:{
    padding: '1rem 0.8rem 0.4rem 1rem', 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '0.2rem'
},
textTitleDescription:{
    fontSize: '0.75rem',
    fontWeight: '800',
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    color: '#2c3e50'    
},
divider:{
    width: '100%', 
    borderColor: '#E2E1DE'
},
textDescription:{
    fontSize: '0.75rem',
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    color: '#233F5C',
    fontWeight: '500',
    marginTop: '0.3rem'    
},
modalFooter:{
    padding: '0rem 1rem 1rem 1rem', 
    flexDirection: 'column', 
    alignItems: 'start',
    gap: '0.1rem'    
},
textTitleDownload:{
    fontSize: '0.75rem',
    fontWeight: '800',
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    color: '#2c3e50'    
},
boxButtons:{
    display : 'flex', 
    gap: '0.5rem', 
    flexWrap: 'wrap'
}
}));
