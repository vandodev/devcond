import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;        
        background-Color: #F5F6FA;
        padding: 20px;
    `,
    LoadingIcon: styled.ActivityIndicator``,
    NoListArea: styled.View`
        justify-Content: center;
        align-Items: center;
        padding: 30px;
    `,
    NoListText: styled.Text`
        font-Size: 15px;
        color: #000;
    `,
    List: styled.FlatList`
        flex: 1;
    `,
};