import { Image } from "react-native"
import { ButtonContainer, ButtonText, Container, ImageLogo, Message } from "./style"

import { useNavigation } from '@react-navigation/native'
import logoImg from '../../../assets/atomo.png'

export const Welcome = () => {

    const navigation = useNavigation()

    return (
        <Container>
            <ImageLogo resizeMode="center" resizeMethod="auto" source={logoImg}/>
            <Message>Seja bem-vindo</Message>
            <ButtonContainer onPress={ () => navigation.navigate('listagem' as never) }>
                <ButtonText>Continuar</ButtonText>
            </ButtonContainer>
        </Container>
    )
}