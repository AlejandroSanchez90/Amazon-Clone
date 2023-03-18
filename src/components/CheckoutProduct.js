import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../slices/cartSlice';

function CheckoutProduct({ id, title, price, description, category, image, rating, hasPrime }) {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };
    dispatch(addToCart(product));
  };

  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className='grid grid-cols-5'>
      <Image width={200} height={200} objectFit='contain' src={image} alt='' />

      {/* Middle */}
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className='h-5 text-yellow-500' key={i} />
            ))}
        </div>
        <p className='text-sm my-2 line-clamp-3'>{description}</p>
        <Currency quantity={price} currency='USD' />

        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <img src='/images/amazon/prime-tag.png' loading='lazy' className='w-12' alt='' />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className='flex flex-col space-y-2 my-auto'>
        <button className='button' onClick={addItemToCart}>
          Add to cart
        </button>
        <button className='button' onClick={removeItemFromCart}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
