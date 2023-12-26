import React from "react";
import { Stack, Box } from "@mui/material";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import { Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <MainHeader />
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
      <MainFooter />
    </Stack>
  );
}

export default MainHeader;
