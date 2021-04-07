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
  Projects,
  Content,
  Content2,
} from '../styles/pages/Home';

const App: React.FC = () => (
  <>
    <Profile>
      <Image
        src="/assets/profile.svg"
        alt="Pedro Yamaguchi"
        width={376}
        height={376}
      />

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

    <div style={{ backgroundColor: '#eec643' }}>
      <Portfolio>
        <h2>Portfólio</h2>

        <Projects>
          <li>
            <Content>
              <Image
                src="/assets/projects/construtora.svg"
                alt="JLR2 Construtora"
                width={64}
                height={64}
              />

              <p>Fevereiro de 2021</p>
            </Content>

            <h3>JLR2 Construtora</h3>

            <p>
              Aplicação Web desenvolvida para empresa JLR Construtora utilizando
              a ferramenta WordPress
            </p>

            <Content2>
              <div>
                <Image
                  src="/assets/techs/wordpress.svg"
                  alt="WordPress"
                  width={40}
                  height={40}
                />
              </div>

              <a
                href="https://jlr2construtora.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver aplicação
              </a>
            </Content2>
          </li>
        </Projects>
      </Portfolio>
    </div>
  </>
);

export default App;
