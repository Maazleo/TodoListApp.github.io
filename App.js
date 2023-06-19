import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView,Platform } from 'react-native';
import Task from './components/Todo';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  
  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todo Tasks App</Text>
        <View style={styles.items}>    
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
          
        </View>
      </View>
        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "windows" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Enter a new task you want to do'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  tasksWrapper: {
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: 'bold'
    
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: 'black',
    borderWidth: 2,
    width: 250,
  },
  addWrapper: {
    width: 40,
    height: 40,
    backgroundColor: '',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 4,
  },
  addText: {},
});








// import react, {useState} from 'react'
// import {View,Text,StyleSheet,KeyboardAvoidingView,TouchableOpacity,TextInput,Platform} from 'react-native'
// import Todo from './components/Todo'

// export default function TodoApp()
// {
//   const [task,settask]=useState();
//   const [taskitems,settaskitems]=useState([]);
//   const addtext=()=>{
//       Keyboard.dismiss();
//       settaskitems([...taskitems,task])
//       settask(null);
//   }

//   return(
//     <View style={styles.first}>
//         <View >
//             <Text style={styles.second}>Todo List</Text>
//                 <View style={styles.items}>
//                     {
//                       taskitems.map((item,index)=>{
//                        return (<Todo key={index} text={item}/>)
//                       })
//                     }
                    
                   
//                 </View>
//         </View>

//       <KeyboardAvoidingView
//       behavior={Platform.IOS === "ios"?"padding":"height"}
//       style={styles.writeTaskWrapper}
//       >
//       <TextInput style={styles.input} placeholder={'Write a task to enter'} value={task} onChangeText={(text)=>settask(text)} />

//       <TouchableOpacity onPress={()=>addtext()}>
//       <View style={styles.addwrapper}>
//         <Text style={styles.addtexts}> * </Text>
//       </View>
//       </TouchableOpacity>
//       </KeyboardAvoidingView>
//     </View>
//   )
  
// }
// const styles=StyleSheet.create({
//   first:{
//       backgroundColor:'#EBEAED',
//       flex:1,
//       allignItems:'',
//       //justifyContent:'center',
//       textWrap:'wrap',
//       paddingTop:50,
//       paddingLeft:30,
//   },
//   second:{
//       fontSize:30,
//       fontStyle:'bold',
//       fontWeight:'bold',
//       allignItems:'center',
//       justifyContent:'center',
//       textWrap:'wrap'
//   },
//   items:{
//     marginTop:30
//   },
//   writeTaskWrapper:{
//     position:'absolute',
//     paddingRight:25,
//     bottom:30,
//     width:'100%',
//     flexDirection:'row',
//     justifyContent:'space-around',
//     allignItems:'center',
//     textWrap:'wrap'
    
//   },
//   input:{
//     paddingVertical:15,
//     paddingHorizontal:10,
//     backgroundColor:'#FFF',
//     borderRadius:90,
//     borderColor:'black',
//     borderWidth:3,
//     width:220,
//   },
//   addwrapper:{
//     width:50,
    
//     height:50,
//     backgroundColor:'#FFF',
//     borderRadius:60,
//     justifyContent:'center',
//     allignItems:'center',
//     borderColor:'black',
//     borderWidth:3,
//   },
//   addtexts:{
//     fontSize:25,
//     paddingbottom:20,
//     marginTop:10,
//     marginLeft:10,
//     allignItems:'center',
//     justifyContent:'center',
    
//   }
  
// });