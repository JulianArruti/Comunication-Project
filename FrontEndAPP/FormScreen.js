import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const FormScreen = () => {
  const [data, setData] = useState({ fecha: '', nombre: '', fechaNacimiento: '', edad: '' });

  const handleChange = (name, value) => {
    setData(prevState => ({ ...prevState, [name]: value }));
  };

  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    fetch('http://192.168.1.53:8000/usuarios', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error de red: ' + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Éxito:', data);
      Alert.alert('Usuario creado con éxito');
    })
    .catch((error) => {
      console.error('Error:', error);
      console.log(error.message);
    });
  };  

  return (
    <View>
      <Text style={{ color: '#1D3D47', fontSize: 20}}>Formulario de Usuario</Text>
      <TextInput style={styles.textStyle} placeholder="Fecha" onChangeText={value => handleChange('fecha', value)} />
      <TextInput style={styles.textStyle} placeholder="Nombre" onChangeText={value => handleChange('nombre', value)} />
      <TextInput style={styles.textStyle} placeholder="Fecha de Nacimiento" onChangeText={value => handleChange('fechaNacimiento', value)} />
      <TextInput style={styles.textStyle} placeholder="Edad" onChangeText={value => handleChange('edad', value)} />
      <Button title="Enviar" color="#1D3D47" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    margin:10,
    padding: 10
  }
})
export default FormScreen;