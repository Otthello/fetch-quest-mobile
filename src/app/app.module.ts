import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MapPage } from '../pages/map/map';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register'
import { TabsPage } from '../pages/tabs/tabs';
import { Ng2MapModule } from 'ng2-map';


@NgModule({
  declarations: [
    MyApp,
    MapPage,
    ContactPage,
    HomePage,
    RegisterPage,
    TabsPage
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
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
