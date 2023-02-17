import {
  Box,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Button from '@mui/material/Button';
import { useState } from "react";

const genreData = [
  {
    id: 1,
    desc: 'Mujer'
  },
  {
    id: 2,
    desc: 'Hombre'
  },
]


export const Forms = () => {

const [name, setName] = useState();
const [lastName, setLastName] = useState();
const [secondLastName, setSecondLastName] = useState();
const [Data, setGenre] = useState();
const [phone, setPhone] = useState();
const [isPhoneValid, setIsPhoneValid] = useState();
const [email, setEmail] = useState();

function validatePhone (event) {
  const val = event.target.value;

  let count = 0;

  for (let i = 0; i < val.length; i++)
    if (val.charAt(i) in [0,1,2,3,4,5,6,7,8,9])
        count++

  let isValid = (count === 10) ? true : false;
  setIsPhoneValid(isValid)

  setPhone(val);
}

const handleSubmit = (name, lastName, secondLastName, Data, phone, email) => {
  console.log(name, lastName, secondLastName, Data, phone, email)
  alert(`Datos del formulario:, ${name}, ${lastName}, ${secondLastName}, ${Data}, ${phone}, ${email}`)
}

return (
  <form>
      <Box my={2}>
        <Card>
          <CardContent>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  required
                  label="Nombre"
                  type="text"
                  name="firstname"
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  color="success"
                  helperText="Campo obligatorio"
                  onChange={(ev)=>setName(ev.target.value)}
                />

                <TextField
                  required
                  label="Apellido paterno"
                  type="text"
                  name="lastname"
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  color="success"
                  helperText="Campo obligatorio"
                  onChange={(ev)=>setLastName(ev.target.value)}
                />

                <TextField
                  required
                  label="Apellido materno"
                  type="text"
                  name="lastname"
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  color="success"
                  helperText="Campo obligatorio"
                  onChange={(ev)=>setSecondLastName(ev.target.value)}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <FormControl sx={{ width: "100%" }} required  >
                  <InputLabel id="demo-label" color="success">
                    Genero
                  </InputLabel>
                  <Select name="rol" fullWidth label="Genero" color="success" onChange={(ev)=>setGenre(ev.target.value)} >
                    <MenuItem></MenuItem>
                    { genreData && genreData.map((d, i) => (
                      <MenuItem key={d.id} value={d.desc}>{d.desc}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  required
                  error={phone && !isPhoneValid}
                  label="Telefono"
                  type="number"
                  name="telefono"
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  color="success"
                  helperText="Campo obligatorio"
                  onChange={validatePhone}
                />

                <TextField
                  required
                  label="Correo Electronico"
                  type="email"
                  name="lastname"
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  color="success"
                  helperText="Campo obligatorio"
                  onChange={(ev)=>setEmail(ev.target.value)}
                />
                  <Box sx={{ "& > button": { m: 1 } }}>
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      type="submit"
                      onClick={() => handleSubmit(name, lastName, secondLastName, Data, phone, email)}
                      // disabled={!isPhoneValid}
                    >
                      Enviar
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
  </form>
)
}
