import React from 'react'
import { Header } from '@/components/Header'
import { Subtitle } from '@/components/Subtitle'
import { TopicTable } from '@/components/TopicTable'
import Image from 'next/image'
import Alexa from '../../../public/Alexa.svg'
import GoogleAssistant from '../../../public/Google-Assistant.svg'
import Siri from '../../../public/Siri.svg'
import Assist from '../../../public/Assist.svg'
import { ContactBar } from "@/components/ContactBar";
import FooterBar from "@/components/FooterBar";
import AlexaAmazon from '../../../public/amazon-alexa.svg'
import GoogleHome from '../../../public/google-home.svg'
import AppleHomeKit from '../../../public/Apple-Home-Kit.svg'
import Tuya from '../../../public/tuya.svg'
import Ewelink from '../../../public/ewelink.svg'
import Aqara from '../../../public/aqara.svg'
import SmartThings from '../../../public/smart-things.svg'
import HomeAssist from '../../../public/Home-assistant.svg'
import wifi from '../../../public/wifi.svg'
import zigbee from '../../../public/zigbee.svg'
import thread from '../../../public/Thread.svg'
import matter from '../../../public/matter.svg'


export default function page() {
    return (
        <div className='bg-white place-items-center'>
            <Header />
            <Subtitle title='Nossas soluções' backgroungImage='/3-banner-solucoes.svg' />
            <div className='w-[900px] grid grid-cols-2 max-sm:grid-cols-1 gap-y-8 gap-x-4 place-items-center text-center py-10'>
                <TopicTable title='Consultoria e Projetos' descriple='Planejamento e desenvolvimento de soluções personalizadas para atender às suas necessidades.' />
                <TopicTable title='Automação Residencial e IoT ' descriple='Integração de dispositivos inteligentes, assistente de voz e criação de automações avançadas para tornar sua casa mais conectada e funcional.' />
                <TopicTable title='Home Assistant' descriple='Implementação e configuração de plataforma open-source para automação completa da sua residência.' />
                <TopicTable title='Infraestrutura e Redes' descriple='Planejamento e desenvolvimento de soluções personalizadas para atender às suas necessidades.' />
            </div>
            <Subtitle title='Assistentes de Voz' backgroungImage='/2-assistentes-de-voz.svg' />
            <div className='flex max-sm:grid max-sm:grid-cols-2 gap-y-8 gap-x-4 place-items-center py-10'>
                <Image src={Alexa} alt='logo alexa' />
                <Image src={GoogleAssistant} alt='logo alexa' />
                <Image src={Siri} alt='logo alexa' />
                <Image src={Assist} alt='logo alexa' />
            </div>
            <Subtitle title='Plataformas' backgroungImage='/banner-plataformas.svg' />
            <div className='grid max-sm:grid-cols-4 grid-flow-col grid-rows-2  gap-y-8 gap-x-4 place-items-center py-10'>
                <Image src={AlexaAmazon} alt='logo amazon alexa' />
                <Image src={Ewelink} alt='logo ewelink' />
                <Image src={GoogleHome} alt='logo Google Home' />
                <Image src={Aqara} alt='logo aqara' />
                <Image src={AppleHomeKit} alt='logo apple home kit' />
                <Image src={SmartThings} alt='logo smart things' />
                <Image src={Tuya} alt='logo Tuya' />
                <Image src={HomeAssist} alt='logo Home Assist' />

            </div>
            <Subtitle title='Conectividade' backgroungImage='/banner-conectatividade.svg' />
            <div className='flex max-sm:grid max-sm:grid-cols-2 gap-y-8 gap-x-4 place-items-center py-10'>
            <Image src={wifi} alt='logo wi-fi' />
            <Image src={zigbee} alt='logo zigbee' />
            <Image src={thread} alt='logo thread' />
            <Image src={matter} alt='logo matter' />

            </div>
            <Subtitle title='Dispositivos' backgroungImage='/banner-dispositivos.svg' />
            <div>

            </div>
            <Subtitle title='Sensores' backgroungImage='/banner-sensores.svg' />
            <div>

            </div>
            < ContactBar />
            <FooterBar />
        </div>
    )
}
