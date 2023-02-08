import React from 'react';
import { Modal } from "@nextui-org/react";
import { Box, Divider, Typography, Button } from '@mui/material';
import IconCloudDownload from '../../../../icons/download';
import { useStyles } from "./styles";
import ReactPlayer from 'react-player'

export function ModalPlay(props: any) {
    const styles = useStyles();

  return (
    <Modal
        closeButton
        aria-labelledby="modal-title"
        open={props.visible}
        onClose={props.closeHandler}
        width="27rem"
        className={styles.modalGlobal}
      >
        <Modal.Header className={styles.modalHeader}>
            <Box className={styles.boxHeader}>
                <Typography className={styles.textHeader}>
                   <label className={styles.labelHeader}>Webinar:</label> {props.data.titulo}
                </Typography>
            </Box>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
            <Box className={styles.boxPlayer}>
                <ReactPlayer 
                    url={props.data.url} 
                    width='100%'
                    height='15.5rem'
                />
            </Box>
            <Box className={styles.boxTexts}>
                <Typography className={styles.textTitleDescription}>
                    Descrição
                </Typography>
                <Divider className={styles.divider}/>
                <Typography className={styles.textDescription}>
                    {props.data.descricao}
                </Typography>
            </Box>
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
            <Typography className={styles.textTitleDownload}>
                Downloads
            </Typography>
            <Divider className={styles.divider}/>
            <Box className={styles.boxButtons}>
                <Button className={styles.buttonDownload} sx={{background: '#D2E4DF', color: '#23A37F'}}>
                    <Box className={styles.boxIcon} sx={{background: '#A0DECD'}}>
                        <IconCloudDownload className={styles.icon}/>
                    </Box>
                    Spreadsheeet.xls
                </Button>
                <Button className={styles.buttonDownload} sx={{background: '#D3E5FC', color: '#126BD7'}}>
                    <Box className={styles.boxIcon} sx={{background: '#B3D2F8'}}>
                        <IconCloudDownload className={styles.icon}/>
                    </Box>
                    Document.doc
                </Button>
                <Button className={styles.buttonDownload} sx={{background: '#F9F4C2', color: '#A6992A'}}>
                    <Box className={styles.boxIcon} sx={{background: '#F6EB8D'}}>
                        <IconCloudDownload className={styles.icon}/>
                    </Box>
                    Presentation.ppt
                </Button>
            </Box>
        </Modal.Footer>
      </Modal>
  );
}