import React, { useContext } from 'react'
import { cartContext } from '../context/cart-context'
import "./item.css"

const Item = ({item}) => {
    const {cartData,addCartData} = useContext(cartContext)
    return <div className='container'>
        <section className='items'>
            <img src={item.image} alt='image-image' />
            <article>{item.title}</article>
            <article>{item.description}</article>
            <section>
                <article>{item.price}</article>
                <button onClick={()=>{addCartData(item)}} className='btn'>Add to Cart</button>
            </section>
        </section>
    </div>
}

export default Item
