// import React, { Component } from 'react';
// import {View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { ImagePicker, Permissions, Camera } from 'expo';

// export default class Home extends Component {

//   state = {
//     hasCameraPermission: null,
//     type: Camera.Constants.Type.back,
//     result: null,
//   };


//   async componentDidMount() {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA);
//     this.setState({ hasCameraPermission: status === 'granted' });
//   }
//   useCameraHandler = async () => {
//     await this.askPermissionsAsync();
//     let result = await ImagePicker.launchCameraAsync({
//       allowsEditing: true,
//       aspect: [4, 3],
//       base64: false,
//     });
//     this.setState({ result });
//   };

//   render() {
    
//     const { hasCameraPermission } = this.state;
//     if (hasCameraPermission === null) {
//       return <View />;
//     } else if (hasCameraPermission === false) {
//       return <Text>No access to camera</Text>;
//     } else {
//       console.log('photo');
//       return (
//         <View style={{ flex: 1 }}>
//           <Camera style={{ flex: 1 }} type={this.state.type}>
//           <Button title="launchCameraAsync" onPress={this.useCameraHandler} />
//             <View
//               style={{
//                 flex: 1,
//                 backgroundColor: 'transparent',
//                 flexDirection: 'row',
//               }}>
//               <TouchableOpacity
//                 style={{
//                   flex: 0.1,
//                   alignSelf: 'flex-end',
//                   alignItems: 'center',
//                 }}
//                 onPress={() => {
//                   this.setState({
//                     type: this.state.type === Camera.Constants.Type.back
//                       ? Camera.Constants.Type.front
//                       : Camera.Constants.Type.back,
//                   });
//                 }}>
//                 <Text
//                   style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
//                   {' '}Flip{' '}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </Camera>
//         </View>
//       );
//     }
//   }

// }
// const styles = StyleSheet.create({
//     input: {
//       width: 350,
//       height: 55,
//       backgroundColor: '#000000',
//       margin: 10,
//       padding: 8,
//       color: '#FFFFFF',
//       borderRadius: 14,
//       fontSize: 18,
//       fontWeight: '500',
//     },
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center'
//     }
//   })
  

import React, { Component } from 'react';
import { Button, Text, ScrollView, StyleSheet } from 'react-native';
import { ImagePicker, Permissions, Constants } from 'expo';

export default class Home extends Component {
  state = {
    result: null,
  };

  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  };

  useLibraryHandler = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: false,
    });
    this.setState({ result });
  };

  useCameraHandler = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: false,
    });
    this.setState({ result });
  };

  render() {
    return (
      <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
        <Button title="Appareil photo" onPress={this.useCameraHandler} />
        <Button
          title="Pellicule"
          onPress={this.useLibraryHandler}
        />
        <Text style={styles.paragraph}>
          {JSON.stringify(this.state.result)}
        </Text>
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    minHeight: 1000,
  },
  paragraph: {
    marginHorizontal: 15,
    marginTop: 30,
    fontSize: 18,
    color: '#34495e',
  },
});


