import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, SafeAreaView } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //state luu text input
      username: '',
      fullname: '',
      pwd: '',
      cfmpwd: '',

      //state luu border color
      borderUsername: 'black',
      borderFullname: 'black',
      borderPassword: 'black',
      borderConfirmPassword: 'black',

      //state luu message
      msgErrorUserName: '',
      msgErrorFullName: '',
      msgErrorPwd: '',
      msgErrorCfmPwd: ''
    }
  }

  renderItem({ item }) {
    return (
      <View style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Image source={{ uri: item.avt }} style={{ width: 50, height: 50, borderRadius: '25%' }} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 20 }}>{item.username}</Text>
          <Text style={{ fontSize: 18, color: '#ccc' }}>{item.email}</Text>
        </View>
      </View>
    )
  }

  render() {
    const data = [
      {
        username: 'Luan',
        email: 'test@gmail.com',
        avt: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      {
        username: 'Luan1',
        email: 'test@gmail.com',
        avt: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      {
        username: 'Luan2',
        email: 'test@gmail.com',
        avt: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      {
        username: 'Luan3',
        email: 'test@gmail.com',
        avt: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      {
        username: 'Luan4',
        email: 'test@gmail.com',
        avt: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      {
        username: 'Luan5',
        email: 'test@gmail.com',
        avt: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      {
        username: 'Luan',
        email: 'test@gmail.com',
        avt: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      {
        username: 'Luan6',
        email: 'test@gmail.com',
        avt: 'https://randomuser.me/api/portraits/men/32.jpg'
      }
    ];

    return (
      <SafeAreaView>
        <FlatList data={data} renderItem={this.renderItem} keyExtractor={({ item, index }) => { return index }} />
      </SafeAreaView>
    );
  }

  validate() {
    //reset state
    this.setState({
      borderUsername: 'black',
      borderFullname: 'black',
      borderPassword: 'black',
      borderConfirmPassword: 'black',
      msgErrorUserName: '',
      msgErrorFullName: '',
      msgErrorPwd: '',
      msgErrorCfmPwd: ''
    })

    //check value 
    if (this.state.username == '') {
      this.setState({
        borderUsername: 'red',
        msgErrorUserName: 'This field is required *'
      })
      return;
    }

    if (this.state.fullname == '') {
      this.setState({
        borderFullname: 'red',
        msgErrorFullName: 'This field is required *'
      })
      return;
    }

    if (this.state.pwd == '') {
      this.setState({
        borderPassword: 'red',
        msgErrorPwd: 'This field is required *'
      })
      return;
    }

    if (this.state.cfmpwd == '') {
      this.setState({
        borderConfirmPassword: 'red',
        msgErrorCfmPwd: 'This field is required *'
      })
      return;
    }

    if (this.state.pwd != this.state.cfmpwd) {
      this.setState({
        borderConfirmPassword: 'red',
        msgErrorCfmPwd: 'This field needs to match password above'
      })
      return;
    }

    //submit du lieu 
    alert("Submit thanh cong");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: "100%"
  },
  labelStyle: {
    width: 140,
    marginTop: 10,
    fontSize: 16
  },
  textInputStyle: {
    borderWidth: 1,
    width: 200,
    height: 40,
    padding: 5
  },
  msgError: {
    color: 'red'
  }
});
