'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';


export default function Product() {
    return (
        <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
            <div className="flex flex-col items-center justify-center pt-20 pb-16 px-8">
                <h1 className="text-4xl font-bold mb-4">Product Page</h1>
                <p className="text-lg text-slate-700 mb-8">Discover our amazing product!</p>

                <div className="w-full max-w-3xl bg-gray-100 rounded-lg shadow-md p-6">
                    <Image
                        src="/product-image.jpg"
                        alt="Product Image"
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}