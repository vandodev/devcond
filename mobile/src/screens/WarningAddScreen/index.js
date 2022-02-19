import React, {useState, useEffect} from 'react';
import {launchCamera} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import C from './style';

import {useStateValue} from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();
  const [photoList, setPhotoList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [warnText, setWarnText] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Adicionar uma Ocorrências',
    });
  }, []);

  const handleAddPhoto = async () => {
    launchCamera(
      {
        mediaType: 'photo',
        maxWidth: 1280,
      },
      async response => {
        if (!response.didCancel) {
          setLoading(true);
          let result = await api.addWarningFile(response);
          setLoading(false);
          if (result.error === '') {
            let list = [...photoList];
            list.push(result.photo);
            await setPhotoList(list);
            console.log(result);
          } else {
            alert(result.error);
          }
        }
      },
    );
  };

  const handleDelPhoto = url => {
    let list = [...photoList];
    list = list.filter(value => value !== url);
    setPhotoList(list);
  };

  const handleSaveWarning = async () => {
    if (warnText !== '') {
      const result = await api.addWarning(warnText, photoList);
      if (result.error === '') {
        navigation.navigate('WarningScreen');
      } else {
        alert(result.error);
      }
    } else {
      alert('Descreva a ocorrência');
    }
  };

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
            <C.PhotoAddButton onPress={handleAddPhoto}>
              <Icon name="camera" size={24} color="#000" />
            </C.PhotoAddButton>
            {photoList.map((item, index) => (
              <C.PhotoItem key={index}>
                <C.Photo source={{uri: item}} />
                <C.PhotoRemoveButton onPress={() => handleDelPhoto(item)}>
                  <Icon name="remove" size={16} color="#FF0000" />
                </C.PhotoRemoveButton>
              </C.PhotoItem>
            ))}
          </C.PhotoScroll>
        </C.PhotoArea>
        {loading && <C.LoadingText>Enviando foto...</C.LoadingText>}
        <C.ButtonArea onPress={handleSaveWarning}>
          <C.ButtonText>Salvar</C.ButtonText>
        </C.ButtonArea>
      </C.Scroller>
    </C.Container>
  );
};
