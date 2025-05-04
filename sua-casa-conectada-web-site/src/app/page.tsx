import Image from "next/image";
import "daisyui";
import { Header } from "@/components/Header";
import { Carrossel } from "@/components/Carrossel";
import { Subtitle } from "@/components/Subtitle";
import { TopicTable } from "@/components/TopicTable";
import { ContactBar } from "@/components/ContactBar";
import { FloatButton } from "antd";
import { Slider } from "@/components/Slider";
import FooterBar from "@/components/FooterBar";

export default function Home() {
  return (
    <div className=" bg-white ">
      <FloatButton icon=<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path fill="#0DC143" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg> />
      <Header />
      <main>
        <Carrossel />
        <div className="w-full p-8 grid grid-cols-1 gap-6 bg-linear-to-r from-blue-950 to-blue-500">
          <div className="flex max-sm:flex-col  max-sm:gap-4 justify-center">
            <p className="text-white">Aqui na Sua Casa Conectada, preparamos e transformamos lares em ambientes inteligentes e conectados, proporcionando mais conforto, segurança e eficiência para você e sua família.</p>
            <p className="text-white">Combinamos tecnologia de ponta e expertise para garantir uma experiência de automação simples, intuitiva e acessível para todos.</p>

          </div>
          <div>
            <h2 className="text-white font-semibold text-center">Vamos deixar Sua Casa Conectada?</h2>
            <p className="text-center text-blue-400">Entre em contato e descubra como podemos levar a automação para sua casa!</p>
          </div>
        </div>
        <Subtitle backgroungImage="/Missao.png" title="Missão" descriple="Além de disseminar a utilização de tecnologia, temos a missão de ser referência em plataformas inteligentes e personalizadas de automação residencial, oferecendo soluções inovadoras e integradas que simplifiquem e elevem o dia a dia dos nossos clientes com foco na qualidade e na experiência do usuário." />
        <Slider />
        <div className="bg-white place-items-center">
          <h2 className="p-8 text-4xl text-center">Porque escolher a Sua Casa Conectada?</h2>
          <div className="w-[900px] grid grid-cols-2 max-sm:grid-cols-1 gap-y-8 gap-x-4 place-items-center text-center">
            <TopicTable title="Inovação Contínua" descriple="Acompanhamos as tendências tecnológicas para oferecer as melhores soluções em automação residencial;" />
            <TopicTable title="Excelência no Atendimento" descriple="Valorizamos o relacionamento com nossos clientes e buscamos exceder suas expectativas em cada projeto;" />
            <TopicTable title="Simplicidade e Usabilidade" descriple="Acompanhamos as tendências tecnológicas para oferecer as melhores soluções em automação residencial;" />
            <TopicTable title="Qualidade" descriple="Trabalhamos com dispositivos e tecnologias reconhecidas pela qualidade, durabilidade e confiabilidade;" />
            <TopicTable title="Sustentabilidade" descriple="Contribuímos para a eficiência energética e o uso consciente de recursos naturais e digitais;" />
            <TopicTable title="Ética e Transparência" descriple="Atuamos com responsabilidade, honestidade e clareza em todas as nossas relações;" />
            <TopicTable title="Personalização" descriple="Entendemos que cada lar é único, por isso oferecemos soluções sob medida para as necessidades específicas de cada cliente." />
          </div>
        </div>
      </main>
      <ContactBar />
      <FooterBar />
    </div>
  );
}
