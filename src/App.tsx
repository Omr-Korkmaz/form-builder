import "./App.css";
import { FormBuilder } from "./components/FormBuilder.tsx";
import { FormView } from "./components/FormView.tsx";
import { Box, Grid, Paper, AppBar, Typography } from "@mui/material";
import { styled } from "@mui/system";

function App() {
  const StyledFormViewPaper = styled(Paper)(({ theme }) => ({
    padding: "16px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "30px",
    },
  }));

  const StyledFormBuilderPaper = styled(Paper)(({ theme }) => ({
    padding: "16px",
    [theme.breakpoints.down("md")]: {
      marginRight: "30px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#f1f2f3", minHeight: "100vh" }}>
      <AppBar
        position="static"
        color="secondary"
        sx={{ padding: "16px", marginBottom: "30px" }}
      >
        <Typography
          variant="h5"
          color="inherit"
          component="div"
          sx={{ textAlign: "left" }}
        >
          DigiExam Homework Task
        </Typography>
      </AppBar>

      <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs={12} md={5}>
          <StyledFormBuilderPaper
            variant="outlined"
            style={{ marginLeft: "30px", padding: "16px", height: "100%" }}
          >
            <FormBuilder />
          </StyledFormBuilderPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledFormViewPaper
            style={{ marginRight: "30px", padding: "16px", height: "100%" }}
            variant="outlined"
          >
            <FormView />
          </StyledFormViewPaper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
