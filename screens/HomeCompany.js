import { View } from 'react-native';
import { Heading, Container, HStack, Avatar, Text } from 'native-base';
import TabsNavigation from '../components/TabsNavigation';
import JobsCardCompany from '../components/JobsCardCompany';

import { ScrollView } from 'react-native';

const HomeCompanyScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <HStack  space="5" alignItems="center">
                <Container  my={5} mx={3}>
                <Heading px={30} mt={10}>Hello</Heading>
                <Heading px={30}>Telkom Sigma</Heading>
                </Container>
                <Container size="16">
                <Avatar mt={5} bg="green.500" size={70} borderRadius={100} source={require("../assets/Icons/sigma.png")}>
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
            <TabsNavigation />
        </View>
    );
};

export default HomeCompanyScreen;