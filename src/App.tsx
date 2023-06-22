import './App.css'
import {FormBuilder} from "./components/FormBuilder.tsx";
import {FormView} from "./components/FormView.tsx";
import {Box, Grid} from "@mui/material";
// import styled from '@emotion/styled'
import { styled } from '@mui/system';



function App() {


  const FormContainer = styled(Box)`
  display: flex;
  /* width: 100%; */
  max-width: 400px;
  margin-bottom: 2px;

  /* background-color: #f9f9f9; */
  border-radius: 4px;
  border: 1px solid gray;
  padding: 20px;
  height: '100vh';
  align-items: 'center';
            justify-content: 'center';


  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

  
    return (
  

      <Grid container spacing={12} alignItems="flex-start">
      <Grid item xs={12} sm={6}>
        <FormContainer>
          <FormBuilder />
        </FormContainer>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormContainer>
          <FormView />
        </FormContainer>
      </Grid>
    </Grid>
    )
}

export default App
