import React from 'react';
import logo from './checklist.svg';
import './App.css';



class App extends React.Component{

      constructor(props){
        super(props)
        this.state = {
          newItem: "",
          list: []
        };
      }

    addItem(todoValue){
      if (todoValue !== ""){
          const newItem = {
             id: Date.now(),
             value: todoValue,
             isDone: false
          };
          const list = [...this.state.list];
          list.push(newItem);

          this.setState({
            list:list,
            newItem:""
          });
      }

    } 

    deleteItem(id){
      const list = [...this.state.list];
      const updatedlist = list.filter(item => item.id !== id);
      this.setState({list: updatedlist})
    }

    updateInput(input){
      this.setState({newItem: input});
    }



   render(){
     return ( 
        <div>
          <img src={logo} width="200" height="100" className="logo"></img>
          <h1 className="app-title"> My To-Do list</h1>
          <div className="container">
            <h2>Add an Item.</h2>
            <br/>
             <input 
             type="text" 
             className="input-text" 
             placeholder="Write a To-do"
             required
             value={this.state.newItem}
             onChange={e => this.updateInput(e.target.value) }
             >
             </input>
              <button 
              className="add-btn"
              onClick={() => this.addItem(this.state.newItem)}
              disabled={!this.state.newItem.length}
              >Add To Do</button>
              <div className="list">
                <ul>
                  {this.state.list.map(item => {
                     return(
                       <li key={item.id}>
                         <input
                         type="checkbox"
                         name="idDone"
                         checked={this.state.active}
                         onClick={this.handleClick}
                         ></input>
                         {item.value}
                         <button
                          className="btn"
                          onClick= {()=> this.deleteItem(item.id)}
                         >Delete</button>
                       </li>
                     );
                    })}
              
                </ul>
              </div>
            </div>
          </div> 
      );
   }
}

export default App;