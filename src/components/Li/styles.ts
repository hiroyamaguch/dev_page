import styled from 'styled-components';

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  p {
    color: #808080;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;

  margin-left: -24px;

  > div {
    background-color: #eec643;

    height: 50px;

    padding: 5px 5px 5px 24px;
    border-radius: 0 25px 25px 0;
  }
`;
