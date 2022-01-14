import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Winter",
      age: 19,
      img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMjVfMTU2%2FMDAxNjE2NjAwNTcwODU0.bn--RTmdrA-CbyZtklZLiR7uv2TagAqOfNi44hWHyhgg.AXPQiBD8YUr1xlfRcQ4RSSAo9CSuhvaGqUu65Dq3Is0g.JPEG.jjunyoumg7756%2Faespa%25A3%25AD20210319%25A3%25AD235052%25A3%25AD000.jpg&type=sc960_832",
      note: "Hello World",
    },
    {
      name: "Yuri",
      age: 22,
      img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MTdfMzIg%2FMDAxNjAwMzQwMjI5MTQ2.oGdjOFVkRDnS0Eu8ItC6Q4pxD1u2sXCSnf9qU8iegfsg.saTjvSkpH6FKa7vbFMdzWRPD0F7mzLRUUVFTTnCzCPIg.JPEG.248ye%2F1600340228191.jpg&type=sc960_832"
    }
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;