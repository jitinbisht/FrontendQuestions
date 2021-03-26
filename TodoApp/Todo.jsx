import cx from 'classnames';
import { Component } from 'react';

export default class TodoList extends Component {
      constructor(props){
        super();
        this.state={
            taskList: [],
            task: '',
            completed: {},
            count: 0
        }
    }
    handleChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }
    addTask = () => {
        const {task, taskList} = this.state;
        if(task !== ''){
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                value: task,
                isCompleted: false
            };
            this.setState({
                taskList: [...taskList, taskDetails],
                task: ''
            })
        }
    }
    onItemClicked = (index, event) => {
        console.log(index, '===event===')
        this.setState(state=>({
            completed: {...state.completed, [index]: !state.completed[index]},
            count: this.state.completed[index] ? this.state.count + 1 : this.state.count - 1
        }))
    }
    render() {
        const {taskList, completed, itemsSelected} = this.state;
        console.log(this.state.completed, '===completed===')
        const result = this.state.taskList.length + this.state.count;
    console.log(this.state.count, '===count===')
    console.log(result, '===result==')
              
        return (
            <>
                <div>
                    <h2>
                        Todo List
                    </h2>
                </div>
                <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
                <div>
                    <input 
                    type="text" 
                    name="text" 
                    value={this.state.task}
                    id="text" 
                    onChange={(e) => this.handleChange(e)}
                    placeholder="Add Tasks here"
                    />
                    <button onClick={this.addTask}> Add </button>
                </div>
                <p className={"task-counter"}>{result} remaining out of {taskList.length} tasks</p>
              
                {taskList !== [] ? (
                   <ul> 
                   {taskList.map((item, index) => (
                        <li key={item.id} onClick={()=>this.onItemClicked(index)}>
                            <span className={completed[index] ? 'is-done': null}>{item.value}</span>
                        </li>
                   ))}
               
                   </ul> 
                ): null}
            </>
        );
    }
}
