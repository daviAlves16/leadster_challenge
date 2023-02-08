import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import { Box, Divider, Grid, Button, PaginationItem } from '@mui/material';
import { data } from '../../../../dados/data'
import { MyCard } from './card'
import { useStyles } from "./styles";
import { Dropdown } from "@nextui-org/react";

export function PaginationControlled() {
  const styles = useStyles();
  const [selected, setSelected] = useState(new Set(["Data de Publicação"]));
  const [orderBy, setOrderBy] = useState('Data')
  const [page, setPage] = useState(1);
  const [limit] = useState(9)
  const [filter, setFilter] = useState({
    agencies: false,
    chatbot: false,
    digitalMarkting: false,
    leadGeneration: false,
    paidMedia: false
  })

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  function toConvert(){
    let newFiles = []
    for(let i = 0; i < data.length; i++){
      let file = {
        id: data[i].id, 
        url: data[i].url,
        titulo: data[i].titulo,
        descricao: data[i].descricao,
        data: new Date(data[i].data)
      }
      newFiles.push(file)
    }
    return newFiles
  }

  const renderPage = () =>{
    const start : number = (page - 1) * limit
    const end : number = (limit * page) - 1
    let dataOrder = toConvert()
    let files = []

    if(selectedValue === 'Data de Publicação'){
      dataOrder.sort(function(a,b) { 
        return a.data.getTime() - b.data.getTime() 
      });
    }

    for(let i : number = start; i <= end; i++){
      if(dataOrder[i] !== undefined){
        files.push(dataOrder[i])
      }
    }
    return(
      <Grid 
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {files.map((tab) => (
           <MyCard 
            key={tab.id}
            card={tab} 
          />
        ))}
      </Grid>
    )
  }
  return (
    <Box className={styles.boxGlobal}>
      <Grid className={styles.gridGlobal}>
        <Grid item className={styles.gridItem1}>
          <Button
            variant='outlined'
            className={
              filter.agencies ? styles.buttonSelectd 
              : styles.buttonNotSelect
            }
            onClick={()=>{
              setFilter({...filter, agencies: !filter.agencies})
            }}
          >
            Agências
          </Button>
          <Button
            variant='outlined'
            className={
              filter.chatbot ? styles.buttonSelectd 
              : styles.buttonNotSelect
            }
            onClick={()=>{
              setFilter({...filter, chatbot: !filter.chatbot})
            }}
          >
            Chatbot
          </Button>
          <Button
            variant='outlined'
            className={
              filter.digitalMarkting ? styles.buttonSelectd 
              : styles.buttonNotSelect
            }
            onClick={()=>{
              setFilter({...filter, digitalMarkting: !filter.digitalMarkting})
            }}
          >
            Marketing Digital
          </Button>
          <Button
            variant='outlined'
            className={
              filter.leadGeneration ? styles.buttonSelectd 
              : styles.buttonNotSelect
            }
            onClick={()=>{
              setFilter({...filter, leadGeneration: !filter.leadGeneration})
            }}
          >
            Geração de Leads
          </Button>
          <Button
            variant='outlined'
            className={
              filter.paidMedia ? styles.buttonSelectd 
              : styles.buttonNotSelect
            }
            onClick={()=>{
              setFilter({...filter, paidMedia: !filter.paidMedia})
            }}
          >
            Mídia Paga
          </Button>
        </Grid>
        <Grid item className={styles.gridItem2}>
          <Typography className={styles.textOrder}>
                Ordenar por
            </Typography>
          <Dropdown>
            <Dropdown.Button 
              light 
              className={styles.buttonDropdown}
            >
              {selectedValue}
            </Dropdown.Button>
            <Dropdown.Menu 
              aria-label="Static Actions"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selected}
              onSelectionChange={(item : any) =>{
                setSelected(item)
              }}
            >
             <Dropdown.Item key="Data de Publicação">Data de Publicação</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Grid>
      </Grid>
      <Divider className={styles.divider}/>
      
      <Grid className={styles.gridRenderPage}>
        {renderPage()}
      </Grid>

      <Divider className={styles.divider}/>
      <Box className={styles.boxPagination}>
        <Typography className={styles.textPage}>
            Página
        </Typography>
        <Pagination
          className={styles.pagination} 
          count={Math.round(data.length / limit)} 
          page={page} 
          onChange={handleChange}
          shape="rounded" 
          hidePrevButton 
          hideNextButton 
          color="primary"
          variant="outlined"
          renderItem={(item) => <PaginationItem className={styles.iconPagination} {...item} />}
        />
      </Box>
    </Box>
  );
}