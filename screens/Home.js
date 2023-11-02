import React from "react";
import {View} from "react-native"
import { Text,  Box, Center } from "native-base";

const HomeScreen = ({ navigation }) => {
    return(
        <View>   
            <Box
          p={"4"}
          borderBottomColor={"coolGray.300"}
          borderBottomWidth={1}
          flexDirection="row"
          flex={1}
        >
          <Box flex={1} mr={"4"}>
            {/* <Image
              source={{ uri: item.image }}
              w="full"
              h="full"
              alt="Image Data"
            /> */}
          </Box>
          <Box flex={1.8}>
            {/* <Text fontSize={"sm"}>{item.date}</Text>
            <Heading lineHeight={"md"} fontSize={"md"}>
              {item.title}
            </Heading> */}
          </Box>
        </Box>
        </View>
    );
};

export default HomeScreen;