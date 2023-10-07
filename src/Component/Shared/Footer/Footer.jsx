
const Footer = () => {
    return (
        <footer className="footer px-[5%] py-10 bg-gray-900 text-white">
            <nav>
                <header className="footer-title">Services</header> 
                <p>Branding</p>
                <p>Design</p>
                <p>Marketing</p>
                <p>Advertisement</p>
            </nav> 
            <nav>
                <header className="footer-title">Company</header> 
                <p>About us</p>
                <p>Contact</p>
                <p>Jobs</p>
                <p>Press kit</p>
            </nav> 
            <nav>
                <header className="footer-title">Legal</header> 
                <p>Terms of use</p>
                <p>Privacy policy</p>
                <p>Cookie policy</p>
            </nav>
        </footer>
    );
};

export default Footer;