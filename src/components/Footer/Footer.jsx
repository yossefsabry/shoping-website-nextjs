import Image from "next/image"
import "./style.css"

function Footer() {
    const data = new Date();
    const dataYear = data.getFullYear();
    return (
        <footer>
            <div className='container' style={{ display: 'flex', gap: "10px", alignItems: "center", justifyContent: "space-between" }}>
                <div className="copywrite">
                    @{dataYear} copywrite resave <a href="https://github.com/yossefsabry" style={{ textDecoration: "underLine", color: "#2d492d" }}>yossefsabry</a>
                </div>
                <div className="icons" style={{ display: 'flex', gap: "10px", alignItems: "center", justifyContent: "center" }}>
                    <Image src="/icons/twitter.png" width={20} height={20} alt="icon-image" className="icons-footer" />
                    <Image src="/icons/facebook.png" width={20} height={20} alt="icon-image" className="icons-footer" />
                    <Image src="/icons/youtube.png" width={20} height={20} alt="icon-image" className="icons-footer" />
                    <Image src="/icons/linkedin.png" width={20} height={20} alt="icon-image" className="icons-footer" />
                    <Image src="/icons/instagram.png" width={20} height={20} alt="icon-image" className="icons-footer" />
                </div>
            </div>
        </footer>
    );
}

export default Footer
