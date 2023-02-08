import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from "next/image";
import grafico from '../../../../../assets/comparativo_img_CTA.png'
import selo from '../../../../../assets/selo_RD.png'
import card from '../../../../../assets/no-card-dark.webp'
import star from '../../../../../assets/rating.webp'
import { useStyles } from "./styles";

export function Section3() {
    const styles = useStyles();
  return (
    <Grid className={styles.gridSection}>
        <Grid className={styles.gridSection2}>
            <Grid item>
                <Image
                    src={grafico}
                    width={500}
                    style={{height: 'auto'}}
                    quality={100}
                    priority
                    alt="grafico de leads"
                    objectFit="scale-down"
                />
            </Grid>
            <Grid item className={styles.gridText}>
                <Box className={styles.boxText}>
                    <Box className={styles.boxText2}>
                        <Typography className={styles.title}>
                            Pronto para triplicar sua <b>Geração de Leads?</b>
                        </Typography>
                        <Typography className={styles.subTitle}>
                            Criação e ativação em 
                            <label className={styles.labelText}> 4 minutos.</label>
                        </Typography>
                    </Box>
                    <Divider className={styles.textDivider}></Divider>
                    <Box className={styles.boxButtons}>
                        <Box className={styles.boxButtons2}>
                            <Box className={styles.boxButtons3}>
                                <Button className={styles.button}>
                                    Ver demonstração
                                </Button>
                            </Box>
                            <Box className={styles.boxSelo}>
                                <Image
                                    src={selo}
                                    height={50}
                                    quality={100}
                                    priority
                                    alt="Selo da empresa"
                                />
                            </Box>
                        </Box>
                        <Box className={styles.boxTextFeatures}>
                            <Box className={styles.boxTextFeatures2}>
                                <Image
                                    src={card}
                                    height={13}
                                    quality={100}
                                    priority
                                    alt="Cartão"
                                    objectFit="scale-down"
                                />
                                <Typography className={styles.boxTextFeaturesFont}>
                                    Não é necessario Cartão de Crédito
                                </Typography>
                            </Box>
                            <Divider orientation="vertical" flexItem className={styles.textDivider2}/>
                            <Box className={styles.boxTextFeatures3}>
                                <Image
                                    src={star}
                                    height={10}
                                    quality={100}
                                    priority
                                    alt="Cartão"
                                    objectFit="scale-down"
                                />
                                <Typography className={styles.boxTextFeaturesFont}>
                                    4.9/5 média de satisfação
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>    
            </Grid>
        </Grid>
    </Grid>
  );
}