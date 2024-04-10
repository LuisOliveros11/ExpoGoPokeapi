import { StyleSheet, Text } from 'react-native';

function Titulo (){
    return(
        <Text style={styles.titulo}>Pokeapi</Text>
    );
}

export default Titulo;

const styles = StyleSheet.create({
    titulo: {
      fontSize: 50,
      color: 'red',
      fontWeight: 'bold',
      marginTop: 80
    }
  });