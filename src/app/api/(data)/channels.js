import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { TbBrandNotion } from 'react-icons/tb';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa';
import {  FaWhatsappSquare } from 'react-icons/fa';


export const channels = [
  { value: 'https://wa.me/5531987958359/?text=Olá!%20Gostaria%20de%20conversar%20sobre%20oportunidades%20de%20colaboração.%20Podemos%20discutir%20mais%20sobre%20nossos%20interesses%20em%20comum%3F', label: 'whatsapp', icon: <FaWhatsappSquare /> },
  { value: 'https://www.linkedin.com/in/tiagofmuniz', label: 'linkedin', icon: <FaLinkedin /> },
  { value: 'https://github.com/tiagofmuniz', label: 'github', icon: <FaGithubSquare /> },
  { value: 'https://www.notion.so/seu_perfil/', label: 'notion', icon: <TbBrandNotion /> },
  { value: 'https://www.instagram.com/tiagoferreiramuniz/', label: 'instagram', icon: <FaInstagramSquare /> },
  { value: '/TiagoFMuniz.pdf', label: 'currículo', icon: <FaFilePdf /> },
];
