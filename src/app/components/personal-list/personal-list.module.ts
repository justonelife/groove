import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalListComponent } from './personal-list.component';



@NgModule({
  declarations: [
    PersonalListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonalListComponent
  ]
})
export class PersonalListModule { }
