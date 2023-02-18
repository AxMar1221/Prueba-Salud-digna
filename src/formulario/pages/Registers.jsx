import  React, { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig/Firebase";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

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
                <th >Nombre</th>
                <th >Apellido Paterno</th>
                <th >Apellido Materno</th>
                <th >Genero</th>
                <th >Teléfono</th>
                <th >Email</th>
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

                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-end">
            <Link to="/form">
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
