import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../services/api';

const Box = styled.View`
  background-color: #fff;
  border-width: 2px;
  border-color: #e8e9ed;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 10px;
`;
const Date = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #9c9db9;
  margin-bottom: 10px;
`;
const Title = styled.Text`
  font-size: 15px;
  color: #000;
`;
const StatusArea = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;
const StatusText = styled.Text`
  font-size: 14px;
  color: #9c9db9;
  margin-left: 10px;
`;

export default ({data}) => {
  return (
    <Box>
      <Date>{data.datecreated}</Date>
      <Title>{data.title}</Title>
      <StatusArea>
        <Icon name="inbox" size={24} color="#8B63E7" />
        <StatusText>
          {data.status === 'IN_REVIEW' && 'Ocorrência em análise'}
          {data.status === 'RESOLVED' && 'Resolvido'}
        </StatusText>
      </StatusArea>
    </Box>
  );
};
