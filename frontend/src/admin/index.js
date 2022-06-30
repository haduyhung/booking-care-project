import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import Users from "./components/users";
import Auth from "./components/auth";

function Admin() {
  const [table, setTable] = useState();

  return (
    <div>
      <Stack p={5} direction="row" spacing={5}>
        <Stack sx={{ height: 600, flex: 1, bgcolor: "blue" }}>
          <Button variant="primary" onClick={() => setTable(<Users />)}>
            Users
          </Button>
          <Button variant="primary" onClick={() => setTable(<Auth />)}>
            Auth
          </Button>
        </Stack>
        <Stack sx={{ height: 600, flex: 3, bgcolor: "red" }}>{table}</Stack>
      </Stack>
    </div>
  );
}

export default Admin;
