"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
} from "@mui/material";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "Test123" && password === "password@2") {
      router.push("/characters");
    } else {
      setError("Credenciales incorrectas");
      setTimeout(() => {
        setError("");
      }, 2500);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ p: 4, mt: 18 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Iniciar sesión
        </Typography>

        <form onSubmit={handleLogin}>

          <TextField
            fullWidth
            label="Usuario"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <Typography color="error" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            type="submit"
          >
            Ingresar
          </Button>
        </form>

      </Paper>
    </Container>
  );
}
