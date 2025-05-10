import React from 'react'
import { Header } from '@/components/Header'
import { Subtitle } from '@/components/Subtitle'
import { TopicTable } from '@/components/TopicTable'
import { BagdeCategory } from '@/components/BagdeCategory'
import Image from 'next/image'
import Alexa from '../../../public/alexa-png.png'
import GoogleAssistant from '../../../public/Google_Assistante - png.png'
import Siri from '../../../public/Siri.svg'
import Assist from '../../../public/Assist.svg'
import { ContactBar } from "@/components/ContactBar";
import FooterBar from "@/components/FooterBar";
import AlexaAmazon from '../../../public/amazon-alexa.png'
import GoogleHome from '../../../public/Google_Home - png.png'
import AppleHomeKit from '../../../public/Apple-Home-Kit.svg'
import Tuya from '../../../public/Tuya - png.png'
import Ewelink from '../../../public/eWeLink -  png.png'
import Aqara from '../../../public/Aqara - png.png'
import SmartThings from '../../../public/Smart_Things - png.png'
import HomeAssist from '../../../public/home-assistant-png.png'
import wifi from '../../../public/wifi-a.svg'
import zigbee from '../../../public/zigbee.svg'
import thread from '../../../public/Thread.svg'
import matter from '../../../public/matter.svg'


export default function page() {
    return (
        <div className='bg-white place-items-center'>
            <Header />
            <Subtitle title='Nossas Soluções' backgroungImage='/3-banner-solucoes.svg' />
            <div className='w-[900px] grid grid-cols-2 max-sm:w-full max-sm:grid-cols-1 gap-y-8 gap-x-30 place-items-center text-center py-10'>
                <TopicTable title='Consultoria e Projetos' descriple='Planejamento e desenvolvimento de soluções personalizadas para atender às suas necessidades.' />
                <TopicTable title='Automação Residencial e IoT ' descriple='Integração de dispositivos inteligentes, assistente de voz e criação de automações avançadas para tornar sua casa mais conectada e funcional.' />
                <TopicTable title='Home Assistant' descriple='Implementação e configuração de plataforma open-source para automação completa da sua residência.' />
                <TopicTable title='Infraestrutura e Redes' descriple='Instalação e configuração de redes de alta performance para suportar todos os dispositivos inteligentes da sua casa.' />
            </div>
            <Subtitle title='Assistentes de Voz' backgroungImage='/2-assistentes-de-voz.svg' />
            <div className='flex max-sm:grid max-sm:grid-cols-2 gap-y-8 gap-x-4 place-items-center py-10'>
                <Image src={Alexa} height={142} width={142} alt='logo alexa' />
                <Image src={GoogleAssistant} height={142} width={142} alt='logo alexa' />
                <Image src={Siri} alt='logo alexa' />
                <Image src={Assist} alt='logo alexa' />
            </div>
            <Subtitle title='Plataformas' backgroungImage='/banner-plataformas.svg' />
            <div className='grid max-sm:grid-cols-4 grid-flow-col grid-rows-2  gap-y-8 gap-x-4 place-items-center py-10'>
                <Image src={AlexaAmazon} height={200} width={200} alt='logo amazon alexa' />
                <Image src={Ewelink} height={200} width={200} alt='logo ewelink' />
                <Image src={GoogleHome} height={200} width={200} alt='logo Google Home' />
                <Image src={Aqara} height={242} width={242} alt='logo aqara' />
                <Image src={AppleHomeKit} height={142} width={142} alt='logo apple home kit' />
                <Image src={SmartThings}  height={142} width={142} alt='logo smart things' />
                <Image src={Tuya} height={142} width={142} alt='logo Tuya' />
                <Image src={HomeAssist} height={80} width={80} className='max-md:h-[80px] max-md:w-[55px]' alt='logo Home Assist' />

            </div>
            <Subtitle title='Conectividade' backgroungImage='/banner-conectatividade.svg' />
            <div className='flex max-sm:grid max-sm:grid-cols-2 gap-y-8 gap-x-4 place-items-center py-10'>
                <Image src={wifi} alt='logo wi-fi' />
                <Image src={zigbee} alt='logo zigbee' />
                <Image src={thread} alt='logo thread' />
                <Image src={matter} alt='logo matter' />

            </div>
            <Subtitle title='Dispositivos' backgroungImage='/banner-dispositivos.svg' />
            <div className='w-[900px] flex flex-wrap max-sm:w-full max-sm:grid max-sm:grid-cols-2 gap-2 gap-y-8 gap-x-4 place-items-center justify-center items-center py-10 px-2'>
                <BagdeCategory title='Lâmpadas e Fitas LED' />
                <BagdeCategory title='Interruptores e Tomadas' />
                <BagdeCategory title='Displays' />
                <BagdeCategory title='Botões de Cenas' />
                <BagdeCategory title='Cortinas e Persianas' />
                <BagdeCategory title='Portas e Janelas' />
                <BagdeCategory title='Fechaduras' />
                <BagdeCategory title='Campainhas e Vídeo Porteiros' />
                <BagdeCategory title='Portões' />
                <BagdeCategory title='Caixas de Correspondência' />
                <BagdeCategory title='Centrais de Alarme e Cercas Elétrica' />
                <BagdeCategory title='Sirenes' />
                <BagdeCategory title='Motores, Bombas e Atuadores' />
                <BagdeCategory title='Irrigação e Jardinagem' />
                <BagdeCategory title='Eletrodomésticos e Móveis' />
                <BagdeCategory title='Controladores Infravermelho e Rádio Frequência' />
                <BagdeCategory title='Válvulas e Torneiras' />
                <BagdeCategory title='Chuveiros' />
                <BagdeCategory title='Exaustores' />
                <BagdeCategory title='Toalheiros' />
                <BagdeCategory title='Tags NFC' />
                <BagdeCategory title='Relês' />
                <BagdeCategory title='Disjuntores' />
                <BagdeCategory title='Medidores Energéticos' />
                <BagdeCategory title='Câmeras Wifi e PoE' />
                <BagdeCategory title='Hubs' />
                <BagdeCategory title='Roteadores' />
                <BagdeCategory title='Switches' />
                <div className='max-sm:col-span-2 max-sm:w-full max-sm:flex max-sm:justify-center w-auto'>
                    <BagdeCategory title='Access Points' />
                </div>

            </div>
            <Subtitle title='Sensores' backgroungImage='/banner-sensores.svg' />
            <div className='w-[800px] flex flex-wrap max-sm:w-full max-sm:grid max-sm:grid-cols-2 gap-2 gap-y-8 gap-x-4 place-items-center justify-center items-center py-10 px-8'>
                <BagdeCategory title='Luminosidade' />
                <BagdeCategory title='Movimento' />
                <BagdeCategory title='Presença' />
                <BagdeCategory title='Vibração' />
                <BagdeCategory title='Temperatura e Humidade' />
                <BagdeCategory title='Chuva' />
                <BagdeCategory title='Água' />
                <BagdeCategory title='Gás' />
                <div className='max-sm:col-span-2 max-sm:w-full max-sm:flex max-sm:justify-center w-auto'>
                    <BagdeCategory title='Fumaça' />
                </div>
            </div>
            < ContactBar />
            <FooterBar />
        </div>
    )
}
