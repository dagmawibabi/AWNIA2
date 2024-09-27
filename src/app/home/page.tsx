"use client";

// todo: Implement proper authentication and authorization for the AI and Profile sections
// todo: Style the cryptocurrency information display for better readability and aesthetics
// todo: Integrate state management to handle user interactions and updates
// todo: Utilize local storage to persist user data and preferences
// todo: Refactor code to improve performance, readability, and maintainability
// todo: Implement data fetching and caching for cryptocurrency data
// todo: Add error handling and logging for robustness and debugging
// todo: Consider using a library or framework for state management (e.g. Redux, MobX)
// todo: Review and optimize code for accessibility and SEO

import Image from "next/image";
import { Search, Sparkle, User } from "lucide-react";
import placeholder from "../../assets/placeholder.png";
import afriwork from "../../assets/afriwork.png";
import Link from "next/link";

export default function Home() {
    const mockCryptos = [
        {
            id: 1,
            name: "Bitcoin",
            symbol: "BTC",
            price: "$40,000",
            high: "$42,000",
            low: "$38,000",
        },
        {
            id: 2,
            name: "Ethereum",
            symbol: "ETH",
            price: "$2,500",
            high: "$2,600",
            low: "$2,400",
        },
        {
            id: 3,
            name: "Litecoin",
            symbol: "LTC",
            price: "$150",
            high: "$160",
            low: "$140",
        },
        {
            id: 4,
            name: "Ripple",
            symbol: "XRP",
            price: "$0.25",
            high: "$0.30",
            low: "$0.20",
        },
        {
            id: 5,
            name: "Cardano",
            symbol: "ADA",
            price: "$1.20",
            high: "$1.30",
            low: "$1.10",
        },
    ];

    return (
        <div>
            <div className="w-1/2 mx-auto">
                <div className="flex justify-between">
                    {/* Logo */}
                    <Image
                        src={afriwork}
                        alt="poster"
                        width={200}
                        height={350}
                        className="py-5"
                    />
                    {/* AI */}
                    <div className="flex justify-between items-center gap-2">
                        <Link href="/ai">
                            <div className="flex items-center bg-zinc-900 hover:bg-black text-white rounded-xl px-4 py-1">
                                <Sparkle className="w-4 h-4 mr-1" /> AI
                            </div>
                        </Link>
                        <Link href="/profile">
                            <div className="flex items-center bg-zinc-900 hover:bg-black text-white rounded-xl px-4 py-1">
                                <User className="w-4 h-4 mr-1" /> Profile
                            </div>
                        </Link>
                    </div>
                </div>
                {/* Search Box */}
                <div className="flex items-center mb-6 w-full">
                    {/* Set width to full */}
                    <input
                        type="text"
                        placeholder="Search for crypto..."
                        className="border border-gray-300 rounded-l-md p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-500 text-white rounded-r-md p-2 flex items-center">
                        <Search className="w-4 h-4 mr-1" />{" "}
                        {/* Lucide Search Icon */}
                        Search
                    </button>
                </div>

                {/* Cryptos */}
                <div className="flex flex-col pb-56 gap-5">
                    {mockCryptos.map((eachCrypto) => (
                        <div
                            key={eachCrypto.id}
                            className="flex flex-row justify-center items-center w-full p-2 border border-neutral-200 transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl rounded-xl"
                        >
                            <div className="rounded-full overflow-clip w-11 border h-11">
                                <Image
                                    src={placeholder} // Update with actual crypto images
                                    alt="crypto logo"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="w-full flex justify-between pl-4">
                                <div className="flex flex-col">
                                    <span>{eachCrypto.name}</span>
                                    <span>{eachCrypto.symbol}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-green-500">
                                        {eachCrypto.high}
                                    </span>
                                    <span className="text-red-600">
                                        {eachCrypto.low}
                                    </span>
                                </div>
                                <span>{eachCrypto.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
