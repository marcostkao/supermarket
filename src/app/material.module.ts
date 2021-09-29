import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatCardModule, MatButtonModule],
  exports: [MatToolbarModule, MatCardModule, MatButtonModule],
})
export class MaterialModule {}
