import styled from 'styled-components';
import { Header, AppNameComponent, ButtonLogout } from '../components/Header';
import * as React from 'react';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardMedia, ThemeProvider } from '@mui/material';
import theme from '../themes/theme';

import Grid from '@mui/material/Grid'

import { useLocation } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';



const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecipeDetails = () => {
    const location = useLocation();
    const recipe = location.state.recipe;
    const thumb = location.state.thumb;
    const navigate = useNavigate();

    const onLogout = async () => {
        try {
          await signOut(auth);
          navigate("/");
        } catch (err) {
          console.log(err);
        }
    };

    return (
        <>
            <Container>
                <Header>
                    <AppNameComponent>Resep Nusantara</AppNameComponent>
                    <div>
                        <ButtonLogout onClick={onLogout}>Logout</ButtonLogout>
                    </div>
                </Header>
                <ThemeProvider theme={theme}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            mt: 5
                        }}>

                        <h3 style={{ marginLeft: '40px', marginBottom: '-20px' }}>{recipe.title}</h3>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'start',
                        }}>
                            <Card id={recipe.title} sx={{ display: 'flex', width: 'auto', margin: 5 }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 'auto', height: 'auto' }}
                                    image={thumb}
                                    alt={thumb}
                                />
                                {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">
                                        {recipe.title}
                                    </Typography>
                                    <Box sx={{ flexGrow: 1 }} style={{marginTop: '20px'}}>
                                        <Grid container spacing={0}>
                                            <Grid item xs={4}>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    Duration
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    {recipe.times}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    Serving
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    {recipe.servings}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    Dificult
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    {recipe.dificulty}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </Box> */}
                            </Card>
                        </Box>
                        <h5 style={{ marginLeft: '40px', marginTop: '-20px' }}>Author : {recipe.author.user}, {recipe.author.datePublished}</h5>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'start',
                            marginLeft: 5
                        }}>
                            <h3>Bahan Bahan</h3>
                            <Grid container spacing={0}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {
                                            recipe.ingredient.map(el => (
                                                <ul key={Math.random().toString()}> - {el}</ul>
                                            ))
                                        }
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'start',
                            marginLeft: 5
                        }}>
                            <h3>Step</h3>
                            <Grid container spacing={0}>
                                <Grid item xs={10}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {
                                            recipe.step.map(el => (
                                                <ul key={Math.random().toString()}>{el}</ul>
                                            ))
                                        }
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </ThemeProvider>
                <Footer />
            </Container>
        </>
    );
}


export default RecipeDetails;
