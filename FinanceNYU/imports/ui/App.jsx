<<<<<<< HEAD
import React, { Component } from 'react';
 
import Task from './Task.jsx';
 
// App component - represents the whole app
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }
 
  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
=======
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';

// App component - represents the whole app
class App extends Component {
   handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
  
  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />


    ));
  }

>>>>>>> 00884df05367442d6d4b58cfe1e0fb2be1b3008f
  render() {
    return (
      <div className="container">
        <header>
<<<<<<< HEAD
          <h1>Todo List</h1>
        </header>
 
=======
          <h1>Profile</h1>

          <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks"
            />
          </form>

        </header>

>>>>>>> 00884df05367442d6d4b58cfe1e0fb2be1b3008f
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
<<<<<<< HEAD
}
=======
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
      tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
}, App);
>>>>>>> 00884df05367442d6d4b58cfe1e0fb2be1b3008f
