import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from './components/Themed';

import { ImageBackground, StyleSheet } from "react-native";

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Basar from './testComponents/Basar';
import TopBar from './testComponents/TopBar';

const image = { uri: "https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" };

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  //const xx = useSafeAreaInsets();

  if (!isLoadingComplete) {
    return null;
  } else {
    /*return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );*/
    return (
      <SafeAreaProvider>
        <ImageBackground source={image}  style={{
          width: '100%', // applied to Image
          height: '100%'
        }} imageStyle={{
          resizeMode: 'contain' // works only here!
        }}>
          <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
            <TopBar />
            <Basar />
          </SafeAreaView>
        </ImageBackground>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
