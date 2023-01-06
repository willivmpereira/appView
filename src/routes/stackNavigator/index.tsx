import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../../screens/welcome";
import { ListData } from "../../screens/listData";
import { ListFavorite } from "../../screens/listFavorites";
import { Resume } from "../../screens/resume";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ 
        
     }}>
      <Stack.Screen name="Welcome" options={{
        title: "Bem-vindo"
      }} component={Welcome} />
      <Stack.Screen name="listagem" options={{
        title: "Listagem"
      }} component={ListData} />
      <Stack.Screen name="favoritos" options={{
        title: "Favoritos"
      }} component={ListFavorite} />
      <Stack.Screen name="Resume" options={{
        title: "Resumo"
      }} component={Resume} />
    </Stack.Navigator>
  );
};
