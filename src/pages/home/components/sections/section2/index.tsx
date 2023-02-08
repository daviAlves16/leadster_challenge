import { Grid } from '@mui/material';
import { useStyles } from "./styles";
import React from 'react';
import { PaginationControlled } from './paginationControlled';

export function Section2() {
    const styles = useStyles();
  return (
    <Grid className={styles.section2}>
        <PaginationControlled />
    </Grid>
  );
}