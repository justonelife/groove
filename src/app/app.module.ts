import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerBarModule } from './components/player-bar/player-bar.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavModule } from './components/nav/nav.module';
import { ExploreModule } from './components/explore/explore.module';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlayerBarModule,
    FontAwesomeModule,
    NavModule,
    ExploreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
