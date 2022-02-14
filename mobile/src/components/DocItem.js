import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../services/api';

const Box = styled.TouchableOpacity`
  background-color: #fff;
  border-width: 2px;
  border-color: #e8e9ed;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
`;

export default ({data}) => {
  const handleClick = async () => {};

  return (
    <Box onPress={handleClick}>
      <Icon name="file-text" size={30} color="#8B63E7" />
      <Title>{data.title}</Title>
    </Box>
  );
};
