import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatCardModule, MatButtonModule, MatMenuModule, MatListModule, MatIconModule],
  exports: [MatToolbarModule, MatCardModule, MatButtonModule, MatMenuModule, MatListModule, MatIconModule],
})
export class MaterialModule {}
