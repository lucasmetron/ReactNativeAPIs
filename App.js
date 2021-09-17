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

import fs, { write, copyFile, moveFile, readFile, unlink } from 'react-native-fs';

export default function App() {
  const [pictureList, setPictureList] = useState([
    { id: 1, url: 'https://img.cybercook.com.br/imagens/receitas/35/cheesecake-de-frutas-vermelhas-3.jpeg' },
    { id: 2, url: 'https://www.oficinadeinverno.com.br/blog/wp-content/uploads/2015/03/gluten-free-new-york-cheesecake-1450985-hero-01-dc54f9daf38044238b495c7cefc191fa.jpg' },
    { id: 3, url: 'https://naminhapanela.com/wp-content/uploads/2020/07/cheesecake-de-chocolate-2.jpg' },
    { id: 4, url: 'https://www.schaer.com/sites/default/files/styles/header/public/2022_Cheesecake%20de%20frutas%20vermelhas.jpg?itok=rTfbZnqR' }
  ]);
  const [isModalOpen, setisModalOpen] = useState(false)



  useEffect(() => {
    const path = fs.DocumentDirectoryPath + '/text.txt' //DocumentDirectoryPath pega o caminho do diretório de arquivos do próprio app
    // writeFile(path, 'Texto dentro do arquivo', 'utf8') criou arquivo no caminho passado no formato txt e com conteudo 'Texto dentro ...'

    readFile(path, 'utf8').then(res => console.log(res))
    moveFile(path, newPath)//mover o arquivo para outro caminho 
    copyFile(path, dest) //copiar o arquivo e salvar no novo destino 
    unlink(path) //remove o arquivo no caminho que foi passado 

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