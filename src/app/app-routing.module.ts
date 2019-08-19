import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DialogueBoxComponent} from "./dialogue-box/dialogue-box.component";

let routes: Routes;
routes = [
  {path: 'dialogue', component: DialogueBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
