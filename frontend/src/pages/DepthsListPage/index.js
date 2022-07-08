import { Box, List, ListItem, ListItemText, Link } from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import SpecialtyApi from "../../apis/SpecialtyApi";

const DepthsListPage = () => {
  let navigate = useNavigate();
  const [specialties, setSpecialties] = useState();

  const getSpecialty = useCallback(async () => {
    try {
      const response = await SpecialtyApi.getAll();
      setSpecialties(response.data.data);
      console.log('rs', response.data.data);
    } catch (error) {
      console.error(error.response);
    }
  }, []);

  useEffect(() => {
    getSpecialty();
  }, [getSpecialty]);

  const handleToDetail = (depth) => {
    navigate(`/ForPatientsPage/${depth.id}`, {data: depth});
  };

  return (
    <Box bgcolor="#F5F5F5">
      <Box bgcolor="#FFFFFF" sx={{ mt: 1, width: "100%" }}>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            p: 0,
            maxHeight: "650px",
          }}
        >
          {specialties?.map((depth) => (
            <ListItem
              key={depth.id}
              sx={{
                pt: 2,
                pb: 1,
                display: "flex",
                borderBottom: "1.5px #F1F1F1 solid",
                "&:first-child": {
                  pt: 0,
                },
                "&:last-child": {
                  borderBottom: "none",
                },
              }}
              component="Box"
            >
              <Link
                onClick={() => handleToDetail(depth)}
              >
                <img
                  src={depth.image}
                  alt={depth.name}
                  width={100}
                  height={50}
                />
              </Link>
              <Link
                onClick={() => handleToDetail(depth)}
                params={{ data: depth.id }}
                underline="none"
                color="#333333"
                sx={{
                  display: "flex",
                  alignSelf: "flex-start",
                  mx: 1.5,
                }}
              >
                <ListItemText>{depth.name}</ListItemText>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default DepthsListPage;
