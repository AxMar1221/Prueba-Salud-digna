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
  
  const dataForm = [
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

  const [loading, setLoading] = useState(false);

  return (
    <div>
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
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <FormControl sx={{ width: "100%" }} >
                    <InputLabel id="demo-label" color="success">
                      Genero
                    </InputLabel>
                    <Select name="rol" fullWidth label="Genero" color="success" >
                      <MenuItem></MenuItem>
                      { dataForm && dataForm.map((d, i) => (
                        <MenuItem key={d.id} value={d.id}>{d.desc}</MenuItem>
                      ))}
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
                    <Box sx={{ "& > button": { m: 1 } }}>
                      <LoadingButton
                        size="small"
                        loading={loading}
                        variant="contained"
                        color="success"
                        disable
                      >
                        Enviar
                      </LoadingButton>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
    </div>
  )
}
