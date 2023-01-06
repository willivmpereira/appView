import styled from "styled-components/native";

export const Container = styled.View`
position: relative;
  margin-top: 16px;
`;

export const Photo = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  margin: 25px 16px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 3px;
`;

export const BorderTitle = styled.View`
  width: 50px;
  height: 3px;
  background-color: #0d6efd;
  margin-bottom: 10px;
`;

export const TextInfo = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;

export const TextBold = styled.Text`
  font-weight: 600;
  font-size: 18px;
`;

export const HeaderContainer = styled.View`
  margin: 16px;
`;

export const InfoContainer = styled.View`
  margin: 16px;
`;

export const Academic = styled.View`
  margin: 25px 16px;
`;

export const Profissional = styled.View`
  margin: 25px 16px;
`;

export const Especility = styled.View`
  margin: 25px 16px;
`;

export const ButtonFixed = styled.View`
  position: absolute;
  bottom: 25px;
  right: 25px;
`;

export const ButtonFunction = styled.TouchableOpacity`
`;

export const ButtonBack = styled.View`
  margin-left: 16px;
`;
