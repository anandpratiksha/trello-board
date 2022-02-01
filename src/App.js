import { useState } from 'react';
import './App.css';
import List from './components/List';
import Navbar from './components/Navbar';
import store from './components/store'
import StoreApi from './components/storeApi';
import { v4 as uuid } from 'uuid'
import { DragDropContext } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
  root: {
    overflowY: 'auto',
    minHeight: '100vh',
    background: 'rgb(0, 121, 191);',
    width: '100%',
  },
}));

function App() {
  const classes = useStyle();
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

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    console.log({ destination, source, draggableId });

    if (!destination) {
      return;
    }
    if (type === 'list') {
      const newListIds = data.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newSate);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };

  return (
    <StoreApi.Provider value={{ addContent }}>
      <div className={classes.root}>
        <Navbar />
        <DragDropContext onDragEnd={onDragEnd}>
          {
            data.listsIds.map((listId, index) => {
              {/* console.log(data.lists[listId]); */ }
              const list = data.lists[listId];
              return <List list={list} key={listId} index={index} className={classes.display} />
            })
          }
        </DragDropContext>
      </div>
    </StoreApi.Provider>

  );
}

export default App;
