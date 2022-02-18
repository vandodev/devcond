import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import C from './style';

import {useStateValue} from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Adicionar uma Ocorrências',
    });
  }, []);

  return <C.Container></C.Container>;
};
