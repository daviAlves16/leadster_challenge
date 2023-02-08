import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Image from "next/image";
import thumb from '../../../../../../../assets/thumbnail.png'
import { card } from '../../../../../types/types_home'
import { Card } from "@nextui-org/react";
import IconPlay from '../../../../icons/play'
import { ModalPlay } from '../modal'
import { useStyles } from "./styles";
import { useHover } from 'react-aria'


type card_props = {
    card: card
}

export function MyCard(props : card_props) {
    const { hoverProps, isHovered } = useHover({});
    const styles = useStyles();
    const [visible, setVisible] = useState(false);
    const handler = () => {
        setVisible(true);
        console.log("open");
    }
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    
  return (
    <Grid 
        item 
        sm={4}
        className={styles.gridGlobal}
    >
        <Card 
            isPressable
            onPress={handler}
            className={styles.card}
        >
            <Card.Body className={styles.cardBody}>
                <Box
                    {...hoverProps}
                >
                    <Image
                        className={styles.img}
                        src={thumb}
                        style={{height: 'auto', paddingBottom: '0px'}}
                        quality={100}
                        priority
                        alt="thumbnail"
                    />
                    <span 
                        className={styles.span}
                        style={{display: isHovered ? 'flex' : 'none'}}
                    >
                        <IconPlay className={styles.iconPlay}/>
                    </span>
                </Box>
            </Card.Body>
            <Card.Footer className={styles.cardFooter}>
                <Box 
                    className={styles.boxTitle}
                    {...hoverProps}
                >
                    <Typography
                        sx={{color: isHovered ? '#007dff' : '#2c3e50'}} 
                        className={styles.textTitle}>  
                        {props.card.titulo}
                    </Typography>
                </Box>
            </Card.Footer>
        </Card>
        <ModalPlay 
            visible={visible} 
            closeHandler={closeHandler}
            data={props.card} 
        />
    </Grid>
  );
}