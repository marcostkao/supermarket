import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '.';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, MaterialModule, RouterModule
  ],
  exports: [MaterialModule, HeaderComponent]
})
export class SharedModule { }
