import Head from 'next/head';
import Navbar from './Navbar';
//import Footer from './Footer'; // Assuming you might want a footer later

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Kenza Lbasri | Cybersecurity Portfolio</title>
        <meta name="description" content="Kenza Lbasri's Cybersecurity Portfolio - Ethical Hacking, Penetration Testing, Network Security, Linux Systems, Vulnerability Research." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
