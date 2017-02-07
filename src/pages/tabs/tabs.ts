import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { QuestPage } from '../quest/quest';
import { MapPage } from '../map/map';
import { AvatarPage } from '../avatar/avatar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MapPage;
  tab2Root: any = QuestPage;
  tab3Root: any = AvatarPage;

  constructor() {}
}
