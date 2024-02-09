import { IoHome } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { GrTechnology } from 'react-icons/gr';
import { GrProjects } from 'react-icons/gr';
import { IoMdChatboxes } from 'react-icons/io';

export const menu_list = [
  { id: 'home', label: 'Início', url: '/', icon: <IoHome /> },
  { id: 'about', label: 'Sobre', url: '/', icon: <FaUser /> },
  { id: 'skills', label: 'Tecnologias', url: '/', icon: <GrTechnology /> },
  { id: 'projects', label: 'Projetos', url: '/', icon: <GrProjects /> },
  { id: 'contact', label: 'Contato', url: '/', icon: <IoMdChatboxes /> },
];
