/**
 * Created by boris on 7/22/2017.
 */
import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'
class TodoStore extends EventEmitter {
    constructor() {
        super()
        //Normally the data will come from an external source (e.g. server) not hard-coded
        this.todos = [
            {id: 1, title: 'Go shopping', completed: false},
            {id: 2, title: 'Go walking', completed: false}
        ]
    }

    getAll() {
        //this.todos.slice(0) - Returns a copy of the array
        return new Promise((resolve, reject) => {
            resolve(this.todos.slice(0))
        })
    }

    createTodo(title) {
        const id = this.todos.length + 1
        this.todos.push({
            id,
            title,
            completed: false
        })
        //emitting an event so that actions can subscribe to it
        this.emit('change')
    }

    completeTodo(id) {
        for (let todo of this.todos) {
            if (todo.id === id) {
                todo.completed = true
            }
        }
        this.emit('change')
    }

    handleAction(action) {
        switch (action.type) {
            case 'CREATE_TODO': {
                this.createTodo(action.title)
                break
            }
            case 'COMPLETE_TODO':{
                this.completeTodo(action.id)
                break
            }
            default: {
                throw new Error('No action matched')
            }
        }
    }
}
let todoStore = new TodoStore()
//Registering store in dispatcher and binding handleAction's this like we do on events in the view
dispatcher.register(todoStore.handleAction.bind(todoStore))
export default todoStore