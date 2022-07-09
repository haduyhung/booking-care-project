import React, { useState, useEffect, useCallback } from "react";
import { DeleteForever, Edit } from "@mui/icons-material";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Modal,
  TextField,
} from "@mui/material";
import SpecialtyApi from "../../../apis/SpecialtyApi";

export default function Specialty() {
  const [specialties, setSpecialties] = useState();
  const [modal, setModal] = useState(false);
  const [changeId, setChangeId] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const handleClose = () => setModal(false);

  const GetSpecialty = useCallback(async () => {
    try {
      const response = await SpecialtyApi.getAll();
      setSpecialties(response.data.data);
    } catch (error) {
      console.error(error.response);
    }
  }, []);

  useEffect(() => {
    GetSpecialty();
  }, [GetSpecialty]);

  const handleDelete = (id) => {
    SpecialtyApi.deleteSpecialty(id);
    setTimeout(() => {
      GetSpecialty();
    }, 500);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Edit</TableCell>
              <TableCell align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {specialties?.map((special) => (
              <TableRow
                key={special.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left" component="th">
                  {special.name}
                </TableCell>
                <TableCell align="left" component="th">
                  {special.description}
                </TableCell>
                <TableCell align="left">
                  <Stack
                    sx={{
                      bgcolor: "blue",
                      height: 36,
                      width: 36,
                      borderRadius: 1,
                      hover: {
                        opacity: 0.8,
                      },
                    }}
                    justifyContent="center"
                    alignItems="center"
                    onClick={() => {
                      setModal(true);
                      setChangeId(special.id);
                    }}
                  >
                    <Edit sx={{ color: "white" }} />
                  </Stack>
                </TableCell>
                <TableCell align="left">
                  <Stack
                    sx={{
                      bgcolor: "red",
                      height: 36,
                      width: 36,
                      borderRadius: 1,
                      hover: {
                        opacity: 0.8,
                      },
                    }}
                    justifyContent="center"
                    alignItems="center"
                    onClick={() => handleDelete(special.id)}
                  >
                    <DeleteForever sx={{ color: "white" }} />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        sx={{
          overflowY: "scroll",
          height: "100%",
        }}
        open={modal}
        onClose={handleClose}
      >
        <Stack
          p={5}
          justifyContent="center"
          alignItems="center"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            bgcolor: "white",
            border: "2px solid #333",
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
          }}
          spacing={5}
        >
          <Stack width="80%" py={2} spacing={2}>
            <TextField
              flex={1}
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              flex={1}
              label="Description"
              variant="outlined"
              onChange={(e) => setDescription(e.target.value)}
            />

            {!!changeId ? (
              <Button
                variant="contained"
                onClick={() => {
                  SpecialtyApi.updateSpecialty(changeId, {
                    name: name,
                    description: description,
                  });
                  setTimeout(() => {
                    GetSpecialty();
                  }, 500);
                  setChangeId();
                  setModal(false);
                }}
              >
                Update Specialty
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={() => {
                  SpecialtyApi.addNewSpecialty({
                    name: name,
                    description: description,
                  });
                  setTimeout(() => {
                    GetSpecialty();
                  }, 500);
                  setModal(false);
                }}
              >
                Add New Specialty
              </Button>
            )}
          </Stack>
        </Stack>
      </Modal>
      <Stack justifyContent="center">
        <Button
          sx={{ maxWidth: 200, m: 1 }}
          variant="contained"
          onClick={() => setModal(true)}
        >
          Add New Specialty
        </Button>
      </Stack>
    </>
  );
}
