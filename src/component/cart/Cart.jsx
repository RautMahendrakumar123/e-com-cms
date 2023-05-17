import React, { useCallback, useContext, useRef } from 'react'
import { cartContext } from '../context/cart-context'
import useRazorpay from 'react-razorpay';

const Cart = () => {
  const { cartData } = useContext(cartContext);
  const total = useRef();
  total.current = 0;
  const RazorPay = useRazorpay();
  const razorPayDisplay = useCallback(async(total)=>{
    const options = {
      key:'rzp_test_wFWHTnkiLDeNAE',
      amount:total*100,
      currency:"INR",
      name:"my-project",
      description:"Gaming Transaction",
      handler:(res)=>{
        console.log(res)
      },
      prefill:{
        name:"Mahendrakumar Raut",
        email:"rautmahendrakumar2@gmail.com",
        contact:'9876543210'
      },
      notes:{
        address:"address"
      },
      theme:{
        color:"#3399cc"
      },
    }
    const rzp1 = new RazorPay(options);
    rzp1.open();
  },[RazorPay])
  return (
    <>
      <section>
        <section>
         {
          cartData.map((cartItem,key)=>{
            return <article>
              <img src='' alt='' />
              <article>{cartItem.title}</article>
              <article>{cartItem.price}</article>
              
              <button>Remove from Cart</button>
              </article>
          })
         }
        </section>
        <section>
          {
            cartData.map((cartitem,key)=>{
              total.current = total.current + cartitem.price
              return <article key={key}>
                <span>{cartitem.title}</span>
                <span>{cartitem.price}</span>
                {/* <article>total:{total.current.price}</article> */}
              </article>
            })
          }
          <article>Total:{total.current}</article>
          <button onClick={()=>{
            razorPayDisplay(total.current)
          }}>Checkout</button>
        </section>
      </section>

    </>
  )
}

export default Cart
