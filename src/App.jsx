import {useState} from "react";
import {Draggable, DragDropContext, Droppable} from '@hello-pangea/dnd'

const initialTodos = [
    {id: 1, text: 'Aprender react'},
    {id: 2, text: 'Aprender JS'},
    {id: 3, text: 'Aprender Vue.js'},
]

export const App = () => {
    const [todos, setTodos] = useState(initialTodos)

    const handleDragEnd = (result) => {
        if (!result.destination) return

        const startIndex = result.source.index
        const endIndex = result.destination.index


    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <h1>TodoApp</h1>
            <Droppable droppableId="todos">{
                (droppableProvided) => (
                    <ul ref={droppableProvided.innerRef}
                        {...droppableProvided.droppableProps}
                    >
                        {todos.map((todo, index) => (
                            <Draggable key={todo.id} draggableId={`${todo.id}`} index={index}>
                                {(draggableProvided) => (
                                    <li ref={draggableProvided.innerRef}
                                        {...draggableProvided.draggableProps}
                                        {...draggableProvided.dragHandleProps}
                                    >{todo.text}</li>

                                )}
                            </Draggable>
                        ))}
                        {droppableProvided.placeholder}
                    </ul>
                )
            }
            </Droppable>
        </DragDropContext>
    )
}
