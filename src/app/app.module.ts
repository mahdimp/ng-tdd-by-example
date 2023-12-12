import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { DomElementTestingComponent } from './components/dom-element-testing/dom-element-testing.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { FilterPipe } from './pipes/find.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    DomElementTestingComponent,
    ContentProjectionComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
