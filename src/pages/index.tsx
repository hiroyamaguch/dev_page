import React from 'react';
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiMail,
} from 'react-icons/fi';
import {
  Profile,
  ProfileDetails,
  Project,
  Portfolio,
  SocialMedias,
  ProjectTitle,
  ProjectDescription,
  ProjectDetails,
  ProjectTechs,
} from '../styles/pages/Home';

import GoBarber from '../../public/assets/projects/gobarber.svg';
import NodeJSImage from '../../public/assets/techs/node.svg';
import ReactImage from '../../public/assets/techs/react.svg';
import ProfileImage from '../../public/assets/profile.svg';

const App: React.FC = () => (
  <>
    <Profile>
      <ProfileImage />

      <ProfileDetails>
        <h1>Pedro Yamaguchi</h1>
        <p>
          Engenheiro da Computação || Desenvolvedor Full Stack || Trabalhei com
          as ferramentas ReactJs, Node.js, React Native, WordPress, Spring e
          NextJS
        </p>

        <SocialMedias>
          <a
            href="https://facebook.com/hiro.yamaguchi.923/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook size={24} />
          </a>

          <a
            href="https://instagram.com/hiroyamaguch/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram size={24} />
          </a>

          <a
            href="https://linkedin.com/in/hiroyamaguch/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin size={24} />
          </a>

          <a
            href="https://github.com/hiroyamaguch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub size={24} />
          </a>

          <a
            href="mailto:hiroyuki_yamaguchi@hotmai.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail size={24} />
          </a>
        </SocialMedias>
      </ProfileDetails>
    </Profile>

    <Portfolio>
      <h2>Portfólio</h2>

      <Project>
        <a
          href="https://github.com/hiroyamaguch/gostack-gobarber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoBarber />
        </a>

        <ProjectDetails>
          <ProjectTitle
            href="https://github.com/hiroyamaguch/gostack-gobarber"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rocketseat GoBarber
          </ProjectTitle>

          <ProjectDescription>
            Site e aplicativo mobile para agendamento de horários em
            cabeleireiros. Este projeto foi desenvolvido durante o Bootcamp
            GoStack da Rocketseat.
          </ProjectDescription>

          <ProjectTechs>
            <>
              <NodeJSImage />
            </>
            <ReactImage />
          </ProjectTechs>
        </ProjectDetails>
      </Project>
    </Portfolio>
  </>
);

export default App;
