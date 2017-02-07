import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MapPage } from '../pages/map/map';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { QuestPage } from '../pages/quest/quest';
import { TabsPage } from '../pages/tabs/tabs';
import { PopoverPage } from '../pages/map/popover';
import { Ng2MapModule } from 'ng2-map';
import { LocationTracker } from '../providers/location-tracker';


@NgModule({
  declarations: [
    MyApp,
    MapPage,
    ContactPage,
    HomePage,
    RegisterPage,
    QuestPage,
    TabsPage,
    PopoverPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    Ng2MapModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    ContactPage,
    HomePage,
    RegisterPage,
    QuestPage,
    TabsPage,
    PopoverPage
  ],
  providers: [LocationTracker, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
