import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  boxMenu: {
    display: "flex !important",
    justifyContent: 'center',
    alignItems: "center",
    padding: '2rem'
  },
}));
