import { Box } from '@mui/material';
import React from 'react';
import Image from "next/image";
import logo from '../../../../assets/logo.png'
import { useStyles } from "./styles";

export function Menu() {
    const styles = useStyles();
  return (
    <Box className={styles.boxMenu}>
        <Image
            src={logo}
            height={30}
            quality={100}
            priority
            alt="logo da empresa"
        />
    </Box>
  );
}