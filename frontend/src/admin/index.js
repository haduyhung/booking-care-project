import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import Users from "./components/users";
import Auth from "./components/auth";
import Clinic from "./components/Clinic";
import Specialty from "./components/Specialty";

function Admin() {
  const [table, setTable] = useState();
  const [showedTable, setShowedTable] = useState();

  return (
    <Stack minHeight={600} p={5} bgcolor="#fbfbfb" direction="row" spacing={5}>
      <Stack
        p={3}
        spacing={2}
        sx={{
          flex: 1,
          bgcolor: "white",
          border: "3px solid #bcbfc3",
          borderRadius: 1,
        }}
      >
        <Button
          variant={showedTable === "user" ? "contained" : "outlined"}
          onClick={() => {
            setTable(<Users />);
            setShowedTable("user");
          }}
        >
          Users
        </Button>
        {/* <Button
          variant={showedTable === "auth" ? "contained" : "outlined"}
          onClick={() => {
            setTable(<Auth />);
            setShowedTable("auth");
          }}
        >
          Auth
        </Button> */}
        <Button
          variant={showedTable === "clinic" ? "contained" : "outlined"}
          onClick={() => {
            setTable(<Clinic />);
            setShowedTable("clinic");
          }}
        >
          Clinic
        </Button>
        <Button
          variant={showedTable === "specialty" ? "contained" : "outlined"}
          onClick={() => {
            setTable(<Specialty />);
            setShowedTable("specialty");
          }}
        >
          Specialty
        </Button>
      </Stack>
      <Stack
        sx={{
          flex: 5,
          bgcolor: "white",
          border: "3px solid #bcbfc3",
          borderRadius: 1,
        }}
      >
        {table}
      </Stack>
    </Stack>
  );
}

export default Admin;
