import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Constants, Audio } from 'expo';

const playSound = async(note) => {
  console.log(note, 'note')
  await Audio.setIsEnableAsync(true);
  let sound = new Audio.Sound();
  await sound.loadAsync({
    url: `https://raw.githubusercontent.com/NestorPlasencia/sound/master/${note}.mp3`
  })
}
const Note = (props) => {
  const {color, width, name, click, backgroundColor} = props;
  return(
    <TouchableOpacity 
      style={[styles.note, {width, backgroundColor}]}  
      onPress={ () => playSound(name)}
    >
      <Text>{name}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  note: {
    //backgroundColor: 'pink',
     height: 50,
     //width: 200,
     alignItems: 'center',
     justifyContent: 'center',
     margin: 4,
     borderRadius: 10,
  }
});

export default Note;