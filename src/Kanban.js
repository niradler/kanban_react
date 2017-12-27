import React, { Component } from 'react';
import './kanban.css';
import muuriInit from './kanbanLogic';
class Kanban extends Component {
    constructor(props){
        super();
        this.state ={
            boards:[{title:"To do",items:[{text:"Item #"},{text:"Item #"}]},{title:"Working",items:[{text:"Item #"}]},{title:"Done",items:[{text:"Item #"}]}]
        }
        this.updateBoards=this.updateBoards.bind(this);
    }
  componentDidMount(){
    muuriInit(this.updateBoards);
  }
  updateBoards(item){
debugger;
  }
  componentWillMount(){

  }
  render() {
    return (
      <div className="kanban">
      <section className="kanban-section">
    <div className="board">
    {this.state.boards.map((b)=>
    <div className="board-column"  key={b.title}>
    <div className="board-column-header board-column-header-blue">{b.title}</div>
    <div className="board-column-content">
    {b.items.map((item,i)=><div key={b.title + '-' +i} id={b.title + '-' +i} className="board-item"><div className="board-item-content">{item.text}</div></div>)}
    </div>
    </div>
    )}
    </div>
    </section>
      </div>
    );
  }
}

export default Kanban;
