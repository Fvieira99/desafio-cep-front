/* eslint-disable react/prop-types */
import { BsMailbox } from 'react-icons/bs';
import { GiPositionMarker } from 'react-icons/gi';
import { FaCity } from 'react-icons/fa';
import { GrMap } from 'react-icons/gr';
import { MdMapsHomeWork } from 'react-icons/md';

import React from 'react';
import styled from 'styled-components';
import IconBox from './IconBox';
import InfoBox from './InfoBox';
import TextBox from './TextBox';

export default function AddressInfo({ address }) {
  return (
    <AddressBox>
      <InfoBox>
        <IconBox>
          <GiPositionMarker />
        </IconBox>
        <TextBox>
          <span>{`Logradouro: ${address.address}`}</span>
        </TextBox>
      </InfoBox>

      <InfoBox>
        <IconBox>
          <MdMapsHomeWork />
        </IconBox>
        <TextBox>
          <span>{`Bairro: ${address.district}`}</span>
        </TextBox>
      </InfoBox>

      <InfoBox>
        <IconBox>
          <FaCity />
        </IconBox>
        <TextBox>
          <span>{`Cidade: ${address.city}`}</span>
        </TextBox>
      </InfoBox>

      <InfoBox>
        <IconBox>
          <GrMap />
        </IconBox>
        <TextBox>
          <span>{`Estado: ${address.state}`}</span>
        </TextBox>
      </InfoBox>

      <InfoBox>
        <IconBox>
          <BsMailbox />
        </IconBox>
        <TextBox>
          <span>{`CEP: ${address.code}`}</span>
        </TextBox>
      </InfoBox>
    </AddressBox>
  );
}

const AddressBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
