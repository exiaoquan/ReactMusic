import React, { Component } from 'react';
import './assest/style/common.less';
import SearchPage from './components/search'
class App extends Component {
  render() {
    return (
      <div className="App" id="app">
       <SearchPage />
      </div>
    );
  }
}
export default App;
