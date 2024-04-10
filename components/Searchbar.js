import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Searchbar (){
  return(
     <SafeAreaView>
      <TextInput placeholder='Buscar' style= {styles.searchBar}></TextInput>
     </SafeAreaView>
  );
}

export default Searchbar;

const styles = StyleSheet.create({
  searchBar: {
    width: 300,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 8
  },
});
