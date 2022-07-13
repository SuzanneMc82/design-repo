import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { SimpleTextComponent } from './simple-text/simple-text.component';
import { ButtonListComponent } from './button-list/button-list.component';
import { InfoListComponent } from './info-list/info-list.component';
import { CardComponent } from './card/card.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent,
    SimpleTextComponent,
    ButtonListComponent,
    InfoListComponent,
    CardComponent,
    InfoPanelComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
