import * as React from 'react';
import Note from './components/Note/Note.js';

import { View, StyleSheet } from 'react-native';

const notes = [
  {
    name: "A",
    color: "#FF530D"
  },
    {
    name: "B",
    color: "#E82C0C"
  },
  {
    name: "C",
    color: "#FF0000"
  },
  {
    name: "C2",
    color: "#E80C7A"
  },
  {
    name: "D",
    color: "#FF0DFF"
  },
  {
    name: "E",
    color: "#812DE8"
  },
  {
    name: "F",
    color: "#8671E8"
  }
];

let width = 300;

const noteGenerator = (notes) =>{
  return(
    notes.map((note)=> {
        width = width-30;
        return (
            <Note name={note.name} backgroundColor={note.color} width={width} />
        )
      })
  )
}

const App = () => {
  return (
    <View  style={styles.content}>
      {noteGenerator(notes)}
    </View>
  )
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'black',
     height: '50',
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
  }
});

export default App;