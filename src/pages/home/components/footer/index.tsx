import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from "next/image";
import logo from '../../../../assets/logo.png'
import IconFacebook from '../icons/facebook';
import IconLogoInstagram from '../icons/instagram';
import IconLinkedinIn from '../icons/linkedin';
import { useStyles } from "./styles";

export function Footer() {
    const styles = useStyles();
  return (
    <Grid className={styles.gridFooter}>
        <Grid className={styles.gridFooter2}>
            <Grid className={styles.gridLogo}>
                <Image
                    src={logo}
                    height={40}
                    quality={100}
                    priority
                    alt="logo da empresa"
                />
                <Typography className={styles.textLogo}>
                    Transformando visitantes em clientes
                </Typography>
            </Grid>
            <Grid
                container
                className={styles.gridText}
            >
                <Grid item sm={3} className={styles.gridItem}>
                    <Box>
                        <Typography className={styles.titleFooter}>
                            Links Principais
                        </Typography>
                    </Box>
                    <Box className={styles.boxTextFooter}>
                        <a href="#"><Typography className={styles.textFooter}>Home</Typography></a>
                        <a href="#"><Typography className={styles.textFooter}>Ferramenta</Typography></a>
                        <a href="#"><Typography className={styles.textFooter}>Preços</Typography></a>
                        <a href="#"><Typography className={styles.textFooter}>Contato</Typography></a>
                    </Box>
                </Grid>
                <Grid item sm={3} className={styles.gridItem}>
                    <Box>
                        <Typography className={styles.titleFooter}>
                            Cases
                        </Typography>
                    </Box>
                    <Box className={styles.boxTextFooter}>
                        <a href="#"><Typography className={styles.textFooter}>Geração de Leads B2B</Typography></a>
                        <a href="#"><Typography className={styles.textFooter}>Geração de Leads em Software</Typography></a>
                        <a href="#"><Typography className={styles.textFooter}>Geração de Leads em Imobiliária</Typography></a>
                        <a href="#"><Typography className={styles.textFooter}>Cases de Sucesso</Typography></a>
                    </Box>
                </Grid>
                <Grid item sm={3} className={styles.gridItem}>
                    <Box>
                        <Typography className={styles.titleFooter}>
                            Materiais
                        </Typography>
                    </Box>
                    <Box className={styles.boxTextFooter}>
                        <a href="#"><Typography className={styles.textFooter}>Blog</Typography></a>
                        <a href="#"><Typography className={styles.textFooter}>Parceria com Agências</Typography></a>
                        <a href="#"><Typography className={styles.textFooter}>Guia Definitivo do Marketing</Typography></a>
                        <a href="#"><Typography className={styles.textFooter}>Materiais Gratuis</Typography></a>
                    </Box>
                </Grid>
                <Grid item sm={3} className={styles.gridItem}>
                    <Box>
                        <Typography 
                            className={styles.titleFooter} 
                            sx={{marginBottom: '1.2rem !important'}}
                        >
                            Siga a Leadster
                        </Typography>
                    </Box>
                    <Box className={styles.boxTextFooter}>
                        <Box className={styles.boxGlobalIcons}>
                            <a href="#">
                                <Box className={styles.boxIcon}>
                                    <IconLinkedinIn className={styles.icon}/>
                                </Box>
                            </a>
                            <a href="#">
                                <Box className={styles.boxIcon}>
                                    <IconFacebook className={styles.icon}/>
                                </Box>
                            </a>
                            <a href="#">
                                <Box className={styles.boxIcon}>
                                    <IconLogoInstagram className={styles.icon}/>
                                </Box>
                            </a>
                        </Box>
                        <Typography className={styles.textFooter}>
                          <label className={styles.labelFooter2}>E-mail:</label> contato@leadster.com.br
                        </Typography>
                        <Typography className={styles.textFooter}>
                           <label className={styles.labelFooter2}>Telefone:</label> {' (42) '}98828-9851
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
        <Divider className={styles.footerDivider}/>
        <Grid className={styles.gridRights}>
            <Typography className={styles.fontRights} sx={{marginRight: '0rem'}}>
                Copyright @ 2015 - 2022 Todos os direitos reservador |
                <label className={styles.labelFooter3}>{' '}Leadster</label>
            </Typography>
            <Typography className={styles.fontRights} sx={{color: '#C0C2C8 !important'}}>
                Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso
            </Typography>
        </Grid>
    </Grid>
  );
}