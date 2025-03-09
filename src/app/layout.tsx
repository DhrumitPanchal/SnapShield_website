import React from 'react';
import Header from '../components/Header';
import '../styles/globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html>
            <head>
                <title>Next Website</title>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                <Header />
                <main className="container mx-auto px-4 py-8">{children}</main>
            </body>
        </html>
    );
};

export default Layout;