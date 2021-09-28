import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '.';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, MaterialModule,
  ],
  exports: [MaterialModule, HeaderComponent]
})
export class SharedModule { }
