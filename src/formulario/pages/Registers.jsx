/* eslint-disable no-undef */
import  React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { collection, getDocs, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig/Firebase"
import { Delete } from "@mui/icons-material";
import { Link, link } from "react-router-dom";

import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
import { async } from "@firebase/util";
// const MySwal = withReactContent(Swal);

export const Registers = () => {

  const [registers, setRegisters ] = useState( [] );

  const registersCollection = collection(db, "registros");

  const getRegisters = async () => {
    const data = await getDocs(registersCollection);
    console.log(data.docs);

    setRegisters(
      data.docs.map((doc) => ({...doc.data(), id:doc.id}))
      )
      console.log(registers);
  }

  const deleteRegister = async (id) => {
    const registerDoc = doc(db, "registers", id)
    await deleteDoc(registerDoc)
    getRegisters()
  }

  useEffect( () => {
    getRegisters()
  }, [])

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">

          <table className="table table-sm table-striped table-hover">
            <thead className="table-dark">
              <tr className="text-center">
                <th >Nombre</th>
                <th >Apellido Paterno</th>
                <th >Apellido Materno</th>
                <th >Genero</th>
                <th >Teléfono</th>
                <th >Email</th>
                <th ></th>
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
                  <td className="text-center">{registers.email}</td>
                  <td className="text-center">
                    <Button
                      startIcon={ <Delete />}
                      size="small"
                      variant="contained"
                      color="error"
                      onClick={() => {deleteRegister(registers.id)}}
                    >Eliminar</Button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
    </>
  )
}
