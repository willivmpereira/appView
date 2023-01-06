import { MaterialIcons } from '@expo/vector-icons'; 
import { ButtonFixed } from './style';


export const Favorite = () => {
    return(
        <ButtonFixed>
            <MaterialIcons name="favorite-outline" size={35} color="black" />
        </ButtonFixed>
    )
}