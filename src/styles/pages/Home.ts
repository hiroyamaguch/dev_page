import styled from 'styled-components';

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 80%;

  margin: 40px auto 0 auto;

  > svg {
    width: 50%;
    height: 50%;
  }

  @media only screen and (min-width: 1250px) {
    flex-direction: row;

    height: 400px;
    width: 80%;

    > svg {
      width: 800px;
      height: 400px;
    }
  }
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  text-align: center;

  h1 {
    font-size: 36px;
    margin-bottom: 24px;
  }

  @media only screen and (min-width: 1250px) {
    align-items: baseline;
    margin: 0;

    text-align: left;

    h1 {
      font-size: 48px;
      max-width: 144px;
      margin-bottom: 24px;
    }
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  margin-top: 24px;

  a + a {
    margin-left: 40px;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.light.text};

    :hover {
      transform: color 0.4s;
      color: #8a05be;
    }
  }
`;

export const Portfolio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #e1e1e6;

  padding: 16px 5%;
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
