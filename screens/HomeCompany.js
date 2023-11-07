import { View,TouchableOpacity } from 'react-native';
import { Heading, Container, HStack, Avatar, Text, Image } from 'native-base';
import TabsNavigationCompany from '../components/TabsNavigationCompany';
import JobsCardCompany from '../components/JobsCardCompany';

import { ScrollView } from 'react-native';

const HomeCompanyScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            {/* <Container paddingTop={45}>
                <TouchableOpacity onPress={() => navigation.navigate('AddJobScreen')}>
                    <Image
                        source={require('../assets/Icons/back.png')} alt="Alternate Text"
                        style={{ width: 19, height: 15, marginLeft: 20 }}
                    />
                </TouchableOpacity>
            </Container> */}
            <HStack  space="5" alignItems="center">
                <Container  my={5} mx={3}>
                <Heading px={30} >Hello</Heading>
                <Heading px={30}>Telkom Sigma</Heading>
                </Container>
                <Container size="20">
                <Avatar bg="green.500" size={70} borderRadius={100} source={require("../assets/Icons/sigma.png")}>
                </Avatar>
                </Container>
            </HStack>
            <Container>
                <Text mx='10' textAlign='center' bold fontSize="md">Recent Application</Text>
            </Container>
            <ScrollView style={{ flex: 1 }} >
                <JobsCardCompany />
                <JobsCardCompany />
                <JobsCardCompany />
                <JobsCardCompany />
                <JobsCardCompany />
                <JobsCardCompany />
                <JobsCardCompany />
            </ScrollView>
            <TabsNavigationCompany navigation={navigation}/>
        </View>
    );
};

export default HomeCompanyScreen;