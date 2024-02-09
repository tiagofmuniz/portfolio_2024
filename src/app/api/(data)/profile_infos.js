import { FaUserCircle } from 'react-icons/fa';
import { FaBirthdayCake } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { MdOutlineMailOutline } from 'react-icons/md';
import { PiStudentFill } from 'react-icons/pi';
import { calculateAge } from '../../../utils/calculateAge';


export const profile_infos = [
  { label: 'Nome', value: 'Tiago Ferreira Muniz', icon: <FaUserCircle /> },
  { label: 'Idade', value: `${calculateAge('1990-07-10')} anos`, icon: <FaBirthdayCake /> },
  { label: 'Localidade', value: 'BeloHorizonte/MG', icon: <GrLocation /> },
  { label: 'Formação', value: 'Sistemas de Informação', icon: <PiStudentFill /> },
  { value: 'tiagofmuniz@hotmail.com', label: 'Email', icon: <MdOutlineMailOutline /> },
];
