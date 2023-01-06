import { useNavigation } from "@react-navigation/native";
import { Button, Text, TouchableOpacity } from "react-native";
import { TextName, TouchableOpacityContainer, ViewContainer } from "./style";

export const ListItem = ({ data }: any) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Resume", {
          userId: data.loginId,
        });
      }}
    >
      <ViewContainer>
        <Text style={{ margin: 26 }} >{data.name}</Text>
      </ViewContainer>
    </TouchableOpacity>
  );
};
