import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Container, Typography } from "@mui/material";
import { useUserStore } from "../stores/useUserStore";

export const LoginPage: React.FC = () => {
  const [inputUsername, setInputUsername] = useState("");
  const navigate = useNavigate();
  const setUsername = useUserStore((state) => state.setUsername);

  const handleLogin = () => {
    if (inputUsername.trim()) {
      setUsername(inputUsername);
      navigate("/home");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputUsername(e.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography component="h1" variant="h5">
          ログイン
        </Typography>
        <TextField
          fullWidth
          label="ユーザー名"
          value={inputUsername}
          onChange={handleChange}
        />
        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          disabled={!inputUsername.trim()}
        >
          ログイン
        </Button>
      </Box>
    </Container>
  );
};
