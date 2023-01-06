import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px;
`

export const ImageLogo = styled.Image`
  display: flex;
  justify-content: center;
  align-items: center;
    
`

export const Message = styled.Text`
    color: #000;
    font-size: 24px;
    text-align: center;
`

export const ButtonContainer = styled.TouchableHighlight`
    background: #000;
    width: 250px;
    margin: 16px auto;
    padding: 10px;
    border-radius: 16px;
`

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 18px;
    text-align: center;
`