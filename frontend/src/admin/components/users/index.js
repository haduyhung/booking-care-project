import React, { useState, useEffect, useCallback } from "react";
import { DeleteForever, Edit } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Modal,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import UserApi from "../../../apis/UserApi";
import RegisterApi from "../../../apis/Register";

export default function Users() {
  const [users, setUsers] = useState();
  const [changeId, setChangeId] = useState();
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [middleName, setMiddleName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const [role, setRole] = useState();
  const [birthday, setBirthday] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [clinicId, setClinicId] = useState();
  const [specialtyId, setSpecialtyId] = useState();

  const handleClose = () => setModal(false);

  const GetUser = useCallback(async () => {
    try {
      const response = await UserApi.getAll();
      setUsers(response.data.data);
    } catch (error) {
      console.error(error.response);
    }
  }, []);

  useEffect(() => {
    GetUser();
  }, [GetUser]);

  const handleDelete = (id) => {
    UserApi.deleteUser(id);

    setTimeout(() => {
      GetUser();
    }, 500);
  };

  return (
    <Stack>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Full Name</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Role</TableCell>
              <TableCell align="left">Birthday</TableCell>
              <TableCell align="left">Address</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              {/* <TableCell align="left">ClinicId</TableCell>
              <TableCell align="left">SpecialtyId</TableCell> */}
              <TableCell align="left">Edit</TableCell>
              <TableCell align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left" component="th">
                  {user.email}
                </TableCell>
                <TableCell align="left">
                  {user.firstName} {user.middleName} {user.lastName}
                </TableCell>
                <TableCell align="left">{user.gender}</TableCell>
                <TableCell align="left">{user.role}</TableCell>
                <TableCell align="left">{user.birthday}</TableCell>
                <TableCell align="left">{user.address}</TableCell>
                <TableCell align="left">{user.phoneNumber}</TableCell>
                {/* <TableCell align="left">{user.clinicId}</TableCell>
                <TableCell align="left">{user.specialtyId}</TableCell> */}
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
                      setChangeId(user.id);
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
                    onClick={() => handleDelete(user.id)}
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
            transform: "translate(-50%, -40%)",
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
              label="Email"
              type="email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Stack direction="row" spacing={2}>
              <TextField
                flex={1}
                label="First Name"
                variant="outlined"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                flex={1}
                label="Middle Name"
                variant="outlined"
                onChange={(e) => setMiddleName(e.target.value)}
              />
              <TextField
                flex={1}
                label="Last Name"
                variant="outlined"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Stack>
            <TextField
              flex={1}
              label="Gender"
              variant="outlined"
              onChange={(e) => setGender(e.target.value)}
            />
            <TextField
              flex={1}
              label="Role"
              variant="outlined"
              onChange={(e) => setRole(e.target.value)}
            />
            <TextField
              flex={1}
              label="Birthday"
              variant="outlined"
              onChange={(e) => setBirthday(e.target.value)}
            />
            <TextField
              flex={1}
              label="Address"
              variant="outlined"
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
              flex={1}
              label="PhoneNumbe"
              variant="outlined"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              flex={1}
              label="Clinic Id"
              variant="outlined"
              onChange={(e) => setClinicId(e.target.value)}
            />
            <TextField
              flex={1}
              label="Specialty Id"
              variant="outlined"
              onChange={(e) => setSpecialtyId(e.target.value)}
            />

            <Button
              variant="contained"
              onClick={() => {
                UserApi.update(changeId, {
                  email,
                  firstName,
                  middleName,
                  lastName,
                  gender,
                  role,
                  birthday,
                  address,
                  phoneNumber,
                  clinicId,
                  specialtyId,
                });
                GetUser();
                setModal(false);
              }}
            >
              Update User
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  );
}
