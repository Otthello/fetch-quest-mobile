import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { QuestPage } from '../pages/quest/quest';
import { TabsPage } from '../pages/tabs/tabs';
import { Ng2MapModule } from 'ng2-map';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    RegisterPage,
    QuestPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    Ng2MapModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    RegisterPage,
    QuestPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
