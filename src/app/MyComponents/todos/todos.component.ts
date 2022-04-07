import { Component, OnInit } from '@angular/core';
import {Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  constructor() { 
    const localItem = localStorage.getItem("todos");
    if(localItem == null){
    this.todos = [
      // {
      //   sno:1,
      //   title: "This is title",
      //   desc: "Desscription",
      //   active: true
      // },
      // {
      //   sno:2,
      //   title: "This is title2",
      //   desc: "Desscription2",
      //   active: true
      // },
      // {
      //   sno:3,
      //   title: "This is title3",
      //   desc: "Desscription3",
      //   active: true
      // }
    ];
  }
  else{
    console.log(this.todos)
    this.todos = JSON.parse(localItem);
  }
  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  AddTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  toggleTodo(todo:any){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
