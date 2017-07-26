import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Array<any> = [
    {
      id: 1,
      name: "Learn components",
      done: false
    },
    {
      id: 2,
      name: "Play beachvalley",
      done: true
    },
    {
      id: 3,
      name: "Learn CSS",
      done: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  removeTodo(todo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }

}
