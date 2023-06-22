import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MattableComponent } from './mattable/mattable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationComponent } from './pages/location/location.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DisplayhistComponent } from './pages/displayhist/displayhist.component';
// import { NgModule } from '@angular/compiler/src/core';

@NgModule({
  declarations: [
    AppComponent,
    MattableComponent,
    LocationComponent,
    DisplayhistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
