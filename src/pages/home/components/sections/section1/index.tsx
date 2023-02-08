import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from "./styles";
import asset from "../../../../../assets/asset.png"
import Image from "next/image";

export function Section1() {
    const styles = useStyles();
  return (
    <Grid item className={styles.section1}>
        <Grid className={styles.grid1section1}>
            <Grid className={styles.grid2section1}>
                <Box className={styles.box1section1}>
                    <Typography className={styles.typographyIcon}>
                        WEBINARS EXCLUSIVOS
                    </Typography>
                </Box>
                <Typography
                    variant="h3" 
                    className={styles.typographyTitle}
                >
                    Menos Conversinha,
                </Typography>
                <Typography
                    variant="h1"
                    className={styles.typographySubTitle}
                >
                    Mais {" "}
                    <label className={styles.labelTitle}>
                        <span className={styles.span}>
                            <Image
                                src={asset}
                                className={styles.imgAssent}
                                quality={100}
                                priority
                                alt="acento"
                                objectFit="scale-down"
                            />
                        </span>
                        Conversão
                    </label>
                </Typography>
                <Divider className={styles.dividerSection1}/>
                <Typography className={styles.typographyDescription}>
                    Conheça as estratégias que 
                    <label className={styles.labelText}> mudaram o jogo </label> 
                    e como aplicá-las no seu negócio
                </Typography>
            </Grid>
        </Grid>
    </Grid>    
  );
}