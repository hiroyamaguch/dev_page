import React from 'react';
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiMail,
} from 'react-icons/fi';
import {
  Container,
  Profile,
  Project,
  Projects,
  SocialMedias,
  SocialMedia,
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
    <Container>
      <Profile>
        <ProfileImage />
      </Profile>

      <SocialMedias>
        <SocialMedia
          href="https://facebook.com/hiro.yamaguchi.923/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFacebook size={24} />
        </SocialMedia>

        <SocialMedia
          href="https://instagram.com/hiroyamaguch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram size={24} />
        </SocialMedia>

        <SocialMedia
          href="https://linkedin.com/in/hiroyamaguch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin size={24} />
        </SocialMedia>

        <SocialMedia
          href="https://github.com/hiroyamaguch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub size={24} />
        </SocialMedia>

        <SocialMedia
          href="mailto:hiroyuki_yamaguchi@hotmai.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiMail size={24} />
        </SocialMedia>
      </SocialMedias>

      <Projects>
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
      </Projects>
    </Container>
  </>
);

export default App;
