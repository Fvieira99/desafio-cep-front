/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useState } from 'react';
import { VscSearch } from 'react-icons/vsc';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import AddressInfo from '../components/AddressInfo';

import StyledButton from '../components/Button';
import StyledForm from '../components/Form';
import IconBox from '../components/IconBox';
import InfoBox from '../components/InfoBox';
import MaskedInput from '../components/Input';
import TextBox from '../components/TextBox';
import apiService from '../services/API';

export default function MainPage() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await apiService.getAddress(cep);
      setAddress(data);
    } catch (error) {
      let text = error.response.data;

      if (error.response.data === 'Blocked by flood') text = 'Bloqueado por excesso requisições.';

      Swal.fire({
        icon: 'error',
        title: 'Oops... Algo deu errado!',
        text,
      }).then(() => {
        setCep('');
        setAddress(null);
      });

      console.log(error);
    }

    setIsLoading(false);
    setCep('');
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
        <MaskedInput
          onChange={(event) => setCep(event.target.value)}
          value={cep}
          mask="99999-999"
          pattern="^[0-9]{5}-[0-9]{3}$"
          disabled={isLoading}
          placeholder="CEP"
          required
        />
        <StyledButton type="submit" disabled={isLoading}>
          {isLoading ? 'Carregando' : 'Enviar'}
        </StyledButton>
      </StyledForm>

      {address ? <AddressInfo address={address} /> : ''}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

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
