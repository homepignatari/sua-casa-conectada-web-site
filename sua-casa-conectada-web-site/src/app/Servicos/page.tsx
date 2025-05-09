import React from 'react'
import { Header } from '@/components/Header'
import { Subtitle } from '@/components/Subtitle'
import { TopicTable } from '@/components/TopicTable'
import { BagdeCategory } from '@/components/BagdeCategory'
import { ContactBar } from '@/components/ContactBar'
import FooterBar from '@/components/FooterBar'
import { BorderTopic } from '@/components/BorderTopic'

export default function page() {
    return (
        <div className='bg-white place-items-center'>
            <Header />
            <Subtitle title='Nossos Serviços' backgroungImage='/nossos-servicos.svg' />
            <div className='w-full max-w-[1000px] mx-auto flex flex-wrap justify-center gap-4 text-center gap-y-8 gap-x-4 place-items-center text-center py-10'>
                <TopicTable title='Consultoria' descriple='Indicação de dispositivos e sistemas ideais para cada ambiente, priorizando desempenho, praticidade e estética que permitam expansões futuras e atendam seu orçamento e necessidades atuais.' />
                <TopicTable title='Avaliação Inicial de Projeto' descriple='Análise das necessidades do cliente, orientação inicial sobre produtos, sistemas e tecnologias.' />
                <TopicTable title='Projeto Personalizado' descriple='Visita técnica ao imóvel, elaboração do projeto e detalhamento completo da infraestrutura, dispositivos e integrações.' />
                <TopicTable title='Projeto Avançado' descriple='Consultoria completa, incluindo projeto personalizado, acompanhamento, implementação, configuração, suporte e treinamento.' />
                <TopicTable title='Implementação' descriple='Instalação, configuração e integração das soluções de Assistentes de Voz, Plataformas, Dispositivos e Sensores.' />
                <TopicTable title='Suporte' descriple='Presencial e Remoto para atualização de hubs, dispositivos, sistemas e integrações, alem de acionamento para dúvidas, ajustes ou determinação de problemas.' />
                <TopicTable title='Treinamento' descriple='Apresentação sobre os dispositivos e funcionalidades instaladas, orientação sobre criação de cenas e automações, uso de assistentes de voz e alterações de configurações básicas.' />
            </div>
            <Subtitle title='Pacotes de Automação' backgroungImage='/pacotes-de-automacao.svg' />
            <h2 className='text-xl text-center font-bold p-4'>Pacotes Automação Basic</h2>
            <p className='w-full max-sm:w-full max-sm:text-wrap font-mono text-center px-8'>Os pacotes de automação Basic são compostos por pontos de iluminação, uma hora de Treinamento e um mês de Suporte Remoto Plus</p>
            <div className='w-[1000px] flex flex-wrap max-sm:w-full max-sm:grid max-sm:grid-rows-1 gap-2 gap-y-8 gap-x-4 place-items-center justify-center items-center py-10 px-8'>
                <BorderTopic title='Light I' />
                <BorderTopic title='Light II' />
                <BorderTopic title='Light III' />
                <BorderTopic title='Light IV' />
                <BorderTopic title='Light V' />
            </div>

            <h2 className='text-xl text-center font-bold p-4'>Pacotes Automação Essencial</h2>
            <p className='font-mono max-w-[1000px] text-center px-8'>Os pacotes de automação Essencial são compostos por pontos de iluminação, tomadas, botões de cenas, sensores de portas e janelas, sensores de presença, sensores de temperatura e humidade, sensores de líquidos, campainha, *portão de garagem, configuração de aplicativo e assistente de voz, uma hora de Treinamento e um mês de Suporte Remoto Full</p>
            <div className='w-[1050px] flex flex-wrap max-sm:w-full max-sm:grid max-sm:grid-rows-1 gap-2 gap-y-8 gap-x-4 place-items-center justify-center items-center py-10 px-8'>
                <BorderTopic title='Studio' describle='Studios e apartamentos pequenos com 1 quarto – até 40m' />
                <div className='w-[280px] h-[100px] border-2 border-sky-500 rounded-lg p-2'>
                    <p className='font-medium text-2xl text-center text-sky-500 py-2'>Small </p>
                    <p className='font-mono font-medium text-xs text-center'>Apartamentos compactos <span className="block indent-2">com 2 quartos – até 60m</span></p>
                </div>
                <BorderTopic title='Medium' describle='Apartamentos com 3 quartos – até 90m' />
                <BorderTopic title='Small House' describle='Casas compactas com 2 quartos – até 65m' />
                <BorderTopic title='Medium House' describle='Casas com 3 quartos – até 90m' />
                <BorderTopic title='Comfort House' describle='Casas maiores  – até 120m' />
                <BorderTopic title='Large Custom' describle='Apartamentos acima de 90m e casas acima de 120m' />

            </div>
            <h2 className='text-xl text-center font-bold p-4'>Pacotes Automação Plus</h2>
            <p className='font-mono max-w-[850px] text-center px-8'>Os pacotes de automação Plus são compostos por sensores de temperatura e humidade, controladores infravermelho, cortinas e persianas, sensores de portas e janelas, e sensores de presença</p>
            <div className='w-[1050px] flex flex-wrap max-sm:w-full max-sm:grid max-sm:grid-rows-1 gap-2 gap-y-8 gap-x-4 place-items-center justify-center items-center py-10 px-8'>
                <BorderTopic title='Confort I-III' />
                <BorderTopic title='Door/Window I-III' />
                <BorderTopic title='Presence I-III' />
            </div>
            <h2 className='text-xl text-center font-bold p-4'>Pacotes Home Assistant</h2>
            <p className='font-mono max-w-[900px] text-center px-8'>Os pacotes Home Assistant contemplam instalação e configuração de acessos, backup, segurança, monitoramento de hardware, conectividade, integrações, multimedia, dashboards, alarmes, DVR, assistentes de voz e IA, além de 2 horas de Treinamento e um mês de Suporte Remoto HA Full</p>
            <div className='w-[1050px] flex flex-wrap max-sm:w-full max-sm:grid max-sm:grid-rows-1 gap-2 gap-y-8 gap-x-4 place-items-center justify-center items-center py-10 px-8'>
                <BorderTopic title='HA Initial' />
                <BorderTopic title='HA Basic' />
                <BorderTopic title='HA Intermediate' />
                <BorderTopic title='HA Media' />
                <BorderTopic title='HA Assistant' />
                <BorderTopic title='HA Advanced Custom' />
            </div>
            <h2 className='text-xl text-center font-bold p-4'>Pacotes Rotinas e Cenas</h2>
            <div className='w-[1050px] flex flex-wrap max-sm:w-full max-sm:grid max-sm:grid-rows-1 gap-2 gap-y-8 gap-x-4 place-items-center justify-center items-center py-10 px-8'>
                <div className='w-[280px] h-[100px] border-2 border-sky-500 rounded-lg p-2 '>
                    <p className='font-medium text-2xl text-center text-sky-500'>Simple</p>
                    <ul className="list-disc list-inside text-left">
                        <li className='font-mono text-xs'>Lógica Simples</li>
                        <li className='font-mono text-xs'>Até 3 elementos ou 30 minutos de <span className="block indent-4">programação</span> </li>
                    </ul>
                </div>
                <div className='w-[280px] h-[100px] border-2 border-sky-500 rounded-lg p-2'>
                    <p className='font-medium text-2xl text-center text-sky-500 py-2'>Optimized </p>
                    <ul className="list-disc list-inside text-left">
                        <li className='font-mono text-xs'>Lógica Avançada</li>
                        <li className='font-mono text-xs'>Até 4 elementos ou 1 hora de programação</li>
                    </ul>
                </div>
                <div className='w-[280px] h-[100px] border-2 border-sky-500 rounded-lg p-2 '>
                    <p className='font-medium text-2xl text-center text-sky-500'>Complex</p>
                    <ul className="list-disc list-inside text-left">
                        <li className='font-mono text-xs'>Lógica Complexa</li>
                        <li className='font-mono text-xs'>Diversos elementos ou a partir de 1 hora de <span className="block indent-4">programação</span></li>
                    </ul>
                </div>
            </div>
            <Subtitle title='Pacotes de Suporte' backgroungImage='/pacotes-de-suporte.svg' />
            <div className='w-[900px] flex flex-wrap max-sm:w-full max-sm:grid max-sm:grid-cols-2 gap-2 gap-y-8 gap-x-4 place-items-center justify-center items-center py-10 px-8'>
                <BagdeCategory title='Suporte Remoto' />
                <BagdeCategory title='Suporte Remoto Plus' />
                <BagdeCategory title='Suporte Remoto Full' />
                <BagdeCategory title='Suporte Remoto Home Assistant' />
                <BagdeCategory title='Suporte Remoto Home Assistant Plus' />
                <BagdeCategory title='Suporte Remoto Home Assistant Full' />
                <div className='max-sm:col-span-2 max-sm:w-full max-sm:flex max-sm:justify-center w-auto'>
                    <BagdeCategory title='Suporte Técnico Presencial' />
                </div>
            </div>
            < ContactBar />
            <FooterBar />
        </div >
    )
}
