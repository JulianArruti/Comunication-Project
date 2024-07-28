import React, { useEffect, useState } from 'react';
import { Button, View, Text } from 'react-native';

const UsuariosScreen = () => {
  const [usuarios, setUsuarios] = useState(null);

  const handlePress = () => {
    fetch('http://192.168.1.53:8000/usuarios', {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((data) => {
      setUsuarios(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <View>
      <Button title="Cargar usuarios" onPress={handlePress} />
      {usuarios && usuarios.map((usuario) => (
        <Text key={usuario.nombre}>{usuario.nombre}</Text>
      ))}
    </View>
  );
};

export default UsuariosScreen;