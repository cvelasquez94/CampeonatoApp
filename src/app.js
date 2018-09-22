import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import PositionsTable from './positionsTable/positionsTable';
import { TabView, TabBar, SceneMap} from 'react-native-tab-view';
import API from '../utils/api';
const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);
class AppLayout extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'positions', title: 'Tabla de Posiciones' },
      { key: 'second', title: 'Second' },
    ],
  };

  async componentDidMount() {
    const positionsTableList = await API.getPositionsTable();
    this.props.dispatch({
      type: 'SET_POSITONSTABLE_LIST',
      payload: {
        positionsTableList
      }
    })
  }

  render() {
    return (
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            positions: PositionsTable,
            second: SecondRoute,
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        paddingTop: 20
      },
      android: {}
    }),
  },
  title: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center'
  }
});

// function mapStateToProps(state) {
//   return {
//       selectedMovie: state.selectedMovie
//   }
// }

export default connect(null)(AppLayout)