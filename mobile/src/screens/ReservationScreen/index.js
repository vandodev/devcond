import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import C from './style';

import {useStateValue} from '../../contexts/StateContext';
import api from '../../services/api';

import DocItem from '../../components/DocItem';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Reservas disponíveis',
    });
  }, []);

  return (
    <C.Container>
      <C.Scroller>
        <C.ButtonArea onPress={null}>
          <C.ButtonText>Minhas Reservas</C.ButtonText>
        </C.ButtonArea>

        <C.Title>Selecione uma Área</C.Title>

        {loading && <C.LoadingIcon size="large" color="#8863E6" />}

        {!loading && list.length === 0 && (
          <C.NoListArea>
            <C.NoListText>Não há áreas disponiveis</C.NoListText>
          </C.NoListArea>
        )}
      </C.Scroller>
    </C.Container>
  );
};
