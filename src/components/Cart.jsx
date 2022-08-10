import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
    const cartList = useSelector(state => state.cart.items)
    console.log(cartList)

    const EmptyCart = () => {
        return (
            <div className='px-4 my-5 bg-light rounded-3 py-5'>
                <div className='container py-4'>
                    <div className='row'>
                        <h3>Your cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h2 className='text-center' style={{marginTop: '28px', color: 'rgb(187, 68, 68)'}}>Ur cart shopping</h2>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0}}>
                {cartList.length === 0 && <EmptyCart />}
                {cartList.map((item) => 
                    <CartItem
                        key={item.id}
                        item={{ 
                            id: item.id,
                            title: item.name, 
                            image: item.image,
                            qty: item.qty, 
                            total: item.totalPrice, 
                            price: item.price
                        }}
                    />  
                )}
      </ul>
        </div>
    )
}

export default Cart