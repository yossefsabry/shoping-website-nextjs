import "./About.css";
import Image from "next/image"
const About = () => {
    return (
        <div className="about">
            <h2>Welcome to Shopy - Your Ultimate Online Shopping Destination</h2>
            <h4>
                At Shopy, we believe in making your online shopping experience
                delightful, convenient, and secure. Our mission is to provide you with a
                wide range of high-quality products, a seamless shopping journey, and
                exceptional customer service.
            </h4>
            <p>
                Our Commitment At the heart of Shopy is a commitment to delivering value
                to our customers. We understand the thrill of discovering new products,
                finding great deals, and having them delivered right to your doorstep.
                Whether you<span>&apos;</span>re looking for the latest fashion trends, cutting-edge
                electronics, or everyday essentials, we<span>&apos;</span>ve got you covered.
            </p>
            <h3>What Sets Us Apart</h3>
            <p>
                {" "}
                1. Curated Selection: Our team tirelessly curates a diverse selection of
                products from trusted brands and emerging designers. We aim to bring you
                a collection that suits your style, preferences, and needs.
            </p>
            <p>
                2. User-Friendly Platform: Navigating Shopy is a breeze. Our
                user-friendly website and mobile app make it easy for you to find what
                you<span>&apos;</span>re looking for, explore new arrivals, and make secure transactions.
            </p>
            <p>
                3. Secure Shopping: We prioritize the security of your personal and
                financial information. Shopy employs the latest encryption technology to
                ensure that your online transactions are safe and secure.
            </p>
            <p>
                4. Customer Satisfaction: Your satisfaction is our priority. Our
                dedicated customer support team is here to assist you with any
                inquiries, feedback, or concerns you may have. We value your feedback
                and continuously strive to improve our services.
            </p>
            <h3>
                {" "}
                Explore, Shop, Enjoy! Embark on a shopping journey with Shopy and
                discover the joy of online shopping. Whether you<span>&apos;</span>re a trendsetter, a
                tech enthusiast, or someone looking for everyday essentials, Shopy is
                your one-stop destination.
            </h3>
            <h4>
                Thank you for choosing Shopy. We look forward to being part of your online
                shopping experience.
            </h4>
            <h2>Happy Shopping!</h2>
            <Image src={"/images/about.svg"} width={600} height={600} alt="about image" />
        </div>
    );
};
export default About;
