/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig/Firebase";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Cancel, Send } from "@mui/icons-material";

const genreData = [
  { id: 1, desc: "Mujer" },
  { id: 2, desc: "Hombre" },
];

export const EditPage = () => {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [secondLastName, setSecondLastName] = useState();
  const [Data, setGenre] = useState();
  const [phone, setPhone] = useState();
  const [isPhoneValid, setIsPhoneValid] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  function validatePhone(event) {
    const val = event.target.value;
    let count = 0;
    for (let i = 0; i < val.length; i++)
      if (val.charAt(i) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) count++;
    let isValid = count === 10 ? true : false;
    setIsPhoneValid(isValid);
    setPhone(val);
  }

  // const handleSubmit = () => {
  // };

  const update = async (e) => {
    e.preventDefault();
    const register = doc(db, "registros", id);
    const data = {
      name: name,
      lastName: lastName,
      secondLastName: secondLastName,
      gender: Data,
      tel: phone,
      email: email,
    };
    await updateDoc(register, data);
    navigate("/register");
  };

  const getRegistersById = async (id) => {
    const register = await getDoc(doc(db, "registros", id));
    if (register.exists()) {
      setName(register.data().name);
      setLastName(register.data().lastName);
      setSecondLastName(register.data().secondLastName);
      setGenre(register.data().Data);
      setPhone(register.data().phone);
      setEmail(register.data().email);
    } else {
      console.log("Registro no existe");
    }
  };

  useEffect(() => {
    getRegistersById(id);
  }, []);

  return (
    <>
      <Typography align="center" variant="h4" color="primary">
        Editar registro
      </Typography>
      <form onSubmit={update}>
        <Box my={2}>
          <Card>
            <CardContent>
              <Grid container direction="row" spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    value={name}
                    type="text"
                    name="firstname"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="warning"
                    onChange={(ev) => setName(ev.target.value)}
                  />

                  <TextField
                    value={lastName}
                    type="text"
                    name="lastname"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="warning"
                    onChange={(ev) => setLastName(ev.target.value)}
                  />

                  <TextField
                    value={secondLastName}
                    type="text"
                    name="lastname"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="warning"
                    onChange={(ev) => setSecondLastName(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel id="demo-label" color="warning" required>
                      Genero
                    </InputLabel>
                    <Select
                      name="gender"
                      fullWidth
                      label="Genero"
                      color="warning"
                      onChange={(ev) => setGenre(ev.target.value)}
                    >
                      <MenuItem></MenuItem>
                      {genreData &&
                        genreData.map((d, i) => (
                          <MenuItem key={d.id} value={d.desc}>
                            {d.desc}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                      value={phone}
                      required
                      error={phone && !isPhoneValid}
                      type="number"
                      name="tel"
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      color="warning"
                      helperText="Campo obligatorio"
                      onChange={validatePhone}
                    />

                    <TextField
                      value={email}
                      type="email"
                      name="lastname"
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      color="warning"
                      onChange={(ev) => setEmail(ev.target.value)}
                    />
                    <Box sx={{ "& > button": { m: 1 } }}>
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={() => update()}
                        startIcon={<Send />}
                        disabled={!isPhoneValid}
                      >
                        Actualizar
                      </Button>
                      <Link to="/register" className="btn">
                        <Button
                          size="small"
                          variant="contained"
                          color="error"
                          startIcon={<Cancel />}
                        >
                          Cancelar
                        </Button>
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </form>
    </>
  );
};
