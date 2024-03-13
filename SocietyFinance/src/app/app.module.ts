import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [Component]
})
export class AppModule { }
