import { Button, CardContent, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <>
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="h5">Login</Typography>
            <hr />
            <Button variant="outlined" color="error" onClick={onLogin}>
              Login
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
};
