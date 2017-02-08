import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MapPage } from '../pages/map/map';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { QuestPage } from '../pages/quest/quest';
import { QuestFormPage } from '../pages/quest_form/quest_form';
import { AvatarPage } from '../pages/avatar/avatar';
import { TabsPage } from '../pages/tabs/tabs';
import { PopoverPage } from '../pages/map/popover';
import { Ng2MapModule } from 'ng2-map';
import { LocationTracker } from '../providers/location-tracker';
import { CheckMarkers } from '../providers/check-markers';
import { Storage } from '@ionic/storage';
import { StorageService } from './services/storage.service';



@NgModule({
  declarations: [
    MyApp,
    MapPage,
    ContactPage,
    HomePage,
    RegisterPage,
    QuestPage,
    TabsPage,
    PopoverPage,
    QuestFormPage,
    AvatarPage

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
    PopoverPage,
    QuestFormPage,
    AvatarPage,
    TabsPage
  ],
  providers: [LocationTracker, Storage, StorageService, CheckMarkers, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
