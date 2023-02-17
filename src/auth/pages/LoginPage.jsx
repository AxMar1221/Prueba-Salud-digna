import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"


export const LoginPage = () => {

  const navigate = useNavigate();
  const onLogin = () => {
    navigate('/', {
      replace: true
    })
  }

  return (
    <div className="container mt-3">
      <h1>Login</h1>
      <hr />

      <Button
        variant="outlined"
        color="error"
        onClick={ onLogin }
      >
        Login
      </Button>
    </div>
  )
}
