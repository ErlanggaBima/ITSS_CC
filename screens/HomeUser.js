import { View } from 'react-native';
import { Heading, Container, HStack, Center } from 'native-base';
import TabsNavigation from '../components/TabsNavigation';
import JobsCard from '../components/JobsCard';

import { ScrollView } from 'react-native';

const HomeUserScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <HStack  space="5" alignItems="center">
                <Container  my={5} mx={20}>
                <Heading px={30}>Hello</Heading>
                <Heading px={30}>Everald Arther</Heading>
                </Container>
                <Center bg="emerald.400" size="16"></Center>
            </HStack>
            <ScrollView style={{ flex: 1 }} >
                <JobsCard />
                <JobsCard />
                <JobsCard />
                <JobsCard />
                <JobsCard />
                <JobsCard />
                <JobsCard />
            </ScrollView>
            <TabsNavigation />
        </View>
    );
};

export default HomeUserScreen;