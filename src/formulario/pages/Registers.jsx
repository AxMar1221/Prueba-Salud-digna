/* eslint-disable react-hooks/exhaustive-deps */
import  React, { useState, useEffect } from "react";

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig/Firebase";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import { Delete } from "@mui/icons-material";

export const Registers = () => {

  const [registers, setRegisters ] = useState( [] );
  const registersCollection = collection(db, "registros");

  const getRegisters = async () => {
    const data = await getDocs(registersCollection);
    // console.log(data.docs);

    setRegisters(
      data.docs.map((doc) => ({...doc.data(), id:doc.id}))
      )
      // console.log(registers);
  }
  const deleteRegister = async (id) => {
    const registerDoc = doc(db, "registros", id)
    await deleteDoc(registerDoc )
    getRegisters()
  }

  const confirmDelete = (id) => {
    Swal.fire({
      title: '¿Eliminar registro?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3885d5',
      confirmButtonText: 'si eliminar registro' 
    }).then( (result) => {
      if (result.isConfirmed ){
        deleteRegister(id)
        Swal.fire(
          'Deleted!',
          'Registro eliminado',
          'success'
        )
      }
    })
  }

  useEffect( () => {
    getRegisters()
  },[])

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">

          <table className="table table-sm table-striped table-hover">
            <thead className="table-dark">
              <tr className="text-center">
                <th className="text-start">Nombre</th>
                <th className="text-start">Apellido Paterno</th>
                <th className="text-start">Apellido Materno</th>
                <th >Genero</th>
                <th >Teléfono</th>
                <th >Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {registers.map( (registers) => (
                <tr key={registers.id}>
                  <td>{registers.name}</td>
                  <td>{registers.lastName}</td>
                  <td>{registers.secondLastName}</td>
                  <td className="text-center">{registers.gender}</td>
                  <td className="text-center">{registers.tel}</td>
                  <td>{registers.email}</td>
                  <td>
                    <Button
                      size="small"
                      variant="contained"
                      color="error"
                      startIcon={<Delete />}
                      onClick={() => {confirmDelete(registers.id)}}
                    >
                      Eliminar
                    </Button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-end">
            <Link to="/form" className="btn">
              <Button
                size="small"
                variant="contained"
                color="success"
              >
                Nuevo Registro
              </Button>
            </Link>

          </div>

        </div>
      </div>
    </div>
    </>
  )
}
