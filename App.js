import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import CameraDialog from './app/components/CameraDialog';
import PictureList from './app/components/PictureList';

import fs from 'react-native-fs';

export default function App() {
  const [pictureList, setPictureList] = useState([
    { id: 1, url: 'https://img.cybercook.com.br/imagens/receitas/35/cheesecake-de-frutas-vermelhas-3.jpeg' },
    { id: 2, url: 'https://www.oficinadeinverno.com.br/blog/wp-content/uploads/2015/03/gluten-free-new-york-cheesecake-1450985-hero-01-dc54f9daf38044238b495c7cefc191fa.jpg' },
    { id: 3, url: 'https://naminhapanela.com/wp-content/uploads/2020/07/cheesecake-de-chocolate-2.jpg' },
    { id: 4, url: 'https://www.schaer.com/sites/default/files/styles/header/public/2022_Cheesecake%20de%20frutas%20vermelhas.jpg?itok=rTfbZnqR' }
  ]);
  const [isModalOpen, setisModalOpen] = useState(false)

  async function async() {
    await AsyncStorage.setItem('teste', 'Lucas Rosa 123')
    console.log(await AsyncStorage.getItem('teste'))
  }

  useEffect(() => {
    AsyncStorage.setItem('teste', 'Lucas Rosa 123').then(res => console.log(res))
    console.log(AsyncStorage.getItem('teste').then(res => console.log(res)))
  }, [])

  function onPictureSelect(item) {

  }

  function openModal() {
    setisModalOpen(true)
  }

  function closeModal(response) {
    setisModalOpen(false)
  }

  return (
    <View style={styles.container}>
      <PictureList list={pictureList} onClick={onPictureSelect} />
      <View style={styles.footer}>
        <Button
          onPress={openModal}
          title='Nova Foto'
          color='#0062ac'
        />
      </View>
      <CameraDialog isOpen={isModalOpen} onClose={closeModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

  footer: {
    padding: 15,
    backgroundColor: '#999',
    width: '100%',
    textAlign: 'center',
  }
})