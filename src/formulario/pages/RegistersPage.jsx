/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig/Firebase";
import {
  Button,
  FormControl,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import { Delete, Edit, Home } from "@mui/icons-material";

export const Registers = () => {
  const [registers, setRegisters] = useState([]);
  const [tableRegisters, setTableRegisters] = useState([]);
  const registersCollection = collection(db, "registros");

  const getRegisters = async () => {
    const data = await getDocs(registersCollection);
    // console.log(data.docs);

    setRegisters(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setTableRegisters(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // console.log(registers);
  };

  const deleteRegister = async (id) => {
    const registerDoc = doc(db, "registros", id);
    await deleteDoc(registerDoc);
    getRegisters();
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: "¿Eliminar registro?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3885d5",
      confirmButtonText: "si eliminar registro",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRegister(id);
        Swal.fire("Deleted!", "Registro eliminado", "success");
      }
    });
  };

    // ---!!!BUSQUEDA!!!---
    const [search, setSearch] = useState('');

    const searchTerm = (e) => {
      setSearch(e.target.vale)
      console.log(e.target.value)
      filter((e.target.value))
    }

    const filter = (searchTerm) => {
      let searchResult = tableRegisters.filter(( elem ) => {
        if ( elem.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
        || elem.gender.toString().toLowerCase().includes(searchTerm.toLowerCase())
        ){
          return elem;
        }
      });
      setRegisters(searchResult);
    }
 

  useEffect(() => {
    getRegisters();
  }, []);

  const tab = <>&nbsp;&nbsp;</>;

  return (
    <>
      <Grid container>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <FormControl className="d-flex mb-2 col-4" role="search">
            <TextField
              label="Buscar registro"
              type="text"
              name="search"
              margin="dense"
              value={search}
              variant="outlined"
              color="warning"
              onChange={searchTerm}
            />
          </FormControl>
        </Grid>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Nombre</TableCell>
                <TableCell align="left">Apellido paterno</TableCell>
                <TableCell align="left">Apellido materno</TableCell>
                <TableCell align="center">Genero</TableCell>
                <TableCell align="center">Telefono</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center" colSpan={2}>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {registers.map((registers) => (
                <TableRow
                  key={registers.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{registers.name}</TableCell>
                  <TableCell align="left">{registers.lastName}</TableCell>
                  <TableCell align="left">{registers.secondLastName}</TableCell>
                  <TableCell align="center">{registers.gender}</TableCell>
                  <TableCell align="center">{registers.tel}</TableCell>
                  <TableCell align="left">{registers.email}</TableCell>
                  <TableCell>
                    <Link to={`/edit/${registers.id}`} className="btn">
                      <Button
                        size="small"
                        variant="contained"
                        color="success"
                        startIcon={<Edit />}
                      >
                        {tab}Editar{tab}
                      </Button>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link className="btn">
                      <Button
                        size="small"
                        variant="contained"
                        color="error"
                        startIcon={<Delete />}
                        onClick={() => {
                          confirmDelete(registers.id);
                        }}
                      >
                        Eliminar
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Link to="/form" className="btn">
            <Button
              size="small"
              variant="contained"
              color="success"
              startIcon={<Edit />}
            >
              Nuevo Registro
            </Button>
          </Link>
          <Link to="/cards" className="btn">
            <Button
              size="small"
              variant="contained"
              color="primary"
              startIcon={<Home />}
            >
              Home
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
