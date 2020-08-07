import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';

const App = () => {
  const data = {
    name: 'Alessandra Amicarella',
    image: 'url image',
    skills: [
      {
        id: '1',
        name: 'HTML5',
        stars: [1, 1, 1, 1, 2],
      },
      {
        id: '2',
        name: 'JavaScript',
        stars: [1, 1, 2, 3, 3],
      },
      {
        id: '3',
        name: 'Sass',
        stars: [1, 1, 1, 2, 3],
      },
      {
        id: '4',
        name: 'CSS3',
        stars: [1, 1, 1, 1, 2],
      },
      {
        id: '5',
        name: 'React',
        stars: [1, 1, 2, 3, 3],
      },
      {
        id: '6',
        name: 'Bootstrap',
        stars: [1, 1, 1, 1, 2],
      },
      {
        id: '7',
        name: 'Responsive Design',
        stars: [1, 1, 1, 1, 3],
      },
      {
        id: '8',
        name: 'Git/Github',
        stars: [1, 1, 1, 2, 3],
      },
      {
        id: '9',
        name: 'Material UI',
        stars: [1, 1, 1, 2, 3],
      },
    ],
    certifications: [
      {
        id: '1',
        url:
          'https://www.freecodecamp.org/certification/alessag/front-end-libraries',
        img: 'url de la imagen',
        academy: 'FreeCodeCamp',
        title: 'Front End Libraries',
        date: 'July, 2020',
        description: 'Short description about the course',
      },
      {
        id: '2',
        url:
          'https://www.freecodecamp.org/certification/alessag/javascript-algorithms-and-data-structures',
        img: 'url de la imagen',
        academy: 'FreeCodeCamp',
        title: 'JavaScript Algorithms and Data Structures',
        date: 'May,  2020',
        description: 'Short description about the course',
      },
      {
        id: '3',
        url:
          'https://www.freecodecamp.org/certification/alessag/responsive-web-design',
        img: 'url de la imagen',
        academy: 'FreeCodeCamp',
        title: 'Responsive Web Design',
        date: 'April, 2020',
        description: 'Short description about the course',
      },
      {
        id: '4',
        url:
          'https://platzi.com/@Alessandrag/curso/1170-git-github-2017-old/diploma/detalle/',
        img: 'url de la imagen',
        academy: 'Platzi',
        title: 'Curso Profesional de Git y Github',
        date: 'July, 2018',
        description: 'Short description about the course',
      },
      {
        id: '5',
        url:
          'https://platzi.com/@Alessandrag/curso/1054-fw-frontend-2016/diploma/detalle/',
        img: 'url de la imagen',
        academy: 'Platzi',
        title: 'Curso de Frontend con Bootstrap y Foundation',
        date: 'December, 2017',
        description: 'Short description about the course',
      },
      {
        id: '6',
        url: 'https://platzi.com/@Alessandrag/curso/1244-sass/diploma/detalle/',
        img: 'url de la imagen',
        academy: 'Platzi',
        title: 'Curso de Sass',
        date: 'May, 2018',
        description: 'Short description about the course',
      },
      {
        id: '7',
        url:
          'https://platzi.com/@Alessandrag/curso/1034-html5-css3-2016/diploma/detalle/',
        img: 'url de la imagen',
        academy: 'Platzi',
        title: 'Curso de Desarrollo Web Online',
        date: 'Agust, 2017',
        description: 'Short description about the course',
      },
      {
        id: '8',
        url:
          'https://platzi.com/@Alessandrag/curso/1103-animaciones-web/diploma/detalle/',
        img: 'url de la imagen',
        academy: 'Platzi',
        title: 'Curso de Animaciones para la Web',
        date: 'May, 2018',
        description: 'Short description about the course',
      },
      {
        id: '9',
        url:
          'https://platzi.com/@Alessandrag/curso/1050-programacion-basica/diploma/detalle/',
        img: 'url de la imagen',
        academy: 'Platzi',
        title: 'Curso de Programación Básica',
        date: 'May, 2017',
        description: 'Short description about the course',
      },
      {
        id: '10',
        url: 'hola',
        img: 'url de la imagen',
        academy: 'Platzi',
        title: 'Curso de Fundamentos de JavaScript',
        date: 'July, 2017',
        description: 'Short description about the course',
      },
    ],
    projects: [
      {
        id: '1',
        title: 'About Italy',
        url: 'https://alessag.github.io/italy/',
        img: 'project cover',
        date: '2018',
        description: 'Short description about the project',
      },
      {
        id: '2',
        title: 'Random Quote Machine',
        url: 'https://upbeat-goldwasser-67096c.netlify.app/',
        img: 'project cover',
        date: '2020',
        description: 'Short description about the project',
      },
      {
        id: '3',
        title: 'Markdown Editor Preview',
        url: 'https://adoring-bell-a62f16.netlify.app/',
        img: 'project cover',
        date: '2020',
        description: 'Short description about the project',
      },
      {
        id: '4',
        title: 'Drum Machine',
        url: 'https://drum-machine-2f986.web.app/',
        img: 'project cover',
        date: '2020',
        description: 'Short description about the project',
      },
      {
        id: '5',
        title: 'Calculator',
        url: 'https://drum-machine-2f986.web.app/',
        img: 'project cover',
        date: '2020',
        description: 'Short description about the project',
      },
      {
        id: '6',
        title: 'Pomodoro Clock',
        url: 'https://drum-machine-2f986.web.app/',
        img: 'project cover',
        date: '2020',
        description: 'Short description about the project',
      },
      {
        id: '7',
        title: 'Amura',
        url: 'https://drum-machine-2f986.web.app/',
        img: 'project cover',
        date: '2020',
        description: 'Short description about the project',
      },
      {
        id: '8',
        title: 'Platzi Palooza',
        url: 'https://drum-machine-2f986.web.app/',
        img: 'project cover',
        date: '2020',
        description: 'Short description about the project',
      },
      {
        id: '9',
        title: 'Trombone',
        url: 'https://drum-machine-2f986.web.app/',
        img: 'project cover',
        date: '2020',
        description: 'Short description about the project',
      },
      {
        id: '10',
        title: 'Instagram Layout',
        url: 'https://drum-machine-2f986.web.app/',
        img: 'project cover',
        date: '2020',
        description: 'Short description about the project',
      },
      {
        id: '11',
        title: 'Google Clone',
        url: 'https://drum-machine-2f986.web.app/',
        img: 'project cover',
        date: '2020',
        description: 'Short description about the project',
      },
      {
        id: '12',
        title: 'Survey Form',
        url: 'https://drum-machine-2f986.web.app/',
        img: 'project cover',
        date: '2020',
        description: 'Short description about the project',
      },
      {
        id: '13',
        title: 'JS Documentation',
        url: 'https://drum-machine-2f986.web.app/',
        img: 'project cover',
        date: '2020',
        description: 'Short description about the project',
      },
    ],
  };

  console.log(data);

  return (
    <div>
      <Header />
      <Main />
      {/* <h1>Certifications</h1>
      {data.certifications.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <h3>{item.description}</h3>
          <p>{item.date}</p>
          <a href={item.url} target='_blank' rel='noreferrer'>
            {item.title}
          </a>
        </div>
      ))} */}
    </div>
  );
};

export default App;
