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
            <div>

            </div>
            <Subtitle title='Conectividade' backgroungImage='/banner-conectatividade.svg' />
            <div>

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
