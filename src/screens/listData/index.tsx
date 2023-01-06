import { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, Text, TextInput, View } from "react-native";
import { ListItem } from "../../components/LisItem";
import { Container, ContainerButtons, FavoriteButton, SubTitle, TextInputContainer, Title } from "./styled";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import results from "../../../result";
import { api } from "../../services/api";
import { useNavigation } from "@react-navigation/native";

export const ListData = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data: userData } = await api.get("customer/service/user/name?name");
    setData(userData.data);
    setLoading(false);
  };

  const onChangeText = (name: string) => {
    setSearchText(name);
  };

  const filteredData = searchText?.length > 0 ? data.filter((item: any) => item.name.toLowerCase().includes(searchText.toLowerCase())) : [];

  if (loading) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  }

  return (
    <>
      <ContainerButtons>
        <FavoriteButton onPress={() => navigation.navigate("favoritos" as never)}>
          <MaterialIcons name="favorite" size={24} color="black" />
        </FavoriteButton>
      </ContainerButtons>
      <Container>
        <Title>Olá visitante!</Title>
        <SubTitle>Bem-vindo à central de informações</SubTitle>
        <TextInputContainer onChangeText={(text) => onChangeText(text)} placeholder="O que você procura?" value={searchText} />
        <FlatList keyExtractor={(item: any) => item.id.toString()} data={filteredData}  renderItem={({ item }) => 
          <ListItem data={item} />
          // <View>
          //   <Text>{item.nome}</Text>
          // </View>
          } 
        />
      </Container>
    </>
  );
};
