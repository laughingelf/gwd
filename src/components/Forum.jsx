import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const CrappyLanindgPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div style={{
        backgroundColor: '#E0E0E0',
        fontFamily: 'Verdana, Arial, sans-serif',
        padding: '20px'
      }}>
        <table width="80%" align="center" cellPadding="10" cellSpacing="0" border="1" style={{
          backgroundColor: '#FFFFFF',
          borderColor: '#000080',
          borderCollapse: 'collapse'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#000080', color: '#FFFFFF' }}>
              <th colSpan="2" style={{ textAlign: 'left', fontSize: '24px', padding: '10px' }}>
                GhostStack Designs — Affordable Web Design for Small Business
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2" style={{ backgroundColor: '#F8F8F8', textAlign: 'center' }}>
                <img src="/img/GhostStack360.png" alt="GhostStack Logo" style={{ maxWidth: '300px', margin: '10px auto' }} />
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ backgroundColor: '#E0E0E0', padding: '10px' }}>
                <h2 style={{ color: 'black', borderBottom: '2px solid #000080' }}>Custom Coded, Custom Designs</h2>
                <h1 style={{ color: 'black', fontSize: '28px', margin: '10px 0' }}>Affordable Web Design for Small Business</h1>
                <p style={{ fontSize: '16px', color: 'black' }}>
                  We don’t use WordPress or page builders — every site is custom-coded for speed, performance, and results. Plans start at $175/month.
                </p>
                <div style={{ marginTop: '10px' }}>
                  <Link to="/contact" style={{ color: '#0000CC', textDecoration: 'underline', marginRight: '20px' }}>Get Started</Link>
                  <Link to="/about" style={{ color: '#0000CC', textDecoration: 'underline' }}>About Us</Link>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ backgroundColor: '#FFFFFF', verticalAlign: 'top', padding: '10px' }}>
                <h3 style={{ color: '#000080', borderBottom: '1px solid #000080' }}>What We Do</h3>
                <p>
                  At GhostStack Designs, we focus on building high-performance, custom-coded websites for small businesses across the U.S.
                  Our goal is to help local companies stay competitive in a world that's shifting more and more toward online shopping.
                  Every site we create is hand-coded for speed, SEO, and long-term success — no page builders, no shortcuts.
                </p>
              </td>
              <td style={{ backgroundColor: '#FFFFFF', verticalAlign: 'top', padding: '10px' }}>
                <h3 style={{ color: '#000080', borderBottom: '1px solid #000080' }}>Services</h3>
                <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                  <li>Fully Responsive Sites</li>
                  <li>Optimized Page Speed</li>
                  <li>Based in the U.S.</li>
                  <li>Custom Coded — No Templates</li>
                  <li>Affordable Plans</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ backgroundColor: '#F8F8F8', textAlign: 'center', padding: '15px' }}>
                <Link to="/contact" style={{
                  backgroundColor: '#000080',
                  color: '#FFFFFF',
                  padding: '10px 20px',
                  textDecoration: 'none',
                  borderRadius: '5px'
                }}>
                  Call Us Today
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ backgroundColor: '#E0E0E0', textAlign: 'center', padding: '10px', fontSize: '14px', color: '#555555' }}>
                &copy; 2025 GhostStack Designs. All rights reserved.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default CrappyLanindgPage;
