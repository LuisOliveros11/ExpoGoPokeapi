import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput } from 'react-native';
import Titulo from './components/Titulo';
import Searchbar from './components/Searchbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo></Titulo>
      <Searchbar></Searchbar>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
