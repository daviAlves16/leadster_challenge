import { Grid } from "@mui/material";
import { useStyles } from "./styles";
import { Menu } from "./components/menu";
import { Section1 } from "./components/sections/section1";
import { Section2 } from "./components/sections/section2";
import { Section3 } from "./components/sections/section3";
import { Footer } from "./components/footer";
import { ThemeProvider } from "@mui/styles";

export default function Home() {
    const styles = useStyles();
  return (
    <Grid className={styles.gridGlobal}>
        <Menu />
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
    </Grid>
  )
}