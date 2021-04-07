import styled from 'styled-components';

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  max-width: 1120px;
  padding-right: 16px;
  margin: 16px auto 0 auto;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    padding-bottom: 16px;
    padding-right: 0;

    width: 90%;

    > div:first-child {
      width: 188px;
    }
  }
`;

export const ProfileDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  text-align: left;
  margin: auto;

  > h1 {
    font-size: 48px;
    max-width: 300px;
    margin-bottom: 16px;
  }

  @media only screen and (max-width: 700px) {
    align-items: center;
    text-align: center;

    > h1 {
      font-size: 36px;
      max-width: 100%;
    }
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  margin-top: 16px;

  a + a {
    margin-left: 40px;
  }
`;

export const Portfolio = styled.div`
  text-align: center;
  background-color: #f3f3f3;
  padding: 16px;

  > h2 {
    margin-bottom: 16px;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;

    div + div {
      margin-left: 16px;
      margin-top: 0;
    }
  }

  @media only screen and (max-width: 700px) {
    > div {
      flex-direction: column;
      align-items: center;

      div + div {
        margin-left: 0;
        margin-top: 16px;
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
