import styled from 'styled-components';

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 90%;

  margin: 16px auto 0 auto;

  > svg {
    width: 30%;
    height: 30%;
  }

  @media only screen and (min-width: 865px) {
    flex-direction: row;

    > svg {
      width: 800px;
      height: 100%;
      max-width: 400px;
    }
  }
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  text-align: center;

  > h1 {
    font-size: 36px;
  }

  @media only screen and (min-width: 865px) {
    align-items: baseline;
    margin: 0;

    text-align: left;

    > h1 {
      font-size: 48px;
      max-width: 144px;
      margin-bottom: 24px;
    }
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  margin-top: 24px;

  @media only screen and (max-width: 1250px) {
    margin-bottom: 24px;
  }

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
  text-align: center;

  background-color: #f3f3f3;

  padding: 16px 5%;

  > h2 {
    margin-bottom: 16px;
  }

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Project = styled.div`
  background-color: #fff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  width: 400px;
  padding: 16px;

  text-align: center;

  > svg {
    width: 100%;
    height: 200px;
  }
`;

export const ProjectDetails = styled.div`
  margin-top: 16px;

  display: flex;
  flex-direction: column;

  h3,
  p {
    margin-bottom: 8px;
  }
`;
