import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientUiLayoutModule } from './libs/client/ui/layout/client-ui-layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ClientUiLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
