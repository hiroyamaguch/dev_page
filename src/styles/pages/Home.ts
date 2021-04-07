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
  max-width: 1120px;
  padding: 16px 0;
  margin: auto;

  @media only screen and (max-width: 700px) {
    padding: 16px 5%;
  }
`;

export const Projects = styled.ul`
  display: flex;
  flex-wrap: wrap;

  > li {
    display: flex;
    flex-direction: column;

    border-radius: 8px;
    background-color: #fff;

    padding: 16px 24px;
    margin-top: 16px;
    width: 352px;
    height: 352px;

    h3 {
      margin-bottom: 8px;
    }
  }

  > li + li {
    margin-left: 32px;
  }

  > li:nth-child(4n) {
    margin-left: 0;
  }

  @media only screen and (max-width: 700px) {
    > li + li {
      margin-left: 0;
    }
  }
`;
