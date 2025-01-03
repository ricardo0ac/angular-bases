import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/components/counter/counter.component';
import { HeroesModule } from './heroes/heroes.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CounterComponent,
    HeroesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
