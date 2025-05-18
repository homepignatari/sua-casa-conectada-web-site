'use client';

import React, { useEffect } from 'react';
import FooterBar from '@/components/FooterBar';
import { ContactBar } from '@/components/ContactBar';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo-sua-casa-conectada-png.png'


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
        <div className='bg-white place-items-center '>
            <div className="navbar relative z-50 bg-white px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 448 512"><path fill="#1781CD" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>                    </div>
                        <ul tabIndex={0} className="menu menu-sm text-base dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-blue-950 text-white">
                            <li><Link href={`/`}>Home</Link></li>
                            <li><Link href={`/Solucoes`}>Soluções</Link></li>
                            <li><Link href={`/Servicos`}>Serviços</Link></li>
                            <li><Link href={`/Contact`}>Contato</Link></li>
                        </ul>
                    </div>

                    <Link href={`/`}><Image src={logo} height={84} width={84} alt='Logo azul sua casa conectada' /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-base px-1">
                        <li><Link href={`/`}>Home</Link></li>
                        <li><Link href={`/Solucoes`}>Soluções</Link></li>
                        <li><Link href={`/Servicos`}>Serviços</Link></li>
                        <li><Link href={`/Contact`}>Contato</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <a href="https://www.instagram.com/sua.casa.conectada/" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" height="21" width="21" viewBox="0 0 448 512"><path fill="#0D325E" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></a>
                    <a href="https://www.linkedin.com/company/suacasaconectada/" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" height="21" width="21" viewBox="0 0 448 512"><path fill="#0D325E" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg></a>
                    <a href="https://www.facebook.com/ssuacasaconectada" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" height="21" width="21" viewBox="0 0 448 512"><path fill="#0D325E" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" /></svg></a>
                    <a href="https://www.tiktok.com/@suacasaconectada" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" height="21" width="21" viewBox="0 0 448 512"><path fill="#0D325E" d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" /></svg></a>
                    <a href="https://www.youtube.com/@SuaCasaConectada" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" height="21" width="21" viewBox="0 0 576 512"><path fill="#0D325E" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg></a>
                </div>
            </div>
            <div className="relative w-full overflow-x-hidden h-[1050px] md:h-[1110px]">
                {/* Título visível no topo */}
                <div className="relative z-30 flex justify-center">
                    <h2 className="text-5xl font-sans text-[#34BEED] mt-8 text-center">
                        Entre em contato conosco
                    </h2>
                </div>

                {/* Formulário embedado com deslocamento para cima */}
                <iframe
                    className="absolute overflow-hidden top-[-130px] left-0 max-w-full w-full h-full rounded-xl z-0"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSe77xdUt8mTFZOlnckalRd4T94GZSiLgElGcvneBAWlnr_dGQ/viewform?embedded=true"
                    frameBorder="0"
                    loading="lazy"
                >
                    Carregando…
                </iframe>

                {/* Cobertura superior ajustada */}
                <div className="absolute  top-[-40px] left-0 w-full h-48 sm:h-36 md:h-40 bg-white z-10 rounded-t-xl"></div>

                {/* Cobertura inferior mantida */}
                <div className="absolute bottom-0 left-0 w-full h-60 sm:h-48 md:h-86 bg-white z-10 rounded-b-xl"></div>
            </div>


            <div className="w-full relative z-30 mt-[-80px] overflow-hidden top-[-100px] h-[400px] z-30 max-w-4xl mx-auto my-10 px-4">
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
