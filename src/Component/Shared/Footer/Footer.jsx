
const Footer = () => {
    return (
        <footer className="footer p-10 border-t-4">
            <nav>
                <header className="footer-title">Services</header> 
                <p className="link link-hover">Branding</p>
                <p className="link link-hover">Design</p>
                <p className="link link-hover">Marketing</p>
                <p className="link link-hover">Advertisement</p>
            </nav> 
            <nav>
                <header className="footer-title">Company</header> 
                <p className="link link-hover">About us</p>
                <p className="link link-hover">Contact</p>
                <p className="link link-hover">Jobs</p>
                <p className="link link-hover">Press kit</p>
            </nav> 
            <nav>
                <header className="footer-title">Legal</header> 
                <p className="link link-hover">Terms of use</p>
                <p className="link link-hover">Privacy policy</p>
                <p className="link link-hover">Cookie policy</p>
            </nav>
        </footer>
    );
};

export default Footer;