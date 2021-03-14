import { Component } from '@angular/core';
import { RoledMenu } from 'gungnir-role-utils';

@Component({
  selector: 'app-menu',
  template: ''
})
export class MenuComponent extends RoledMenu {
  public static getMenuIcon(): string {
    return 'swap';
  }

  public static getMenuName(): string {
    return 'Depositar/Retirar';
  }

  public static getLink(): string {
    return '/transaction';
  }

  public static getSelected(): boolean {
    return true;
  }
}
