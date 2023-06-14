import './App.css'
import {FormBuilder} from "./components/FormBuilder.tsx";
import {FormView} from "./components/FormView.tsx";
import {Box, Grid} from "@mui/material";

function App() {
    return (
        <Grid container spacing={4} alignItems="flex-start">
        
            <Grid item xs={6}>
            <Box
        sx={{
          display: 'flex',
        //   width:'400px',
        //   height:'600px',
          p: 1,
          mb:2,
          bgcolor: 'background.paper',
          borderRadius: 1,
          border: '1px solid gray'
        }}
      >
                <FormBuilder/>
                </Box>
            </Grid>
            <Grid item xs={6}>
            <Box
        sx={{
          display: 'flex',
          width:'400px',
        //   height:'600px',
          p: 1,
          mb:2,
          bgcolor: 'background.paper',
          borderRadius: 1,
          border: '1px solid gray'
        }}
      >
                <FormView/>
                </Box>
            </Grid>
        </Grid>
    )
}

export default App
