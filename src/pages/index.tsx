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
} from '../styles/pages/Home';
import Li from '../components/Li';

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

    <div style={{ backgroundColor: '#eec643', flex: 1 }}>
      <Portfolio>
        <h2>Portfólio</h2>

        <Projects>
          <Li
            logoFile="devquiz"
            description="Aplicação Mobile desenvolvida durante a NLW #5 da Rocketseat."
            projectDate="Maio de 2021"
            techs={[{ name: 'Flutter', file: 'flutter' }]}
            aplicationURL="https://github.com/hiroyamaguch/nlw5"
            companyName="DevQuiz"
          />
          <Li
            logoFile="construtora"
            description="Aplicação Web desenvolvida para empresa JLR Construtora
            utilizando a ferramenta WordPress."
            projectDate="Fevereiro de 2021"
            techs={[{ name: 'WordPress', file: 'wordpress' }]}
            aplicationURL="https://jlr2construtora.com.br/"
            companyName="JLR2 Construtora"
          />
          <Li
            logoFile="be_the_hero"
            description="Aplicação para ligar instituições não governamentais a
            pessoas que querem fazer a diferença na sociedade."
            projectDate="Março de 2020"
            techs={[
              { name: 'NodeJS', file: 'nodejs' },
              { name: 'React', file: 'react' }
            ]}
            aplicationURL="https://github.com/hiroyamaguch/BeTheHero"
            companyName="Be The Hero"
          />
          <Li
            logoFile="gobarber"
            description="GoBarber é uma aplicação para realizar agendamentos de
            serviço de cabeleireiro. Essa aplicação foi desenvolvida durante o
            curso Bootcamp GoStack da Rocketseat."
            projectDate="Agosto de 2020"
            techs={[
              { name: 'NodeJS', file: 'nodejs' },
              { name: 'React', file: 'react' }
            ]}
            aplicationURL="https://github.com/hiroyamaguch/GoBarber"
            companyName="GoBarber"
          />
        </Projects>
      </Portfolio>
    </div>
  </>
);

export default App;
