import React from "react";
import Header from "../components/Header";
import "../styles/globals.css";

export const metadata = {
  title: "SnapShield",
  description:
    "SnapShield – The Ultimate Secure Sandboxing & Threat Protection Platform",
  keywords:
    "snapshield, SnapShield, SNAPSHIELD, SNAP SHIELD, snap shield, snapshield security, online security, internet safety, website security, safe browsing, secure web browsing, malware protection, phishing protection, cyber threat detection, sandbox environment, test websites safely, safe app testing, cybersecurity platform, web security analysis, secure sandboxing, cyber risk assessment, online threat detection, digital security, cybersecurity solutions, website safety check, malware scanning, phishing detection, online security platform, safe internet usage, secure online experience, website vulnerability check, cyber protection, secure browsing experience, cyber threat prevention, sandbox security platform, online risk analysis, internet protection, cybersecurity awareness, web safety tools, website security scanner, detect phishing attacks, protect from malware, cybersecurity best practices, digital safety guide, online privacy protection, secure web testing, malware-free browsing, phishing alert system",
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="layout, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="30 days" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" sizes="any" href="/assests/loogos/newlogo.jpg" />
        <link rel="apple-touch-icon" sizes="any" href="/assests/loogos/newlogo.jpg" />
      </head>
      <body>
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
