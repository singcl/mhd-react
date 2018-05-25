import React from 'react'
import Footer from '../components/Footer.jsx'
import AddTodo from '../containers/AddTodo.jsx'
import UndoRedo from '../containers/UndoRedo.jsx'
import VisibleTodoList from '../containers/VisibleTodoList.jsx'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <UndoRedo />
    </div>
)

export default App
