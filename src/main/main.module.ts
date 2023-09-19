import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [MainComponent],
  bootstrap : [MainComponent]
})
export class MainModule { }