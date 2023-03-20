import Image from 'next/image';
import { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { NumericFormat } from 'react-number-format';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import { CheckCircleIcon } from '@heroicons/react/solid';
const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating, setRating] = useState(1);
  const [hasPrime, setHasPrime] = useState(true);
  const [addedToCart, setaddedToCart] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setRating(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
    setHasPrime(Math.random() < 0.5);
  }, []);

  const addItemToCart = () => {
    setaddedToCart(true);
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

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
      <Image width={200} height={200} objectFit='contain' src={image} alt='' />

      <h4 className='my-3'>{title}</h4>

      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, index) => {
            return <StarIcon key={index} className='h-5 text-yellow-500' />;
          })}
      </div>

      <p className='text-xs my-2 line-clamp-2'>{description}</p>

      <div className='mb-5'>
        <NumericFormat value={price} prefix='$' />
      </div>

      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img className='w-12' src='images/amazon/prime-tag.png' alt='prime-tag' />
          <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
        </div>
      )}

      <div className='flex flex-col mt-auto space-y-2'>
        <p
          className={`text-green-800 mt-auto ${
            addedToCart ? 'opacity-1' : 'opacity-0'
          } transition-opacity duration-200`}>
          <CheckCircleIcon className='w-6 inline' />
          <span> Added to Cart</span>
        </p>
        <button className='button' onClick={addItemToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
