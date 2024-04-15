import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NextLink from 'next/link';
import Copyright from '@/components/Copyright';
import Link from "@mui/material/Link";

export default function About() {
    return (
        <Container maxWidth="sm" sx={{marginTop: '15rem', marginBottom: '15rem'}}>
            <Box
                component="form"
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" component="h1" sx={{mb: 2}}>
                    Resources
                </Typography>
                <Link href="https://avalanche.org/avalanche-tutorial/" color="secondary" component={NextLink}>
                    Avalanche Tutorial
                </Link>
                <Link href="https://avalanche.org/avalanche-tutorial/get-the-gear.php" color="secondary"
                      component={NextLink}>
                    Avalanche Gear
                </Link>
                <Link href="https://vimeo.com/144545554" color="secondary" component={NextLink}>
                    Know before you go
                </Link>
                <Link href="https://www.latlong.net/" color="secondary" component={NextLink}>
                    Find your latitude and longitude
                </Link>
            </Box>
            <Copyright/>
        </Container>
    );
}
