import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import { useSession } from 'next-auth/react';
import Currency from 'react-currency-formatter';
import { selectTotal } from '../slices/cartSlice';
function Checkout() {
  const { items } = useSelector((state) => state.cart);
  const total = useSelector(selectTotal);
  console.log(total);
  const { status, data } = useSession();
  const onCLickHandler = () => {
    console.log('Clicked');
  };
  return (
    <div className='bg-gray-100'>
      <Header />
      <main className='lg:flex max-w-screen-2xl mx-auto'>
        {/* Left */}
        <div className='flex-grow m-5 shadow-sm'>
          <Image
            width={1020}
            height={250}
            objectFit='contain'
            src='/images/amazon/checkout-banner.webp'
            alt=''
          />

          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b pb-4'>
              {items.length === 0 ? 'Your Amazon cart is empty.' : 'Shopping Cart'}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
        {/* Right */}
        <div className='flex flex-col bg-white p-10'>
          {items.length > 0 && (
            <>
              <h2 className='whitespace-nowrap'>
                Subtotal ({items.length} items):{' '}
                <span className='font-bold'>{<Currency quantity={total} />}</span>
              </h2>

              <button
                className={`button mt-2 ${
                  !data?.user &&
                  'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
                disabled={!data?.user}
                onClick={onCLickHandler}>
                {data?.user ? 'Proceed to checkout' : 'Sign in to Checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
