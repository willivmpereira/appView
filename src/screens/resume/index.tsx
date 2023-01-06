import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Button, ScrollView, Text, View } from "react-native";
import data from "../../../data";
import { Favorite } from "../../components/Favorite";
import { api } from "../../services/api";
import logoImg from "../../../assets/not-found.png";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Academic,
  BorderTitle,
  ButtonBack,
  ButtonFunction,
  ButtonFixed,
  Container,
  Especility,
  HeaderContainer,
  InfoContainer,
  Photo,
  Profissional,
  TextBold,
  TextInfo,
  Title,
} from "./style";
import { Back } from "../../components/Back";

export const Resume = () => {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const { userId } = route.params;

  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [click, setClick] = useState(false);

  useEffect(() => {
    getUserData();
  }, [userId, click]);

  const getUserData = async () => {
    const { data: useResume } = await api.get(`customer/service/user/client?loginId=${userId}`);

    const resumes: any = await AsyncStorage.getItem("resumes");

    if (resumes) {
      for (let resume of JSON.parse(resumes)) {
        if (resume.loginId === userId) {
          setClick(true);
        }
      }
    }

    setUserData(useResume.data);
    setLoading(false);
  };

  if (loading) {
    return (
      <Container>
        <ActivityIndicator color={"blue"} size={36} />
      </Container>
    );
  }

  const saveLocal = async (loginId: number) => {
    setClick((state) => !state);

    try {
      let dataResume = new Array();
      const value: any = await AsyncStorage.getItem("resumes");
      const resumes = JSON.parse(value);

      if (!click) {
        if (value) {
          dataResume = JSON.parse(value);
        }

        dataResume.push(userData);

        await AsyncStorage.setItem("resumes", JSON.stringify(dataResume));
      } else {
        const filteredResult = resumes.filter((item: any) => {
          return item.name !== loginId;
        });

        await AsyncStorage.setItem("resumes", JSON.stringify(filteredResult));
      }
    } catch (e) {}
  };

  return (
    <>
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <Container>
          {/* <ButtonBack>
            <ButtonFunction onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </ButtonFunction>
          </ButtonBack> */}
          {userData.photoUrl ? <Photo source={{ uri: userData.photoUrl }} /> : <Photo source={logoImg} />}
          <HeaderContainer>
            <Text>{userData.name}</Text>
            <TextInfo>Desenvolvedor</TextInfo>
            <TextInfo>23 anos</TextInfo>
          </HeaderContainer>

          <InfoContainer>
            <TextInfo>Endereço: {userData.userAddress[0].street}</TextInfo>
            <TextInfo>E-mail: {userData.userAddress[0].email}</TextInfo>
            <TextInfo>Telefone: {userData.userAddress[0].cellphone}</TextInfo>
          </InfoContainer>

          <Academic>
            <Title>Formação Acadêmica</Title>
            <BorderTitle></BorderTitle>
            {userData.userAcademic.map(
              (item: any) => (
                <View key={item.id}>
                  <TextInfo>{item.educationalInstitution}</TextInfo>
                  <TextBold>{item.course}</TextBold>
                </View>
              )
              // <TextInfo>Outubro de 1999 - Em andamento</TextInfo>
            )}
          </Academic>

          <Profissional>
            <Title>Atuação Profissional</Title>
            <BorderTitle></BorderTitle>

            {userData.userProfessional.map((item: any) => (
              <View key={item.id}>
                <TextInfo>{item.institution}</TextInfo>
                <TextBold>{item.position}</TextBold>
              </View>
            ))}
          </Profissional>

          <Especility>
            <Title>Especialidades</Title>
            <BorderTitle></BorderTitle>

            {userData.speciality.map((item: any) => (
              <View key={item.id}>
                <Text>{item.description}</Text>
              </View>
            ))}
          </Especility>
        </Container>
      </ScrollView>
      <ButtonFixed>
        <ButtonFunction onPress={() => saveLocal(userData.loginId)}>
          <MaterialIcons name={click ? "favorite" : "favorite-outline"} size={35} color="black" />
        </ButtonFunction>
      </ButtonFixed>
    </>
  );
};
