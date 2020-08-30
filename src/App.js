import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  const data = {
    name: 'Alessandra Amicarella',
    urlCv:
      'https://drive.google.com/file/d/1Zox0mZ26OXPvftvi5Q8OFNlrmJPP7xVJ/view?usp=sharing',
    urlImage: './assets/images/fcc-js.png',
    skills: [
      {
        id: '1',
        name: 'HTML5',
        stars: ['1.svg', '1.svg', '1.svg', '1.svg', '2.svg'],
      },
      {
        id: '2',
        name: 'JavaScript',
        stars: ['1.svg', '1.svg', '2.svg', '3.svg', '3.svg'],
      },
      {
        id: '3',
        name: 'Sass',
        stars: ['1.svg', '1.svg', '1.svg', '2.svg', '3.svg'],
      },
      {
        id: '4',
        name: 'CSS',
        stars: ['1.svg', '1.svg', '1.svg', '1.svg', '2.svg'],
      },
      {
        id: '5',
        name: 'React',
        stars: ['1.svg', '1.svg', '2.svg', '3.svg', '3.svg'],
      },
      {
        id: '6',
        name: 'Bootstrap',
        stars: ['1.svg', '1.svg', '1.svg', '1.svg', '2.svg'],
      },
      {
        id: '7',
        name: 'Responsive Design',
        stars: ['1.svg', '1.svg', '1.svg', '1.svg', '3.svg'],
      },
      {
        id: '8',
        name: 'Git/Github',
        stars: ['1.svg', '1.svg', '1.svg', '2.svg', '3.svg'],
      },
      {
        id: '9',
        name: 'Material UI',
        stars: ['1.svg', '1.svg', '1.svg', '2.svg', '3.svg'],
      },
    ],
    certifications: [
      {
        id: '1',
        url:
          'https://www.freecodecamp.org/certification/alessag/front-end-libraries',
        img: 'front-end-libraries-certification.png',
        academy: 'FreeCodeCamp',
        title: 'Front End Libraries',
        date: 'July, 2020',
        description: 'Short description about the course',
      },
      {
        id: '2',
        url:
          'https://www.freecodecamp.org/certification/alessag/javascript-algorithms-and-data-structures',
        img:
          'javaScript-algorithms-and-data-structures-developer-certification.png',
        academy: 'FreeCodeCamp',
        title: 'JavaScript Algorithms and Data Structures',
        date: 'May,  2020',
        description: 'Short description about the course',
      },
      {
        id: '3',
        url:
          'https://www.freecodecamp.org/certification/alessag/responsive-web-design',
        img: 'responsive-web-desing-certification.png',
        academy: 'FreeCodeCamp',
        title: 'Responsive Web Design',
        date: 'April, 2020',
        description: 'Short description about the course',
      },
      {
        id: '4',
        url:
          'https://platzi.com/@Alessandrag/curso/1170-git-github-2017-old/diploma/detalle/',
        img: 'diploma-git-github-2017-old-1.png',
        academy: 'Platzi',
        title: 'Curso Profesional de Git y Github',
        date: 'July, 2018',
        description: 'Short description about the course',
      },
      {
        id: '5',
        url:
          'https://platzi.com/@Alessandrag/curso/1054-fw-frontend-2016/diploma/detalle/',
        img: 'diploma-fw-frontend-2016-1.png',
        academy: 'Platzi',
        title: 'Curso de Frontend con Bootstrap y Foundation',
        date: 'December, 2017',
        description: 'Short description about the course',
      },
      {
        id: '6',
        url: 'https://platzi.com/@Alessandrag/curso/1244-sass/diploma/detalle/',
        img: 'diploma-sass-1.png',
        academy: 'Platzi',
        title: 'Curso de Sass',
        date: 'May, 2018',
        description: 'Short description about the course',
      },
      {
        id: '7',
        url:
          'https://platzi.com/@Alessandrag/curso/1034-html5-css3-2016/diploma/detalle/',
        img: 'diploma-html5-css3-2016-1.png',
        academy: 'Platzi',
        title: 'Curso de Desarrollo Web Online',
        date: 'Agust, 2017',
        description: 'Short description about the course',
      },
      {
        id: '8',
        url:
          'https://platzi.com/@Alessandrag/curso/1103-animaciones-web/diploma/detalle/',
        img: 'diploma-animaciones-web-1.png',
        academy: 'Platzi',
        title: 'Curso de Animaciones para la Web',
        date: 'May, 2018',
        description: 'Short description about the course',
      },
      {
        id: '9',
        url:
          'https://platzi.com/@Alessandrag/curso/1050-programacion-basica/diploma/detalle/',
        img: 'diploma-programacion-basica-1.png',
        academy: 'Platzi',
        title: 'Curso de Programación Básica',
        date: 'May, 2017',
        description: 'Short description about the course',
      },
      {
        id: '10',
        url: 'hola',
        img: 'diploma-fundamentos-javascript-2017-1.png',
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
        img: 'aboutItaly.png',
        date: '2018',
        description: 'Short description about the project',
        repo: 'https://github.com/Alessag/italy',
        tech: [
          {
            id: '1',
            name: 'HTML5',
            url:
              'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
          },
          {
            id: '2',
            name: 'CSS3',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          },
          {
            id: '3',
            name: 'Bootstrap',
            url: 'https://getbootstrap.com/',
          },
          {
            id: '4',
            name: 'Git',
            url: 'https://git-scm.com/',
          },
        ],
      },
      {
        id: '2',
        title: 'Random Quote Machine',
        url: 'https://upbeat-goldwasser-67096c.netlify.app/',
        img: 'randomeQuoteMachine.png',
        date: '2020',
        description:
          'Short description about the project Short description about the project Short description about the project',
        repo: 'https://github.com/Alessag/random-quote-machine',
        tech: [
          {
            id: '1',
            name: 'HTML5',
            url:
              'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
          },
          {
            id: '2',
            name: 'CSS3',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          },
          {
            id: '3',
            name: 'React',
            url: 'https://reactjs.org/',
          },
          {
            id: '4',
            name: 'Material UI',
            url: 'https://material-ui.com/',
          },
          {
            id: '5',
            name: 'Git',
            url: 'https://git-scm.com/',
          },
          {
            id: '6',
            name: 'Netlify',
            url: 'https://www.netlify.com/',
          },
        ],
      },
      {
        id: '3',
        title: 'Markdown Editor Preview',
        url: 'https://adoring-bell-a62f16.netlify.app/',
        img: 'markdownEditor.png',
        date: '2020',
        description: 'Short description about the project',
        repo: 'https://github.com/Alessag/markdown-editor',
        tech: [
          {
            id: '1',
            name: 'HTML5',
            url:
              'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
          },
          {
            id: '2',
            name: 'CSS3',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          },
          {
            id: '3',
            name: 'React',
            url: 'https://reactjs.org/',
          },
          {
            id: '4',
            name: 'Emotion',
            url: 'https://emotion.sh/docs/introduction',
          },
          {
            id: '5',
            name: 'Git',
            url: 'https://git-scm.com/',
          },
          {
            id: '6',
            name: 'Firebase',
            url: 'https://firebase.google.com/',
          },
        ],
      },
      {
        id: '4',
        title: 'Drum Machine',
        url: 'https://drum-machine-2f986.web.app/',
        img: 'drumPad.png',
        date: '2020',
        description: 'Short description about the project',
        repo: 'https://github.com/Alessag/drum-machine',
        tech: [
          {
            id: '1',
            name: 'HTML5',
            url:
              'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
          },
          {
            id: '2',
            name: 'CSS3',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          },
          {
            id: '3',
            name: 'React',
            url: 'https://reactjs.org/',
          },
          {
            id: '4',
            name: 'Git',
            url: 'https://git-scm.com/',
          },
          {
            id: '5',
            name: 'Firebase',
            url: 'https://firebase.google.com/',
          },
        ],
      },
      {
        id: '5',
        title: 'Calculator',
        url: 'https://react-calculator-fecaf.web.app/',
        img: 'calculator.png',
        date: '2020',
        description: 'Short description about the project',
        repo: 'https://github.com/Alessag/react-calculator',
        tech: [
          {
            id: '1',
            name: 'HTML5',
            url:
              'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
          },
          {
            id: '2',
            name: 'CSS3',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          },
          {
            id: '3',
            name: 'React',
            url: 'https://reactjs.org/',
          },
          {
            id: '4',
            name: 'Git',
            url: 'https://git-scm.com/',
          },
          {
            id: '5',
            name: 'Firebase',
            url: 'https://firebase.google.com/',
          },
        ],
      },
      {
        id: '6',
        title: 'Pomodoro Clock',
        url: 'https://pomodoro-clock-35364.web.app/',
        img: 'pomodoroClock.png',
        date: '2020',
        description: 'Short description about the project',
        repo: 'https://github.com/Alessag/pomodoro-clock',
        tech: [
          {
            id: '1',
            name: 'HTML5',
            url:
              'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
          },
          {
            id: '2',
            name: 'CSS3',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          },
          {
            id: '3',
            name: 'React',
            url: 'https://reactjs.org/',
          },
          {
            id: '4',
            name: 'Tailwindcss',
            url: 'https://tailwindcss.com/',
          },
          {
            id: '5',
            name: 'Git',
            url: 'https://git-scm.com/',
          },
          {
            id: '6',
            name: 'Firebase',
            url: 'https://firebase.google.com/',
          },
        ],
      },
      {
        id: '7',
        title: 'Amura',
        url: 'https://alessag.gitlab.io/Amura/',
        img: 'amura.png',
        date: '2020',
        description: 'Short description about the project',
        repo: 'https://github.com/Alessag/Amura',
        tech: [
          {
            id: '1',
            name: 'HTML5',
            url:
              'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
          },
          {
            id: '2',
            name: 'CSS3',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          },
          {
            id: '3',
            name: 'Bootstrap',
            url: 'https://getbootstrap.com/',
          },
          {
            id: '4',
            name: 'Git',
            url: 'https://git-scm.com/',
          },
        ],
      },
      {
        id: '8',
        title: 'Platzi Palooza',
        url: 'https://alessag.github.io/platzi-palooza/',
        img: 'platziPalooza.png',
        date: '2020',
        description: 'Short description about the project',
        repo: 'https://github.com/Alessag/platzi-palooza',
        tech: [
          {
            id: '1',
            name: 'HTML5',
            url:
              'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
          },
          {
            id: '2',
            name: 'CSS3',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          },
          {
            id: '3',
            name: 'Foundation',
            url: 'https://get.foundation/',
          },
          {
            id: '4',
            name: 'Git',
            url: 'https://git-scm.com/',
          },
        ],
      },
      {
        id: '9',
        title: 'Trombone',
        url: 'https://alessag.github.io/Trombone/',
        img: 'trombone.png',
        date: '2020',
        description: 'Short description about the project',
        repo: 'https://github.com/Alessag/Trombone',
        tech: [
          {
            id: '1',
            name: 'HTML5',
            url:
              'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
          },
          {
            id: '2',
            name: 'CSS3',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          },
          {
            id: '3',
            name: 'Git',
            url: 'https://git-scm.com/',
          },
        ],
      },
      {
        id: '10',
        title: 'Instagram Layout',
        url: 'https://alessag.github.io/Instagram-Layout/',
        img: 'instagramLayout.png',
        date: '2020',
        description: 'Short description about the project',
        repo: 'https://github.com/Alessag/Instagram-Layout',
        tech: [
          {
            id: '1',
            name: 'HTML5',
            url:
              'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
          },
          {
            id: '2',
            name: 'CSS3',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          },
          {
            id: '3',
            name: 'CSS Grid',
            url:
              'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout',
          },
          {
            id: '4',
            name: 'Git',
            url: 'https://git-scm.com/',
          },
        ],
      },
      {
        id: '11',
        title: 'Google Clone',
        url: 'https://alessag.gitlab.io/google-clone/',
        img: 'googleClone.png',
        date: '2020',
        description: 'Short description about the project',
        repo: 'https://github.com/Alessag/google-clone',
        tech: [
          {
            id: '1',
            name: 'HTML5',
            url:
              'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
          },
          {
            id: '2',
            name: 'CSS3',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          },
          {
            id: '3',
            name: 'Git',
            url: 'https://git-scm.com/',
          },
        ],
      },
      {
        id: '12',
        title: 'Survey Form',
        url: 'https://alessag.github.io/Survey-Form/',
        img: 'surveyForm.png',
        date: '2020',
        description: 'Short description about the project',
        repo: 'https://github.com/Alessag/Survey-Form',
        tech: [
          {
            id: '1',
            name: 'HTML5',
            url:
              'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
          },
          {
            id: '2',
            name: 'CSS3',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          },
          {
            id: '3',
            name: 'CSS Grid',
            url:
              'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout',
          },
          {
            id: '4',
            name: 'Git',
            url: 'https://git-scm.com/',
          },
        ],
      },
    ],
    socialNetworks: [
      {
        id: '1',
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/AlessandraAmicarella/',
      },
      {
        id: '2',
        name: 'Telegram',
        url: 'https://t.me/Alessamica',
      },
      {
        id: '3',
        name: 'GitHub',
        url: 'https://github.com/alessag',
      },
      {
        id: '4',
        name: 'Instagram',
        url: 'https://instagram.com/amicarellaa',
      },
    ],
  };

  return (
    <div>
      <Header />
      <Main
        projects={data.projects}
        certificates={data.certifications}
        skills={data.skills}
      />
      <Footer />
    </div>
  );
};

export default App;
