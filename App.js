import React, {Component} from 'react';
import { Provider, connect } from 'react-redux';
import { store } from './store';
import AppLayout from './src/app';
type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <Provider 
        store={store}
      >
        <AppLayout />
      </Provider>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//       selectedMovie: state.selectedMovie
//   }
// }

export default App