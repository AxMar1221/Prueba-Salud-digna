import { Card, CardHeader, CardMedia, Grid } from "@mui/material"

export const Cards = () => {
    const gridContent = (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} ms={12} md={12} xl={12} lg={12}>
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
    <div>{gridContent}</div>
  )
}
