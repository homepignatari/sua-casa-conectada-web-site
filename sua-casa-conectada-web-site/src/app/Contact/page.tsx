'use client';

import React from 'react';
import { Header } from '@/components/Header'
import FooterBar from '@/components/FooterBar'
import { useEffect } from 'react'
import { ContactBar } from '@/components/ContactBar';

export default function Page() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//embed.typeform.com/next/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            const scripts = document.querySelectorAll('script[src="//embed.typeform.com/next/embed.js"]');
            scripts.forEach(s => document.body.removeChild(s));
        };
    }, []);

    return (
        <div className='bg-white place-items-center'>
            <Header />

            <div className='relative z-10 flex flex-col items-center text-center justify-center h-full text-[#34BEED] gap-4'>
                <h2 className='text-5xl font-sans py-8'>Entre em contato conosco</h2>
            </div>
            <div className="max-w-xl max-h-xl mx-auto p-4">
                <div data-tf-live="01JTKTS97N8NVSTHJYA93AWFGX" data-tf-height="800" className='min-h-[800px]'></div>
            </div>
            
            <div className="w-full max-w-4xl mx-auto my-10">
                <iframe
                    className="w-full h-[400px] rounded-xl shadow"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5663017197534!2d-46.85010168461605!3d-23.58668026811006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0236795a84b3%3A0x9b9446a2c1c0b6cc!2sAlameda%20Rio%20Negro%2C%20503%20-%20Alphaville%20Industrial%2C%20Barueri%20-%20SP%2C%2006454-000!5e0!3m2!1spt-BR!2sbr!4v1714924011835!5m2!1spt-BR!2sbr"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <ContactBar />
            <FooterBar />
        </div>
    );
}

















