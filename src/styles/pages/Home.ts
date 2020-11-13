import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  @media only screen and (min-width: 768px) {
    max-width: 1280px;
    margin: auto;
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const SocialMedias = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  svg {
    margin-right: 40px;
  }
`;

export const SocialMedia = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.light.text};

  svg {
    margin-right: 40px;
  }

  :hover {
    transform: color 0.4s;
    color: #8a05be;
  }
`;

export const Projects = styled.div`
  margin-top: 40px;
`;

export const Project = styled.div`
  margin: 24px;
  background-color: #f3f3f3;
  border-radius: 8px;

  display: flex;

  svg {
    width: 100%;
    height: 100%;

    margin-left: 2px;
    border-radius: 8px;
  }

  @media only screen and (max-width: 768px) {
    padding: 12px;

    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectDetails = styled.div`
  margin-left: 32px;
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectTitle = styled.a`
  font-size: 20px;
  text-decoration: none;
  color: #8a05be;
  margin-bottom: 8px;

  :hover {
    transform: opacity 0.4s;
    opacity: 0.7;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 16px;

  color: #414141;

  @media only screen and (max-width: 768px) {
    margin: auto;
  }
`;

export const ProjectTechs = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 16px;

  svg {
    width: 72px;
    height: 72px;
  }
`;
