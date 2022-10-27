/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useState } from 'react';
import { VscSearch } from 'react-icons/vsc';
import styled from 'styled-components';
import Swal from 'sweetalert2';

import StyledButton from '../components/Button';
import StyledForm from '../components/Form';
import IconBox from '../components/IconBox';
import StyledInput from '../components/Input';
import apiService from '../services/API';

export default function MainPage() {
  const [cep, setCep] = useState('');

  console.log(cep);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    try {
      const response = await apiService.getAddress(cep);
      console.log(response);
    } catch (error) {
      let text = error.response.data;

      if (error.response.status) text = 'Bloqueado por excesso requisições.';

      Swal.fire({
        icon: 'error',
        title: 'Oops... Algo deu errado!',
        text,
      }).then(() => setCep(''));

      console.log(error);
    }
  });

  return (
    <Wrapper>
      <h1>Busca CEP</h1>
      <InfoBox>
        <IconBox>
          <VscSearch />
        </IconBox>
        <TextBox>
          <span>Busque endereços e valide CEPs!</span>
          <span>Basta digitar seu CEP no campo abaixo e enviar.</span>
        </TextBox>
      </InfoBox>

      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="cep-input">Digíte seu CEP:</label>
        <StyledInput value={cep} onChange={(event) => setCep(event.target.value)} mask="99999-999" placeholder="CEP" />
        <StyledButton>Enviar</StyledButton>
      </StyledForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  //   justify-content: center;

  h1 {
    font-size: 50px;
    font-weight: 700;

    margin: 40px 0;
  }

  h1,
  label {
    color: #ffffff;
  }
`;

const InfoBox = styled.div`
  width: 30%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin-bottom: 40px;

  span {
    color: #bc9864;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  span {
    color: #ffffff;
  }
`;
