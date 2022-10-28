import styled from 'styled-components';

const InfoBox = styled.div`
  width: 90%;

  display: flex;
  align-items: center;

  gap: 10px;

  margin-bottom: 40px;

  span {
    color: #bc9864;
    word-wrap: word-break;
    font-size: 15px;
  }

  svg {
    font-size: 20px;
  }

  @media (min-width: 600px) {
    width: 400px;
  }
`;

export default InfoBox;
