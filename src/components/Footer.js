import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';

const Footer = () => {
    return (
        <footer style={{marginTop: '30px'}}>
            <Box bgcolor="black">
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Box  style={{color:'white', justifyContent:'center', alignItems:'center', paddingBottom:'30px', fontWeight: 'bold', fontSize: '18px'}}>Agung Permana</Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;