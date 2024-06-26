import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import Copyright from '@/components/Copyright';

export default function Home() {
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
                    Avvy-Savvy
                </Typography>
                <Link href="/plan-trip" color="secondary" component={NextLink}>
                    Planning A Trip
                </Link>
                <Link href="/arrival-info" color="secondary" component={NextLink}>
                    Know Arrival Details
                </Link>
                <Link href="/spot-details" color="secondary" component={NextLink}>
                    Get Spot Details
                </Link>
                <Link href="/resources" color="secondary" component={NextLink}>
                    View Resources
                </Link>
            </Box>
            <Copyright/>
        </Container>
    );
}
