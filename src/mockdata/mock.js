import React from 'react'
import { FaReact,FaNodeJs,FaVuejs} from 'react-icons/fa';
import {SiApollographql, SiMongodb} from 'react-icons/si'
import bill from '../assets/bill.jpeg'
import sundar from '../assets/sundar.jpeg'
import obama from '../assets/obama.jpeg'
import jordan from '../assets/jordan.jpeg'
import {  SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si'

export const projects = [
    {
        class : "seed",
        title : "SEED",
        desc : "SEED Institute aims to strengthen and raise the quality of early education and related sectors such as community and social services in Singapore and internationally by supporting and empowering professionals who work in these settings",
        url :  "https://seedinstitute.edu.sg/",
        techstack : "React, Node JS, SCSS, Reactstrap"
    },
    {
        class : "obuhi",
        title : "Obuhi",
        desc : "Obuhi is a fast growing online community of professionals who seek greater flexibility, choice and autonomy in their careers.",
        url : "https://obuhi.com/",
        techstack : "React, Node JS, SCSS, Laravel, PSQL, Socket IO"
    },
    {
        class : "oaks",
        title : "Oaks",
        desc : "The Oaks Cellars Pte Ltd was set up in 1996 to keep abreast of the accelerating demand for the epicurean lifestyle. Today Oaks is an icon in the Singapore Wine business, known for her impeccable service, sound retail and distribution strategies in the management of wine shops",
        url : "https://www.oaks.com.sg/",
        techstack : "HTML5, CSS3, Magento, Bootstrap"
    },
    {
        class : "janeous",
        title : "Janeous",
        desc : "Speed recruitment platform that combines familiar tools into a better process, connecting you with matched sales talent for live video interviews",
        url : "https://www.janeous.com/",
        techstack : "HTML5, CSS3, Vue JS, Laravel, Mysql"
    }
]

export const technologies = [
    {
        name : 'React',
        component : <FaReact/>
    },
    {
        name : 'Javascript',
        component : <SiJavascript/>
    },
    {
        name : 'HTML5',
        component : <SiHtml5/>
    },
    {
        name : 'CSS3',
        component : <SiCss3/>
    },
    {
        name : 'Node JS',
        component : <FaNodeJs/>
    },
    {
        name : 'Graphql',
        component : <SiApollographql/>
    },
    {
        name : 'MongoDB',
        component : <SiMongodb/>
    },
    {
        name : 'Vue JS',
        component : <FaVuejs/>
    }
]


export const quotes = [
    {
        image : bill,
        text : "Don’t compare yourself with anyone in this world. If you do so, you are insulting yourself",
        name : "Bill Gates"
    },
    {
        image : obama,
        text : "If you’re walking down the right path and you’re willing to keep walking, eventually you’ll make progress",
        name : "Barack Obama"
    },
    {
        text : "Wear your failure as a badge of honor!",
        image : sundar,
        name : "Sundar Pichai"
    },
    {
        text : "I can accept failure, but I can't accept not trying.",
        image : jordan,
        name : "Miechael Jordan"
    }
]