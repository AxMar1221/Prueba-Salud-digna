import { Edit } from "@mui/icons-material";
import { Button, Card, CardMedia, Grid } from "@mui/material";
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
      <Grid item xs={4} ms={4} md={4} xl={4} lg={4}>
        <Card>
          <CardMedia
            component="img"
            image={`https://www.animationconnection.com/assets/artwork/1627578800-575-5603-homer-simpson-with-bart-and-lisa-on-the-couch.jpg`}
            sx={{ borderRadius: '50%'}}
          />
        </Card>
      </Grid>
    </Grid>
  );

  return (
    <div className="container ">
      <div className="container mt-3">{gridContent}</div>

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

    </div>
  );
};
