import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgTestComponent } from './pages/svg-test/svg-test.component';
import { CssTestComponent } from './pages/css-test/css-test.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgTestComponent,
    CssTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
