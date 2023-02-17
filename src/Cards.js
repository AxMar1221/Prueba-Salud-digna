import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material"

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
              <CardMedia
              component="img"
              image={`https://ms-f7-sites-01-cdn.azureedge.net/docs/stories/1599866283716437159-salud-digna-health-provider-azure-es-mexico/resources/52d0454c-e8dd-463f-9c83-89bd0d37cc33/1599867446852902552_1599867446852902552`}
              />
              <CardHeader />
    
              <CardContent>
                <Typography variant="h5" color="primary">
                  Formulario
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    );

  return (
    <div>{gridContent}</div>
  )
}
