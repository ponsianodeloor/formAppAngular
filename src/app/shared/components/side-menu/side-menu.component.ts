import { Component } from '@angular/core';
import {MenuItemInterface} from "../../interfaces/MenuItem.interface";

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public reactiveMenu: MenuItemInterface[] = [
    { title: 'Basic', route: './reactive/basic' },
    { title: 'Dynamic', route: './reactive/dynamic' },
    { title: 'Register', route: './reactive/register' },
    { title: 'Switches', route: './reactive/switches' }
  ];

  public authMenu: MenuItemInterface[] = [
    { title: 'Login', route: './auth/login' },
    { title: 'Register', route: './auth/sign-up' }
  ];

}
