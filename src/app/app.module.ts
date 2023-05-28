import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotlListComponent } from './hotl-list/hotl-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [AppComponent, HotlListComponent, SidebarComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
