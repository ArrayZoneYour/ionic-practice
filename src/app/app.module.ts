import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CardPage } from '../pages/card/card';
import { FormPage } from '../pages/form/form';


import { ComponentGroupPage } from '../pages/component-group/component-group';
import { ModalContentPage as ComponentGroupModalContentPage } from '../pages/component-group/component-group';
import { IconListPage } from '../pages/component-group/component-group';
import { AvatarListPage } from '../pages/component-group/component-group';
import { MultlineListPage } from '../pages/component-group/component-group';
import { SlidingListPage } from '../pages/component-group/component-group';
import { ThumbnailListPage } from '../pages/component-group/component-group'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    CardPage,
    FormPage,
    ComponentGroupPage,
    ComponentGroupModalContentPage,
    IconListPage,
    AvatarListPage,
    MultlineListPage,
    SlidingListPage,
    ThumbnailListPage
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
    ComponentGroupPage,
    ComponentGroupModalContentPage,
    IconListPage,
    AvatarListPage,
    MultlineListPage,
    SlidingListPage,
    ThumbnailListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
