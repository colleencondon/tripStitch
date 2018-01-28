import React from 'react';
import styled from 'styled-components';
import MapContainer from './MapContainer';

const BodyContainer = styled.div`
  width: 100%;
  height: calc(100% - 60px);
`;

const Body = () => (
  <BodyContainer>
    <MapContainer/>
  </BodyContainer>
)

export default Body;