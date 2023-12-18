import './App.css';
import { BrowserRouter as Route } from 'react-router-dom';
import Header from './Header.js';
import About from './About.js';
import Projects from './Projects.js';
import Experience from './Experience.js';
import Footer from './Footer.js';
const projectData = [
  {
    name: 'SixthGenAi',
    description: 'Collaborated on the development of Digiteyes Art...',
    link: 'https://6thgen.ai/'
  },
  {
    name: 'Digiteyes Art',
    description: 'Collaborated on the development of Digiteyes Art...',
    link: 'https://digiteyesart.com/'
  },
  {
    name: 'Gig Homes Blogs',
    description: 'Played a key role in building the Gig Homes Blogs website...',
    link: 'https://gig.homes/blogs'
  },
  {
    name: 'Nanosoma Miracle',
    description: 'Contributed to the development of the Nanosoma Miracle website...',
    link: 'https://nanosomamiracle.com/'
  },
  {
    name: 'PDMC Malaysia',
    description: 'Took part in the creation of the PDMC Malaysia website...',
    link: 'https://pdmc.com.my/'
  },
  {
    name: 'SGFL Organization',
    description: 'Contributed to the development of the SGFL Organization website...',
    link: 'https://sgflorg.online/'
  },
  {
    name: 'Charicenter',
    description: 'Collaborated on the Charicenter website...',
    link: 'https://charicenter.com/'
  },
  {
    name: 'Libido for Men',
    description: 'Contributed to the development of the Libido for Men website...',
    link: 'https://libidoformen.com/'
  },
  {
    name: 'Siyuan Lim Portfolio',
    description: 'Collaborated on the Siyuan Lim Portfolio website...',
    link: 'https://siyuanlim.com/'
  },
  {
    name: 'Fast Anxiety Help',
    description: 'Played a role in the development of the Fast Anxiety Help website...',
    link: 'https://fastanxietyhelp.com/'
  },
  {
    name: 'WSCTSE',
    description: 'Contributed to the WSCTSE website...',
    link: 'https://www.wsctse.com/'
  },
  {
    name: 'ReShade',
    description: 'Collaborated on the ReShade website...',
    link: 'https://www.reshade.net/'
  }
];

const experienceData = [
  {
    companyName: 'Flyte Solutions Limited',
    position: 'Software Engineer',
    duration: 'June 2022 – June 2023',
    tasks: [
      'Analyzed solutions and coding fixes for software problems.',
      'Coordinated with project managers to meet development timelines and plan testing.',
      'Conducted full lifecycle software development from planning to deployment and maintenance.',
      // Add more tasks
    ]
  },
  {
    companyName: 'Sylhet ICT Park',
    position: 'Software Engineer',
    duration: 'August 2020 – May 2022',
    tasks: [
      'Analyzed solutions and coding fixes for software problems.',
      'Coordinated with project managers to meet development timelines and plan testing.',
      'Conducted full lifecycle software development from planning to deployment and maintenance.',
      // Add more tasks
    ]
  }
  // Add more experience entries
];


const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects projects={projectData} />
      <Experience experiences={experienceData} />
      <Footer />
      {/* Rest of your app */}
    </div>
  );
};

export default App;
