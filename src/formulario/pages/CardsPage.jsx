import { Edit } from "@mui/icons-material";
import { Button, Card, CardHeader, CardMedia, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const Cards = () => {
  const gridContent = (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={6} ms={6} md={6} xl={6} lg={6}>
        <Card>
          <CardHeader />
          <CardMedia
            component="img"
            image={`https://ms-f7-sites-01-cdn.azureedge.net/docs/stories/1599866283716437159-salud-digna-health-provider-azure-es-mexico/resources/52d0454c-e8dd-463f-9c83-89bd0d37cc33/1599867446852902552_1599867446852902552`}
          />
        </Card>
      </Grid>
    </Grid>
  );

  return (
    <div className="container ">
      <div className="text-center">
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
        <Link to="/register" className="btn">
          <Button
            size="small"
            variant="contained"
            color="success"
            startIcon={<Edit />}
          >
            Editar Registro
          </Button>
        </Link>
      </div>

      <div className="container mt-3">{gridContent}</div>
    </div>
  );
};
