import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CardPage } from '../pages/card/card';
import { FormPage } from '../pages/form/form';
import { ComponentGroupPage } from '../pages/component-group/component-group';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    CardPage,
    FormPage,
    ComponentGroupPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    CardPage,
    FormPage,
    ComponentGroupPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
