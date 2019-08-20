import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogueBoxComponent } from './dialogue-box/dialogue-box.component';

const routes: Routes = [
  {
    path        : '',
    component: DialogueBoxComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
