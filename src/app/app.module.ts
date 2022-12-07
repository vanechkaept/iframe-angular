import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MarkdownModule } from 'ngx-markdown';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MarkdownModule.forRoot()],
  declarations: [AppComponent, HelloComponent, InputComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
