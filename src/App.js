// import { Cards } from "./Cards";
import "./App.css";
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
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {/* <Cards /> */}
        <Box my={2}>
          <Card>
            <CardContent>
              <Grid container direction="row" spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    error={false}
                    label="Nombre"
                    type="text"
                    name="firstname"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="success"
                    helperText="Campo obligatorio"
                  />

                  <TextField
                    error={false}
                    label="Apellido paterno"
                    type="text"
                    name="lastname"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="success"
                    helperText="Campo obligatorio"
                  />

                  <TextField
                    error={false}
                    label="Apellido materno"
                    type="text"
                    name="lastname"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="success"
                    helperText="Campo obligatorio"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <FormControl sx={{ width: "100%" }} helperText="Campo obligatorio">
                    <InputLabel id="demo-label" color="success" >
                      Genero
                    </InputLabel>
                    <Select name="rol" fullWidth label="Genero" color="success" >
                      <MenuItem>Mujer</MenuItem>
                      <MenuItem>Hombre</MenuItem>
                    </Select>
                  </FormControl>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    error={false}
                    label="Telefono"
                    type="number"
                    name="telefono"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="success"
                    helperText="Campo obligatorio"
                  />
                                    <TextField
                    error={false}
                    label="Correo Electronico"
                    type="email"
                    name="lastname"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="success"
                    helperText="Campo obligatorio"
                  />
                    {/* <Box sx={{ "& > button": { m: 1 } }}>
                      <LoadingButton
                        size="small"
                        loading={loading}
                        variant="outlined"
                        disable
                      ></LoadingButton>
                    </Box> */}
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </header>
    </div>
  );
}

export default App;
