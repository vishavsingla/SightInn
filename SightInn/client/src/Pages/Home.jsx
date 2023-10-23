import React from 'react';
import '@radix-ui/themes/styles.css';
import { AvatarIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import * as Label from '@radix-ui/react-label';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';


// Define and initialize the 'items' array
const items = [
    { id: 1, /* other properties */ },
    { id: 2, /* other properties */ },
    { id: 3, /* other properties */ },
    { id: 3, /* other properties */ },
    { id: 3, /* other properties */ },
    { id: 3, /* other properties */ },
    { id: 3, /* other properties */ },
    { id: 3, /* other properties */ },
    { id: 3, /* other properties */ },
    { id: 3, /* other properties */ },
    { id: 3, /* other properties */ },
    // Add more items as needed
];

function SearchBar({ placeholder, onSearch }) {
    return (
        <div className="flex items-center rounded-lg bg-gray-100 px-3">
            <Label.Root className="text-gray-500 mr-5 pl-3" htmlFor="search">
                <MagnifyingGlassIcon className="h-5 w-5" />
            </Label.Root>
            <input
                id="search"
                className="bg-transparent p-2 text-gray-700 outline-none w-64"
                type="text"
                placeholder={placeholder}
                onKeyUp={(e) => onSearch(e.target.value)}
            />
        </div>

    );
}

function isItemSelected(itemId, selectedItemId) {
    return itemId === selectedItemId;
}

function Card({ onClick, selected, title, itemId }) {
    const visibility = React.useContext(VisibilityContext);

    return (
        <div
            onClick={() => onClick(visibility)}
            className="w-64 m-3 p-3 bg-gray-200 rounded shadow-lg cursor-pointer"
        >
            <div className="">
                <div>{title}</div>
                <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
                <div>selected: {JSON.stringify(!!selected)}</div>
            </div>
        </div>
    );
}

function Home() {
    const selectedItemId = 1;
    const handleClick = (itemId) => {
        console.log(`Clicked on item with ID: ${itemId}`);
    };

    return (
        <div className="">
            <div className="flex items-center justify-between max-w-8xl mx-auto p-5 shadow-sm">
                <div>
                    <img src="" alt="Logo" className="h-12 w-auto" />
                </div>

                <SearchBar placeholder="Search..." onSearch={(query) => console.log(query)} />

                <div className="flex items-center space-x-10">
                    <div className="text-xl">Explore hotels</div>
                    <div className="text-xl">Explore cities</div>
                    <AvatarIcon className="h-10 w-10 text-gray-500" />
                </div>
            </div>

            <div className=''>
                <ScrollMenu className="whitespace-nowrap overflow-auto scrollbar-hide ">
                    {items.map(({ id }) => (
                        <Card
                            itemId={id}
                            title={id}
                            key={id}
                            onClick={() => handleClick(id)}
                            selected={isItemSelected(id, selectedItemId)}
                        />
                    ))}
                </ScrollMenu>
            </div>
            
            <div className='py-5'>
            <button className="flex space-x-3 bg-gray-400 hover:bg-gray-300 ml-auto mx-5 text-white font-semibold py-2 px-4 rounded">
                <div> Filters </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
                </div>  
            </button>
                
            </div>
            

        </div>


    );
}

export default Home;
