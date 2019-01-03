import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  pickFile(e) {
    let fileName = e.target.files[0].name;
    axios.put(`/campaigns?name=${fileName}`).then(() => {
      window.alert(`${fileName} was uploaded!`)
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <h1>FTP Client</h1>
        <input type="file" onChange={(e) => this.pickFile(e)} />
      </div>
    );
  }
}

export default App;
