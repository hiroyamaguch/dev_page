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
  SocialMedias,
  Portfolio,
  Project,
  ProjectDetails,
} from '../styles/pages/Home';

import JlrConstrutora from '../../public/assets/projects/jlr_construtora.svg';
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

      <div>
        <Project>
          <a
            href="https://jlr2construtora.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <JlrConstrutora />
          </a>

          <ProjectDetails>
            <h3>JLR Construtora</h3>

            <p>
              Aplicação Web desenvolvida para empresa JLR Construtora. Link da
              aplicação.
            </p>
          </ProjectDetails>
        </Project>
      </div>
    </Portfolio>
  </>
);

export default App;
