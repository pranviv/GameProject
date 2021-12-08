//import React from 'react'
import React, { useEffect, useState } from "react";
//import './App.css'
import { RowSelection } from './components/RowSelection'
// import FieldSelf from './components/FieldSelf'
// import FieldOpponent from './components/FieldOpponent'
// import Opponent from './components/Opponent'
// import Self from './components/Self'
// import Hand from './components/Hand'
import Board from './components/Board'





 function App(props) {
 // class App extends React.Component {

    // state = {
    //   uuid: "",
    //  }
    //  handleCallback = (childData) =>{
    //   this.setState({uuid: childData});
    //   console.log(this.state.uuid);
    // }

    //  componentDidMount() {
    //     console.log(uuid);
    // }

    
  const [data, setData] = useState('');
 // const [testdata, setTestData] = useState('');
  
  const childToParent = (childdata) => {
    setData(childdata);
    console.log(childdata);
  }

  
 
    
    
    //render(){
      return (
        <div>
        <div className='App'>
          <RowSelection childToParent={childToParent}/>
        </div>
        <div>
        <Board parentToChild={data} />

        </div>
        </div>
        
      )
    }
  
  
  
//}

export default App
