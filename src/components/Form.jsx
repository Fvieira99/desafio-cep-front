import styled from 'styled-components';

const StyledForm = styled.form`
  width: 90%;
  height: 200px;

  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 10px;
  }

  @media (min-width: 600px) {
    width: 400px;
  }
`;

export default StyledForm;
