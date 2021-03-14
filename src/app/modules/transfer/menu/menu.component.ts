import { Component } from '@angular/core';
import { RoledMenu } from 'gungnir-role-utils';

@Component({
  selector: 'app-menu',
  template: ''
})
export class MenuComponent extends RoledMenu {
  public static getMenuIcon(): string {
    return 'transaction';
  }

  public static getMenuName(): string {
    return 'Transferir';
  }

  public static getLink(): string {
    return '/transfer';
  }

  public static getSelected(): boolean {
    return true;
  }
}
