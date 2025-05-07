import "daisyui";
import { Header } from "@/components/Header";
import { Carrossel } from "@/components/Carrossel";
import { Subtitle } from "@/components/Subtitle";
import { TopicTable } from "@/components/TopicTable";
import { ContactBar } from "@/components/ContactBar";
import { Slider } from "@/components/Slider";
import FooterBar from "@/components/FooterBar";


export default function Home() {
  return (
    <div className="overflow-hidden max-sm:overflow-x-hidden bg-white ">
      <Header />
      <main>
        <Carrossel />
        <div className="w-full p-8 grid grid-cols-1 gap-6 bg-linear-to-r from-[#0D325E] to-[#1B68C4]">
          <div className="flex max-sm:flex-col  max-sm:gap-4 justify-center">
            <p className="text-white max-w-[500px] text-sm">Aqui na Sua Casa Conectada, preparamos e transformamos lares em ambientes inteligentes e conectados, proporcionando mais conforto, segurança e eficiência para você e sua família.</p>
            <p className="text-white max-w-[400px] text-sm">Combinamos tecnologia de ponta e expertise para garantir uma experiência de automação simples, intuitiva e acessível para todos.</p>

          </div>
          <div className="w-full place-items-center">
            <h2 className="text-white text-xl font-semibold text-center">Vamos deixar Sua Casa Conectada?</h2>
            <p className="text-center max-w-[430px] text-[#34BEED] underline decoration-1">Entre em contato e descubra como podemos levar a automação para sua casa!</p>
          </div>
        </div>
        <Subtitle backgroungImage="/Missao.png" title="Missão" descriple="Além de disseminar a utilização de tecnologia, temos a missão de ser referência em plataformas inteligentes e personalizadas de automação residencial, oferecendo soluções inovadoras e integradas que simplifiquem e elevem o dia a dia dos nossos clientes com foco na qualidade e na experiência do usuário." />
        <Slider />
        <div className="bg-white place-items-center grid min-h-screen">
          <h2 className="p-8 text-4xl text-center font-semibold text-[#0D325E]">Porque escolher a Sua Casa Conectada?</h2>
          <div className="w-full max-w-[1000px] mx-auto flex flex-wrap justify-center gap-4 text-center">
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
