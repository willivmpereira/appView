import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { ListItem } from "../../components/LisItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ButtonBack, ButtonFunction, Title } from "./style";
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";

export const ListFavorite = () => {
  useEffect(() => {
    getFavorite();
  }, []);

  const navigation = useNavigation();

  const [data, setData] = useState([]);

  const getFavorite = async () => {
    try {
      const valueFavorite = await AsyncStorage.getItem("resumes");
      const data = valueFavorite ? JSON.parse(valueFavorite) : null;

      setData(data);
      console.log(data);
      // return valueFavorite != null ? JSON.parse(valueFavorite) : null;
    } catch (e) {}
  };

  return (
    <>
      <ButtonBack>
        <ButtonFunction onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </ButtonFunction>
      </ButtonBack>
        <Title>Favoritos</Title>
      <FlatList data={data} renderItem={({ item }) => <ListItem data={item} />} keyExtractor={(item: any) => item.id} />
    </>
  );
};
