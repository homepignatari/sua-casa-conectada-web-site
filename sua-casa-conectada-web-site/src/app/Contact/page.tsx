'use client';

import React from 'react';
import { Header } from '@/components/Header'
import FooterBar from '@/components/FooterBar'
import { useEffect } from 'react'

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
            <div className='relative z-10 flex flex-col items-center text-center justify-center h-full text-blue-400 gap-4'>
                <h2 className='text-5xl font-sans py-8'>Contato</h2>
            </div>
            <div className="w-full max-w-4xl mx-auto my-10">
                <iframe
                    className="w-full h-[400px] rounded-xl shadow"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5663017197534!2d-46.85010168461605!3d-23.58668026811006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0236795a84b3%3A0x9b9446a2c1c0b6cc!2sAlameda%20Rio%20Negro%2C%20503%20-%20Alphaville%20Industrial%2C%20Barueri%20-%20SP%2C%2006454-000!5e0!3m2!1spt-BR!2sbr!4v1714924011835!5m2!1spt-BR!2sbr"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className='w-full flex max-sm:flex-col p-8 gap-8 justify-center mt-6'>
                <div className='w-full flex max-sm:flex-col p-8 gap-8 justify-center mt-6'>
                    <div className='flex items-center gap-4 font-mono'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="29.25" width="29.25" viewBox="0 0 512 512"><path fill='#0D325E' d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>                <div>
                            <span className='font-bold'>Telefone</span>
                            <p>(11) 91754-9902</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 font-mono'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="29.25" width="29.25" viewBox="0 0 512 512"><path fill='#0D325E' d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                        <div>
                            <span className='font-bold'>E-mail</span>
                            <p>contato@suacasaconectada.com</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 font-mono'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="29.25" width="29.25" viewBox="0 0 512 512"><path fill='#0D325E' d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                        <div>
                            <span className='font-bold'>Horário Funcionamento</span>
                            <p>Segunda à Sábado - 8:00 ás 18:00</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 font-mono'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="29.25" width="29.25" viewBox="0 0 384 512"><path fill='#0D325E' d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                        <div>
                            <span className='font-bold'>Endereço</span>
                            <p>Al. Rio Negro, 503 – Alphaville Industrial, Barueri</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative z-10 flex flex-col items-center text-center justify-center h-full text-blue-400 gap-4'>
                <h2 className='text-5xl font-sans py-8'>Entre em contato conosco</h2>
            </div>
            <div className="max-w-xl mx-auto p-4">
                <div data-tf-live="01JTKTS97N8NVSTHJYA93AWFGX"></div>
            </div>

            <div className='relative z-10 flex flex-col items-center text-center justify-center h-full text-blue-400 gap-4'>
                <h2 className='text-5xl font-sans py-8'>Conheça nossas redes sociais</h2>
            </div>
            <div className="flex justify-center items-center gap-2">
                <a href="https://www.instagram.com/sua.casa.conectada/" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" height="71" width="71" viewBox="0 0 448 512"><path fill="#0D325E" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></a>
                <a href="https://www.linkedin.com/company/suacasaconectada/" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" height="71" width="71" viewBox="0 0 448 512"><path fill="#0D325E" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg></a>
                <a href="https://www.facebook.com/ssuacasaconectada" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" height="71" width="71" viewBox="0 0 448 512"><path fill="#0D325E" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" /></svg></a>
                <a href="https://www.tiktok.com/@suacasaconectada" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" height="71" width="71" viewBox="0 0 448 512"><path fill="#0D325E" d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" /></svg></a>
                <a href="https://www.youtube.com/@SuaCasaConectada" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" height="71" width="71" viewBox="0 0 576 512"><path fill="#0D325E" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg></a>
            </div>
            <FooterBar />
        </div>
    );
}

















