import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotlListComponent } from './hotl-list/hotl-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { NgLocaleLocalization, registerLocaleData } from '@angular/common';


registerLocaleData(localeFr, 'fr')
@NgModule({
    declarations: [AppComponent, HotlListComponent, SidebarComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
