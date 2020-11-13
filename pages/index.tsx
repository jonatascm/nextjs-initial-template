import ToggleDarkMode from './components/ToggleDarkMode/ToggleDarkMode';
import { useColorModeValue, Center } from '@chakra-ui/core';

//import setupAnalyticsService from '../lib/analytics-service'
// NEXT_PUBLIC_ANALYTICS_ID can be used here as it's prefixed by NEXT_PUBLIC_
// setupAnalyticsService(process.env.NEXT_PUBLIC_ANALYTICS_ID)

export default function Home() {
  return (
    <Center h="100vh">
      <ToggleDarkMode />
    </Center>
  );
}
