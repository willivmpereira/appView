import { Button } from "./style"
import { Ionicons } from '@expo/vector-icons'; 

export const Back = () => {
    return (
        <Button>
            <Ionicons name="arrow-back" size={24} color="black" />
        </Button>
    )
}