import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.backgroundColorByHexString('#cd201f');
      Splashscreen.hide();

      let token = localStorage.getItem('token');
      if (token) this.rootPage = TabsPage;
      else this.rootPage = LoginPage;

    });
  }
}
