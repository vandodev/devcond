import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import C from './style';

import {useStateValue} from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  return (
    <C.Container>
      <C.Texto>Tela de login</C.Texto>
    </C.Container>
  );
};
