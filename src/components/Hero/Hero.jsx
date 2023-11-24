import Btn from '@/elements/Btn/Btn'
import Image from "next/image"
import "./style.css"

const Hero = () => {
    return (
        <div className='hero' >
            <div className="container">
                <div className='hero-content'>
                    <h2>
                        YOUR BEST <br />
                        ONLINE SHOP <br />
                        DESTINATIONS
                    </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur suscipit minima dolores optio porro blanditiis alias aliquid sapiente consectetur ex iste deleniti unde expedita quas, ipsam tenetur vero molestias reprehenderit?</p>
                    <Btn name="Shop Now" />
                </div>
                <div className="image">
                    <Image src="/images/pngegg.png" width={400} height={400} alt='image hero' className='image-hero' />
                </div>
            </div>
        </div>
    )
}

export default Hero
