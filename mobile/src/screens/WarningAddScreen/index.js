import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import C from './style';

import {useStateValue} from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  const [warnText, setWarnText] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Adicionar uma Ocorrências',
    });
  }, []);

  return (
    <C.Container>
      <C.Scroller>
        <C.Title>Descreva a ocorrência</C.Title>
        <C.Field
          placeholder="Ex: Vizinho X está com som alto"
          value={warnText}
          onChangeText={t => setWarnText(t)}
        />
        <C.Title>Fotos relacionadas</C.Title>
        <C.PhotoArea>
          <C.PhotoScroll horizontal>
            <C.PhotoAddButton onPress={null}>
              <Icon name="camera" size={24} color="#000" />
            </C.PhotoAddButton>
          </C.PhotoScroll>
        </C.PhotoArea>
        <C.ButtonArea onPress={null}>
          <C.ButtonText>Salvar</C.ButtonText>
        </C.ButtonArea>
      </C.Scroller>
    </C.Container>
  );
};
