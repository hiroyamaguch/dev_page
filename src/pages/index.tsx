import React from 'react';
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiMail,
} from 'react-icons/fi';
import Image from 'next/image';
import {
  Profile,
  ProfileDetails,
  SocialMedias,
  Portfolio,
  Project,
  ProjectDetails,
} from '../styles/pages/Home';

import ProfileImage from '../../public/assets/profile.svg';
import JlrConstrutora from '../../public/assets/projects/construtora.svg';

const App: React.FC = () => (
  <>
    <Profile>
      <ProfileImage />

      <ProfileDetails>
        <h1>Pedro Yamaguchi</h1>
        <p>
          Engenheiro da Computação e Desenvolvedor Full Stack com conhecimentos
          em ReactJs, Node.js, React Native, WordPress, Spring, Expo e NextJS
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
          <Image
            src="/assets/projects/construtora.svg"
            alt="Jlr Construtora"
            width={350}
            height={200}
          />

          <ProjectDetails>
            <h3>JLR Construtora</h3>
            <p>
              Aplicação Web desenvolvida para empresa JLR Construtora utilizando
              a ferramenta WordPress
            </p>
            <a
              href="https://jlr2construtora.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba Mais
            </a>
          </ProjectDetails>
        </Project>
      </div>
    </Portfolio>
  </>
);

export default App;
