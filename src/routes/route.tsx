import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './stackNavigator'

export const Routers = () => {

    return(
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    )

}