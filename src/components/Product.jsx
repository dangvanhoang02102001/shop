import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { NavLink } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';


import { cartActions } from '../store/cart-slice';

const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct()
    }, [id])

    const handleAddToCart = () => {
        dispatch(cartActions.addItemToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          description: product.description
        }))
      }

    const Loading = () => {
        return (
            <>
                <div className='col-md-6'>
                    <Skeleton height={400}/>
                </div>
                <div className='col-md-6' style={{lineHeight: 2}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={150}/>
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px"/>
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn px-5 py-2" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-5">
                    {loading ? <Loading /> : <ShowProduct />} 
                </div>
            </div>
        </div>
    )
}

export default Product