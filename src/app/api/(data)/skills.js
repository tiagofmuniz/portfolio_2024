import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { SiSass, SiSemanticuireact, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { LiaNodeJs, LiaNode } from 'react-icons/lia';


export const skills = [
  {
    label: 'html',
    level: 'advanced',
    tooltip: '💻 Nível Avançado: Dominando a estrutura da web e criando páginas incríveis!',
    icon: () => <FaHtml5 />,
    iconInternal: { width: 20, height: 20, url: '/images/planta2.gif' },
  },
  {
    label: 'css',
    level: 'advanced',
    tooltip: '🎨 Nível Avançado: Estilizando com maestria para deixar suas páginas visualmente incríveis!',
    icon: () => <IoLogoCss3 />,
    iconInternal: { width: 20, height: 20, url: '/images/planta2.gif' },
  },
  {
    label: 'sass',
    level: 'advanced',
    tooltip: '🌈 Nível Avançado: Usando pré-processadores para estilos mais poderosos e organizados!',
    icon: () => <SiSass />,
    iconInternal: { width: 20, height: 20, url: '/images/planta2.gif' },
  },
  {
    label: 'javascript',
    level: 'advanced',
    tooltip: '🚀 Nível Avançado: Mestre nas interações dinâmicas e desenvolvimento frontend avançado!',
    icon: () => <LiaNodeJs />,
    iconInternal: { width: 20, height: 20, url: '/images/planta2.gif' },
  },
  {
    label: 'node',
    level: 'intermediate',
    tooltip: '🌐 Nível Intermediário: Explorando o mundo backend e construindo aplicações servidor!',
    icon: () => <LiaNode />,
    iconInternal: { width: 10, height: 10, url: '/images/planta3.gif', skew: '.5' },
  },
  {
    label: 'reactjs',
    level: 'intermediate',
    tooltip: '⚛️ Nível Intermediário: Construindo componentes poderosos e explorando o mundo React!',
    icon: () => <SiSemanticuireact />,
    iconInternal: { width: 10, height: 10, url: '/images/planta3.gif', skew: '.5' },
  },
  {
    label: 'typescript',
    level: 'intermediate',
    tooltip: '⌨️ Nível Intermediário: Utilizando tipagem para um desenvolvimento mais seguro e escalável!',
    icon: () => <SiTypescript />,
    iconInternal: { width: 10, height: 10, url: '/images/planta3.gif', skew: '.5' },
  },

  {
    label: 'nextjs',
    level: 'intermediate',
    tooltip: '🔥 Nível Intermediário: Descobrindo a framework para construir aplicações React mais rápidas e eficientes!',
    icon: () => <SiNextdotjs />,
    iconInternal: { width: 10, height: 10, url: '/images/planta3.gif', skew: '.5' },
  },
].sort();
