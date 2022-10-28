/* eslint-disable react/prop-types */
import styled from 'styled-components';
import InputMask from 'react-input-mask';

const MaskedInput = styled(InputMask)`
  width: 100%;
  height: 40px;

  border-radius: 3px;
  border: none;
  outline: none;

  background-color: #141414;

  color: #ffffff;

  text-indent: 10px;

  font-size: 15px;

  margin-bottom: 10px;

  :focus {
    background-color: #252525;
  }
`;

export default MaskedInput;
