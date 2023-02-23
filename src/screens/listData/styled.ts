import styled from "styled-components/native";

export const Title = styled.Text`
    text-align: center;
`

export const SubTitle = styled.Text`
    text-align: center;
`

export const Container = styled.View`
    margin-top: 16px;
    display: flex;
    justify-content: center;
    /* border: solid 1px #000; */
    height: 100%;
`
export const TextInputContainer = styled.TextInput`
    margin: 25px auto;
    width: 90%;
    padding: 8px;
    border: 1px solid #000;
    border-radius: 4px;
`

export const ContainerButtons = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 16px 10px;
    
    
`

export const FavoriteButton = styled.TouchableOpacity`
    
`

export const ListData = styled.View`
    height: 80px;
`

export const List = styled.FlatList`
    text-align: left;
`

export const TouchableOpacityContainer = styled.TouchableOpacity`
    flex-direction: 'row';
    margin-left: 30px;
    margin-right: 30px;
    padding: 5px 0;
    `

export const ViewContainer = styled.View`
    margin-left: 10px;
    `

export const TextName = styled.Text`
    font-size: 18px;
    color: #000;
    margin-bottom: 5px;
    text-align: left;
`