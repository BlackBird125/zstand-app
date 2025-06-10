import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Container, Typography } from "@mui/material";
import { useUserStore } from "../stores/useUserStore";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const username = useUserStore((state) => state.username);
  const reset = useUserStore((state) => state.reset);

  const handleLogout = () => {
    reset();
    navigate("/login");
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
          ようこそ {username} さん！
        </Typography>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={handleLogout}
        >
          ログアウト
        </Button>
      </Box>
    </Container>
  );
};
