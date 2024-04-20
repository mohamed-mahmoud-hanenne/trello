import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoTrelloComponent } from './Components/todo-trello/todo-trello.component';


const routes: Routes = [
  {path:'',redirectTo:'todotrello',pathMatch:'full'},
  {path:"todotrello",component:TodoTrelloComponent,title:"Trello"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
