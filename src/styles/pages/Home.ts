import styled from 'styled-components';

export const Profile = styled.div`
  display: flex;
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

      min-width: 300px;
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

  @media only screen and (max-width: 865px) {
    margin-bottom: 24px;
  }

  a + a {
    margin-left: 40px;
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
    flex-direction: column;
    align-items: center;

    div + div {
      margin-left: 0;
      margin-top: 16px;
    }
  }

  @media only screen and (min-width: 865px) {
    > div {
      flex-direction: row;
      justify-content: center;

      div + div {
        margin-left: 16px;
        margin-top: 0;
      }
    }
  }
`;

export const Project = styled.div`
  background-color: #fff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  text-align: center;

  max-width: 400px;
  padding: 16px;

  > svg {
    height: 200px;
  }
`;

export const ProjectDetails = styled.div`
  padding-top: 8px;

  display: flex;
  flex-direction: column;

  h3,
  p {
    margin-bottom: 8px;
  }

  p {
    color: #5f5f5f;
  }
`;
