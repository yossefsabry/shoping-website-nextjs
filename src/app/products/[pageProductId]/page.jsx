/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import styles from "./page.product.module.css"
import { BsCartCheckFill } from "react-icons/bs";
import { BsClipboard2Heart } from "react-icons/bs";
import { BsTicketPerforated } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";


async function getData(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export async function generateMetadata({ params }) {
    const id = params.id

    const product = await getData(params.pageProductId)
    return {
        title: product.title,
        description: product.description
    }
}
const page = async ({ params }) => {
    const product = await getData(params.pageProductId)
    // console.log(product) show product
    return (
        <div className={styles.product}>
            <div className="container">
                <div className={styles.title_product}>
                    {product.title}
                </div>
                <div className={styles.main_image}>
                    <img src={product.thumbnail} alt="image-post" className={styles.image_main_img} />
                </div>
                <div className={styles.anotherImage}>
                    {product.images.map((img) => {
                        for (let x = 1; x <= product.images.length; x++) {
                            return <Image src={img} alt="image-post" width={100} height={100} key={x} />
                        }

                    })}
                </div>
                <div className={styles.content_text}>
                    <div className="price">
                        price : {product.price} <BsCurrencyDollar />
                    </div>
                    <div className="rate">
                        rate: {product.rating} <BsTicketPerforated />
                    </div>
                    <div className="category">
                        category: {product.category} <BsClipboard2Heart />
                    </div>
                    <div className="stock">
                        stock: {product.stock} <BsCartCheckFill />
                    </div>
                </div>
                <div className={styles.description}>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum a officiis ex voluptatem neque autem temporibus facere magni veritatis maxime at possimus fugiat fugit aut ipsam, doloremque sunt! Eaque, voluptates praesentium aut error molestias, dicta officia cupiditate pariatur quidem itaque numquam eum! Ullam itaque tempora, officia ducimus excepturi cupiditate veniam voluptates harum. Facilis autem eos dicta magnam enim voluptates odit provident suscipit assumenda harum! Ipsam quibusdam suscipit, excepturi aliquam doloribus eligendi libero exercitationem, culpa repellendus, perspiciatis eos dicta! Culpa obcaecati quasi placeat vero magni expedita laudantium temporibus aspernatur itaque, neque, fugit recusandae assumenda nisi. Tempora vero dolorem voluptatibus iste ut.
                    </div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, animi sapiente! Maxime amet nam ipsam quos quasi quas nobis beatae esse consectetur! Hic labore modi id non magnam ipsum libero. Recusandae illo vitae accusamus at rem iure enim odio minima mollitia blanditiis? Excepturi quibusdam porro harum maiores commodi quidem odit architecto, atque perspiciatis sed consequuntur vel unde ipsa nulla placeat aut reprehenderit aspernatur magnam rerum tenetur nostrum quo. Dolore sed quidem harum dolor iste nostrum laboriosam quasi magni eligendi, asperiores temporibus earum sint omnis possimus quibusdam. Voluptatem repellendus voluptatum recusandae tempore, quasi magnam dolorum hic ducimus atque, explicabo commodi impedit.</div>
                </div>
            </div>
        </div>
    )
}

export default page
