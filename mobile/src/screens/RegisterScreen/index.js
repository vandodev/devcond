import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import C from './style';

import {useStateValue} from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Cadastrar',
    });
  }, []);

  return (
    <C.Container>
      <C.Field
        placeholder="Digite seu CPF"
        keyboardType="numeric"
        value={cpf}
        onChangeText={t => setCpf(t)}
      />

      <C.Field
        placeholder="Digite seu nome completo"
        value={name}
        onChangeText={t => setName(t)}
      />

      <C.Field
        placeholder="Digite seu email"
        value={email}
        onChangeText={t => setEmail(t)}
      />

      <C.Field
        placeholder="Digite sua senha"
        secureTextEntry={true}
        value={password}
        onChangeText={t => setPassword(t)}
      />

      <C.Field
        placeholder="Confirme sua senha"
        secureTextEntry={true}
        value={passwordConfirm}
        onChangeText={t => setpasswordConfirm(t)}
      />

      <C.ButtonArea onPress={null}>
        <C.ButtonText>CADASTRAR-SE</C.ButtonText>
      </C.ButtonArea>
    </C.Container>
  );
};
