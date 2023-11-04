import React from "react";
import { View } from "react-native";
import { Text, Button, Center, Image } from "native-base";

const AfterAddScreen = ({ navigation }) => {
    return(
        <View>
            <Center mt="50">
                <Image source={require('../assets/Icons/Illustration.png')} alt="">
                </Image>
            </Center>
            <Center mb='30' mt='10'>
                <Text mx='10' textAlign='center'>
                Congratulations </Text>
                <Text>Your job has been added</Text>
            </Center>
            <Button
            mx={60}
            fontWeight={"bold"}
                colorScheme="danger"
                onPress={()=>{
                    console.log('hello') }}

            >
                MAKE ANOTHER JOB
            </Button>

            <Button
            mb='30' mt='5' mx='60'
                colorScheme="danger"
                onPress={()=>{
                    console.log('hello')
                }}

            >
                BACK TO HOME
            </Button>
            
            
        </View>
    );
};

export default AfterAddScreen