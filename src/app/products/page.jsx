import Image from "next/image"
import Link from "next/link"
import "./products.page.css"

export const metadata = {
    title: 'Shopy - Products',
    description: 'For Online Shopping Shopy',
}

async function getData() {
    const res = await fetch('https://dummyjson.com/products')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}


const page = async () => {
    // starting get Data
    const data = await getData()
    const products = data.products
    const allData = products.map((product) => {
        return (
            <Link href={`products/${product.id}`} key={product.id}>
                <div className="posts">
                    <div className="image-container-post">
                        <Image src={product.thumbnail} alt="image-post" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ borderRadius: "20px" }} />
                    </div>
                    <div className="content-post">
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                    </div>
                </div>
            </Link>
        )
    })

    // Start Component
    return (
        <div className="container">
            <div className='posts-container'>
                {
                    allData
                }
            </div>
        </div>
    )
}

export default page
