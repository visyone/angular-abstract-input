import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AbstractInputComponent } from './abstracts/input.component';
import { AbstractNgModelComponent } from './abstracts/ng-model.component';
import { InputTextComponent } from './components/input-text.component';
import { InputTextWithLabelComponent } from './components/input-text-with-label.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    AbstractInputComponent,
    AbstractNgModelComponent,
    InputTextComponent,
    InputTextWithLabelComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
