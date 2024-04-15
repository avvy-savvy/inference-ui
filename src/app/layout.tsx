import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "@/theme";

export const metadata = {
    title: 'Avvy-Savvy',
    description: 'For snow-sport enthusiasts',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en"><ThemeProvider theme={theme}>
            <CssBaseline/>
            <body>{children}</body>
        </ThemeProvider>
        </html>
    )
}
