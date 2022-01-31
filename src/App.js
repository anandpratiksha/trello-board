import { useState } from 'react';
import './App.css';
import List from './components/List';
import Navbar from './components/Navbar';
import store from './components/store'
import StoreApi from './components/storeApi';
import { v4 as uuid } from 'uuid'

function App() {

  const [data, setData] = useState(store);
  // console.log(data);
  const addContent = (content, listId) => {
    // console.log(content, listId);
    const newContentId = uuid();
    // console.log(newContentId);
    const newContent = {
      id: newContentId,
      content,
    };
    const list = data.lists[listId];
    list.cards = [...list.cards, newContent];

    const newState = {
      ...data,
      lists: { ...data.lists, [listId]: list }
    }
    setData(newState);
    // console.log(newState);
  }
  return (
    <StoreApi.Provider value={{ addContent }}>
      <div className="App">
        <Navbar />
        {
          data.listsIds.map((listId) => {
            {/* console.log(data.lists[listId]); */ }
            const list = data.lists[listId];
            return <List list={list} key={listId} />
          })
        }
      </div>
    </StoreApi.Provider>

  );
}

export default App;
