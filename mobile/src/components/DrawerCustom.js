import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useStateValue} from '../contexts/StateContext';

const DrawerArea = styled.View`
  flex: 1;
  background-color: #fff;
`;
const DrawerLogoArea = styled.View`
  padding: 10px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;
const DrawerLogo = styled.Image`
  width: 190px;
  height: 40px;
`;
const DrawerScroller = styled.ScrollView`
  flex: 1;
  margin: 20px 0;
`;
const ChangeUnitArea = styled.View`
  margin: 10px;
`;
const ChangeUnitButton = styled.TouchableOpacity`
  background-color: #8863e6;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
const ChangeUnitButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
const FooterArea = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const FooterInfo = styled.View``;
const FooterProfile = styled.Text`
  font-size: 15px;
  color: #000;
`;
const FooterUnitText = styled.Text`
  font-size: 15px;
  color: #666e78;
`;
const FooterUnitButton = styled.TouchableOpacity``;
const MenuButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 5px;
  border-radius: 5px;
  align-items: center;
`;
const MenuSquare = styled.View`
  width: 5px;
  height: 35px;
  margin-right: 20px;
  background-color: transparent;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
const MenuButtonText = styled.Text`
  font-size: 15px;
  margin-left: 10px;
  color: #666e78;
`;
export default props => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  const handleChangeUnit = async () => {
        await AsyncStorage.removeItem('property');
        navigation.reset({
            index: 1,
            routes: [{name: 'ChoosePropertyScreen'}]
        })
    }
    
  return (
    <DrawerArea>
      <DrawerLogoArea>
        <DrawerLogo
          source={require('../assets/homelogo.png')}
          resizeMode="contain"
        />
      </DrawerLogoArea>
      <DrawerScroller></DrawerScroller>
      <ChangeUnitArea>
        <ChangeUnitButton onPress={handleChangeUnit}>
          <ChangeUnitButtonText>Trocar Unidade</ChangeUnitButtonText>
        </ChangeUnitButton>
      </ChangeUnitArea>

      <FooterArea>
        <FooterInfo>
          <FooterProfile>Olá {context.user.user.name}</FooterProfile>
          <FooterUnitText>{context.user.property.name}</FooterUnitText>
        </FooterInfo>
        <FooterUnitButton onPress={() => navigation.navigate('UnitScreen')}>
          <Icon name="gear" size={24} color="#666E78" />
        </FooterUnitButton>
      </FooterArea>
    </DrawerArea>
  );
};
