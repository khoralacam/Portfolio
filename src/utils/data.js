import {
    Code2, 
    GraduactionCap,
    Briefaces,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
    Images,
    icons,

} from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitch, FiTwitter } from 'react-icons/fi';

import {FiGithub, FiLinkedin, FiTwitter} from 'react-icons/fi'

import PROJECT_IMG_1 from '../assets'
import PROJECT_IMG_2 from '../assets'
import PROJECT_IMG_3 from '../assets'
import PROJECT_IMG_4 from '../assets'
import PROJECT_IMG_5 from '../assets'
import PROJECT_IMG_6 from '../assets'
import PROJECT_IMG_7 from '../assets'
import PROJECT_IMG_8 from '../assets'
import PROJECT_IMG_9 from '../assets'


export const SKILLS_CATEGORY = [
    {
        title: 'Frontend',
        icon: Code2,
        description: 'Crafting beautiful, responsive user interfaces',
        skills: [
            {name:'HTML',lever: 90, color:'bg-blue-500'},
            {name:'CSS', level: 80, color:'bg-blue-600'},
            {name:'JAVASCRIPT', level: 80, color:'bg-gray-800'},
            {name:'React', level: 60, color:'bg-cyan-500' },
            {name:'Tailwind',level: 80, color:'bg-pink-500'},
            {name:'GSAP', level:60, color:'bg-blue-500'},
            {name:'Motion', level: 80, color:'bg-blue-600'},
            {name:'Swiper', level: 50, color:'bg-gray-800'},
        ]
    }
];

export const PROJECTS = [
    {
        id:1,
        title: 'E-Commerce Platfrom',
        description: '',
        Images: PROJECT_IMG_1,
        tags: ['React','Tailwind','Motion'],
        LiveUrl:'#',
        githubUrl: '#',
        featured: false,
        category:'Frontend'
    },

     {
        id:1,
        title: 'E-Commerce Platfrom',
        description: '',
        Images: PROJECT_IMG_1,
        tags: ['React','Tailwind','Motion'],
        LiveUrl:'#',
        githubUrl: '#',
        featured: false,
        category:'Frontend'
    },

     {
        id:1,
        title: 'E-Commerce Platfrom',
        description: '',
        Images: PROJECT_IMG_1,
        tags: ['React','Tailwind','Motion'],
        LiveUrl:'#',
        githubUrl: '#',
        featured: false,
        category:'Frontend'
    },

     {
        id:1,
        title: 'E-Commerce Platfrom',
        description: '',
        Images: PROJECT_IMG_1,
        tags: ['React','Tailwind','Motion'],
        LiveUrl:'#',
        githubUrl: '#',
        featured: false,
        category:'Frontend'
    },

     {
        id:1,
        title: 'E-Commerce Platfrom',
        description: '',
        Images: PROJECT_IMG_1,
        tags: ['React','Tailwind','Motion'],
        LiveUrl:'#',
        githubUrl: '#',
        featured: false,
        category:'Frontend'
    },
]

export const SOCIAL_LINKS =[
    {
        name: 'GitHub',
        icon: FiGithub,
        url: '#',
        color: 'text-grya-400',
        bgColor: 'bg-gray-600',

    },

    {
        name: 'LinkedIn',
        icon: FiLinkedin,
        url: '#',
        color: 'text-blue-400',
        bgColor: 'bg-gray-500/10',

    },

    {
        name: 'Twitter',
        icon: FiTwitter,
        url: '#',
        color: 'text-sky-400',
        bgColor: 'bg-sky-500/10',

    },
    {
        name: 'Email',
        icon: Mail,
        url: '#',
        bgColor:'hover:bg-green-500/10',
    }
];

export const CONTACT_INFO = [
           {
            icon: MapPin,
            Label: 'Location',
            value: 'Shaheen Bagh 40 foota'
           },
           {
            icon: Mail,
            Label:'Email',
            value:'nkk16608@gmail.com'
           },
           {
            icon: Phone,
            Label:'Phone',
            value:'+91 8780352181',
           }
];