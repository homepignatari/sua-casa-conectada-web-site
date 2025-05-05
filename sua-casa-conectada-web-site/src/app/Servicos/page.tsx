import React from 'react'
import { Header } from '@/components/Header'
import { Subtitle } from '@/components/Subtitle'
import { TopicTable } from '@/components/TopicTable'
import { BagdeCategory } from '@/components/BagdeCategory'
import { ContactBar } from '@/components/ContactBar'
import FooterBar from '@/components/FooterBar'

export default function page() {
    return (
        <div className='bg-white place-items-center'>
            <Header />
            <Subtitle title='Nossos Serviços' backgroungImage='/nossos-servicos.svg' />
            <div className='w-[900px] grid grid-cols-2 max-sm:w-full max-sm:grid-cols-1 gap-y-8 gap-x-4 place-items-center text-center py-10'>
                <TopicTable title='Consultoria' descriple='Indicação de dispositivos e sistemas ideais para cada ambiente, priorizando desempenho, praticidade e estética que permitam expansões futuras e atendam seu orçamento e necessidades atuais;' />
                <TopicTable title='Avaliação Inicial de Projeto' descriple='Análise das necessidades do cliente, orientação inicial sobre produtos, sistemas e tecnologias;' />
                <TopicTable title='Projeto Personalizado' descriple='Visita técnica ao imóvel, elaboração do projeto e detalhamento completo da infraestrutura, dispositivos e integrações;' />
                <TopicTable title='Projeto Avançado' descriple='Consultoria completa, incluindo projeto personalizado, acompanhamento, implementação, configuração, suporte e treinamento;' />
                <TopicTable title='Implementação' descriple='Instalação, configuração e integração das soluções de Assistentes de Voz, Plataformas, Dispositivos e Sensores;' />
                <TopicTable title='Suporte' descriple='Presencial e Remoto para atualização de hubs, dispositivos, sistemas e integrações, alem de acionamento para dúvidas, ajustes ou determinação de problemas.' />
                <TopicTable title='Treinamento' descriple='Apresentação sobre os dispositivos e funcionalidades instaladas, orientação sobre criação de cenas e automações, uso de assistentes de voz e alterações de configurações básicas;' />
            </div>
            <Subtitle title='Pacotes de Automação' backgroungImage='/pacotes-de-automacao.svg' />
            <div className='flex  flex-col gap-2 text-center '>
                <h2 className='text-xl font-bold'>Pacotes Automação Basic</h2>
                <p className='w-[1050px] line-clamp-3 font-mono text-center'>Os pacotes de automação Basic são compostos por pontos de iluminação, uma hora de Treinamento e um mês de Suporte Remoto Plus</p>
                <div>

                </div>
            </div>

            <h2 className='text-xl font-bold'>Pacotes Automação Essencial</h2>
            <p className='w-[1050px] line-clamp-3 font-mono text-center'>Os pacotes de automação Essencial são compostos por pontos de iluminação, tomadas, botões de cenas, sensores de portas e janelas, sensores de presença, sensores de temperatura e humidade, sensores de líquidos, campainha, *portão de garagem, configuração de aplicativo e assistente de voz, uma hora de Treinamento e um mês de Suporte Remoto Full</p>
            <div>

            </div>
            <h2 className='text-xl font-bold'>Pacotes Automação Plus</h2>
            <p className='w-[1050px] line-clamp-3 font-mono text-center'>Os pacotes de automação Plus são compostos por sensores de temperatura e humidade, controladores infravermelho, cortinas e persianas, sensores de portas e janelas, e sensores de presença</p>
            <div>

            </div>
            <h2 className='text-xl font-bold'>Pacotes Home Assistant</h2>
            <p className='w-[1050px] line-clamp-3 font-mono text-center'>Os pacotes Home Assistant contemplam instalação e configuração de acessos, backup, segurança, monitoramento de hardware, conectividade, integrações, multimedia, dashboards, alarmes, DVR, assistentes de voz e IA, além de 2 horas de Treinamento e um mês de Suporte Remoto HA Full</p>
            <div>

            </div>
            <h2 className='text-xl font-bold'>Pacotes Rotinas e Cenas</h2>
            <Subtitle title='Pacotes de Suporte' backgroungImage='/pacotes-de-suporte.svg' />
            <div className='w-[900px] flex flex-wrap max-sm:w-full max-sm:grid max-sm:grid-cols-2 gap-2 gap-y-8 gap-x-4 place-items-center justify-center items-center py-10 px-8'>
                <BagdeCategory title='Suporte Remoto' />
                <BagdeCategory title='Suporte Remoto Plus' />
                <BagdeCategory title='Suporte Remoto Full' />
                <BagdeCategory title='Suporte Remoto Home Assistant' />
                <BagdeCategory title='Suporte Remoto Home Assistant Plus' />
                <BagdeCategory title='Suporte Remoto Home Assistant Full' />
                <BagdeCategory title='Suporte Técnico Presencial' />
            </div>
            < ContactBar />
            <FooterBar />
        </div>
    )
}
