import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import C from './style';

import {useStateValue} from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  const [loading, setLoading] = useState(true);

  const handleLogoutButton = async () => {
    await api.logout();
    navigation.reset({
      index: 1,
      routes: [{name: 'LoginScreen'}],
    });
  };

  return (
    <C.Container>
      <C.Scroller>
        {loading && <C.LoadingIcon color="#8863E6" size="large" />}

        {!loading && context.user.user.properties.length > 0 && (
          <>
            <C.HeadTitle>Olá {context.user.user.name}</C.HeadTitle>
            <C.HeadTitle>Escolha uma das suas propriedades</C.HeadTitle>
          </>
        )}

        {!loading && context.user.user.properties.length <= 0 && (
          <C.BigArea>
            <C.HeadTitle>
              {context.user.user.name}, parabéns pelo cadastro
            </C.HeadTitle>
            <C.HeadTitle>
              Agora a administração precisa liberar o seu acesso!
            </C.HeadTitle>
          </C.BigArea>
        )}
      </C.Scroller>
      <C.ExitButtonArea onPress={handleLogoutButton}>
        <C.ExitButtonText>Sair</C.ExitButtonText>
      </C.ExitButtonArea>
    </C.Container>
  );
};
