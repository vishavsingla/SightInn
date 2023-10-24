import React from 'react';
import { AvatarIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import logo from '../assets/logo.png';
import HotelCard from '../components/HotelCard';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import hotel from '../assets/hotel.jpeg'
import * as Dialog from '@radix-ui/react-dialog';
  import { Cross2Icon } from '@radix-ui/react-icons';

function SearchBar({ placeholder, onSearch }) {
  return (
    <div className="flex items-center rounded-full bg-white-400 px-3 shadow-md border border-gray-100">
      <div className="rounded-full w-8 h-8 bg-crimson flex items-center justify-center">
        <MagnifyingGlassIcon className="h-5 w-5 text-white font-bold" />
      </div>
      <input
        id="search"
        className="bg-transparent p-2 text-gray-700 outline-none w-96 h-12"
        type="text"
        placeholder={placeholder}
        onKeyUp={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

function Home() {
  const selectedItemId = 1;
  const handleClick = (itemId) => {
    console.log(`Clicked on item with ID: ${itemId}`);
  };

  
  
  const DialogDemo = () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-violet11 shadow border border-grau-100 hover:bg-mauve3 inline-flex h-[45px] items-center justify-center rounded-[4px] bg-white px-[20px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          Sign Up
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 opacity-1 backdrop-blur-[5px] transition-opacity duration-300 ease-in-out" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[24px] font-medium">
            Sign Up
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[20px] mb-5 text-[16px] leading-normal">
            Create your account. It's quick and easy.
          </Dialog.Description>
          <form>
            <fieldset className="mb-[20px]">
              <label className="text-violet11 w-[90px] text-right text-[16px]" htmlFor="name">
                Name
              </label>
              <input
                className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[45px] w-full flex-1 items-center justify-center rounded-[4px] px-[15px] text-[16px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset className="mb-[20px]">
              <label className="text-violet11 w-[90px] text-right text-[16px]" htmlFor="email">
                Email
              </label>
              <input
                className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[45px] w-full flex-1 items-center justify-center rounded-[4px] px-[15px] text-[16px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </fieldset>
            <fieldset className="mb-[20px]">
              <label className="text-violet11 w-[90px] text-right text-[16px]" htmlFor="password">
                Password
              </label>
              <input
                className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[45px] w-full flex-1 items-center justify-center rounded-[4px] px-[15px] text-[16px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="password"
                type="password"
                placeholder="Your Password"
              />
            </fieldset>
            <button
              type="submit"
              className="bg-crimson text-white hover:bg-red4 focus:shadow-red7 inline-flex h-[45px] w-full items-center justify-center rounded-[4px] px-[20px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
            >
              Sign Up
            </button>
          </form>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[35px] w-[35px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
  
  return (
    <div className='pl-6'>
      
      <div className="px-20 shadow-sm">
        <div className="flex items-center justify-between max-w-8xl mx-auto p-5">
          <div className='h-35 w-35'>
            <img src={logo} alt="Logo" className="h-15 w-20" />
          </div>

          <SearchBar placeholder="Search..." onSearch={(query) => console.log(query)} />
          <DialogDemo />
          <div className="flex items-center space-x-10">
            <div className="text-lg font-sans text-gray">Explore cities</div>
            <AvatarIcon className="h-10 w-10 text-crimson" />
          </div>
        </div>
      </div>

      <div className='py-5 px-20'>
        <button className="flex space-x-3 bg-white-400 border border-gray-200 hover-bg-gray-300 ml-auto mx-5 text-gray font-semibold py-2 px-4 rounded-lg">
          <div>Filters</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
              <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
          </div>
        </button>
      </div>

      <div className="px-20 py-7 max-w-8xl mx-auto flex flex-wrap gap-7">
        
        <HotelCard
          title={hotel}
          location="Jaipur, India"
          distance="416 km away"
          date="1-6 Nov"
          price="₹33,521"
        />
        <HotelCard
          title={hotel}
          location="Jaipur, India"
          distance="416 km away"
          date="1-6 Nov"
          price="₹33,521"
        />
        <HotelCard
          title={hotel}
          location="Jaipur, India"
          distance="416 km away"
          date="1-6 Nov"
          price="₹33,521"
        />
        <HotelCard
          title={hotel}
          location="Jaipur, India"
          distance="416 km away"
          date="1-6 Nov"
          price="₹33,521"
        />
        <HotelCard
          title={hotel}
          location="Jaipur, India"
          distance="416 km away"
          date="1-6 Nov"
          price="₹33,521"
        />
        <HotelCard
          title={hotel}
          location="Jaipur, India"
          distance="416 km away"
          date="1-6 Nov"
          price="₹33,521"
        />
        <HotelCard
          title={hotel}
          location="Jaipur, India"
          distance="416 km away"
          date="1-6 Nov"
          price="₹33,521"
        />
        <HotelCard
          title={hotel}
          location="Jaipur, India"
          distance="416 km away"
          date="1-6 Nov"
          price="₹33,521"
        />
        <HotelCard
          title={hotel}
          location="Jaipur, India"
          distance="416 km away"
          date="1-6 Nov"
          price="₹33,521"
        />

        {/* Repeat HotelCard for other items as needed */}
      </div>
    </div>
  );
}

export default Home;

