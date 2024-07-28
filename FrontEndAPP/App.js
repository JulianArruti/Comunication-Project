import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from './FormScreen';
import UsuariosScreen from './UsuariosScreen';
import { PermissionsAndroid } from 'react-native';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Bienvenido a mi aplicación!</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Ir al formulario"
          onPress={() => navigation.navigate('Form')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Ir al pedido de usuarios"
          onPress={() => navigation.navigate('Usuarios')}
        />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="Usuarios" component={UsuariosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});
