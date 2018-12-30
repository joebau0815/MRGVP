import React from 'react';
import {
  StyleSheet,
  View,
  WebView,
  Text
} from 'react-native';
import { Icons } from 'react-native-fontawesome';
import CustomButton from "../components/CustomButton";
import Vertretungsplan from "../components/Vertretungsplan";

export default class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return{
      title: "Vertretungsplan",
      headerLeft: (
        <CustomButton
          onPress={() => navigation.navigate("Menu")}
          icon={Icons.bars}
          fontStyle={{fontSize: 18, marginLeft: 22, marginTop: 6}}
        />
      )
    }
  }

  state = {
    page: 0,
    pageNr: 1
  }

  pages = {
    0: "Schüler",
    1: "Lehrer"
  }

  render() {
    return (
      <View style={styles.container}>

        <Vertretungsplan page={this.state.page} pageNr={this.state.pageNr} style={styles.vertretungsplan}/>

        <View style={styles.footer}>

          <CustomButton
            onPress={this.switchPage.bind(this)}
            icon={Icons.retweet}
            style={styles.switchPage}
            fontStyle={styles.button}
          >Zum { this.getPageName(this.state.page === 0 ? 1 : 0) }plan</CustomButton>

          <CustomButton
            onPress={this.backward.bind(this)}
            icon={Icons.chevronLeft}
            style={styles.chevron}
            fontStyle={styles.button}
          >Vorige Seite</CustomButton>

          <CustomButton
            onPress={this.forward.bind(this)}
            icon={Icons.chevronRight}
            style={styles.chevron}
            fontStyle={styles.button}
          >Nächste Seite</CustomButton>

        </View>

      </View>
    );
  }

  switchPage(){
    this.setState({
      page: this.state.page === 0 ? 1 : 0,
      pageNr: 1
    })
  }

  forward(){
    this.setState({ pageNr: this.state.pageNr + 1 })
  }

  backward(){
    this.setState({ pageNr: this.state.pageNr <= 1 ? 1 : this.state.pageNr - 1 })
  }

  getPageName(num){
    return this.pages[num]
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  vertretungsplan: {
    marginTop: 5
  },
  footer: {
    flex: 1/14,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 7.5,
    paddingTop: 5,
    borderTopWidth: 1
  },
  button: {
    fontSize: 30,
    color: "#2f95dc",
    textAlign: "center",
  },
  switchPage: {
    flex: 2,
    borderRightWidth: 1
  },
  chevron: { flex: 1 }
});