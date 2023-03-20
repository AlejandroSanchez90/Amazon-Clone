import Image from 'next/image';
function Footer() {
  return (
    <div>
      <div className='bg-amazon_blue-lighter cursor-pointer hover:bg-amazon_blue-lightest h-10 flex items-center'>
        <div className='mx-auto text-white text-sm'>Back to top</div>
      </div>
      <div className='bg-amazon_blue-light border-b border-[#3a4553] text-white'>
        <div className='max-w-4xl px-10 mx-auto py-5 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-10'>
          <ul className='text-gray-200'>
            <li>
              <h1 className='font-bold text-white'>Get to Know Us</h1>
            </li>
            <li className='link'>Careers</li>
            <li className='link'>Amazon Newsletter</li>
            <li className='link'>About Amazon</li>
            <li className='link'>Accessibility</li>
            <li className='link'>Sustainability</li>
            <li className='link'>Press Center</li>
            <li className='link'>Investor Relations</li>
            <li className='link'>Amazon Devices</li>
            <li className='link'>Amazon Science</li>
          </ul>
          <ul className='text-gray-200'>
            <li>
              <h1 className='font-bold text-white'>Make Money with Us</h1>
            </li>
            <li className='link'>Sell products on Amazon</li>
            <li className='link'>Sell apps on Amazon</li>
            <li className='link'>Supply to Amazon</li>
            <li className='link'>Protect & Build Your Brand</li>
            <li className='link'>Become an Affiliate</li>
            <li className='link'>Become a Delivery Driver</li>
            <li className='link'>Start a package delivery business</li>
            <li className='link'>Advertise Your Products</li>
            <li className='link'>Self-Publish with Us</li>
            <li className='link'>Host an Amazon Hub</li>
            <li className='link'>See More Ways to Make Money</li>
          </ul>
          <ul className='text-gray-200'>
            <li>
              <h1 className='font-bold text-white'>Amazon Payment Products</h1>
            </li>
            <li className='link'>Sell products on Amazon</li>
            <li className='link'>Sell apps on Amazon</li>
            <li className='link'>Supply to Amazon</li>
            <li className='link'>Protect & Build Your Brand</li>
            <li className='link'>Become an Affiliate</li>
            <li className='link'>Become a Delivery Driver</li>
            <li className='link'>Start a package delivery business</li>
          </ul>
        </div>
      </div>
      <div className='bg-amazon_blue-light p-3 flex justify-items-center items-center'>
        {/* <img src={'/images/amazon/logo.png'} alt="" /> */}
        <div className='mx-auto'>
          <Image
            width={100}
            height={50}
            objectFit='contain'
            src={'/images/amazon/logo.png'}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
