import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoaderComponent } from './loader/loader.component';
import { AlertMessagesComponent } from './alert-messages/alert-messages.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { QuadraturaAcquirerComponent } from './quadratura-acquirer/quadratura-acquirer.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    BreadcrumbComponent,
    DashboardComponent,
    LoaderComponent,
    AlertMessagesComponent,
    AccessDeniedComponent,
    QuadraturaAcquirerComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
