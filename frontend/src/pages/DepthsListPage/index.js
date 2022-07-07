import {
  List,
  ListItem,
  ListItemText,
  Link,
  Box,
  CircularProgress,
} from "@mui/material";
import DepthsApi from "../../apis/DepthsApi";
import React, { useState, useEffect } from "react";
import * as image from "../../assets/index";

const DepthsListPage = () => {
  const [depths, setDepths] = useState([]);
  const [loading, setLoading] = useState(false);

  const callGetAllDepths = async () => {
    setLoading(true);
    try {
      const data = await DepthsApi.getAllDepths();
      setDepths(data.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    callGetAllDepths();
  }, []);

  return (
    <Box bgcolor="#FFFFFF" sx={{ mt: 1, width: "100%", minHeight: "100px" }}>
      {loading && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            pt: 3,
          }}
        >
          <CircularProgress />
        </Box>
      )}
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
        {depths.map((depth) => (
          <ListItem
            key={depth.id}
            sx={{
              pt: 2,
              pb: 1,
              display: "flex",
              borderBottom: "1.5px #F1F1F1 solid",
              "&:first-of-type": {
                pt: 0,
              },
              "&:last-child": {
                borderBottom: "none",
              },
            }}
            component="div"
          >
            <Link href="/">
              {!depth.image ? (
                <img
                  src={image.DepthsDefault}
                  alt={depth.name}
                  width={100}
                  height={50}
                />
              ) : (
                <img
                  src={depth.image}
                  alt={depth.name}
                  width={100}
                  height={50}
                />
              )}
            </Link>
            <Link
              href="/"
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
  );
};

export default DepthsListPage;
