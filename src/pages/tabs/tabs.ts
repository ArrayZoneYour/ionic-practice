import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CardPage } from '../card/card';
import { FormPage } from '../form/form';
import { ComponentGroupPage } from '../component-group/component-group';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = FormPage;
  tab3Root: any = ComponentGroupPage;
  tab4Root: any = CardPage;

  constructor() {
  }
}
