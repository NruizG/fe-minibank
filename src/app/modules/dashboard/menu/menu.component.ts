import { Component } from '@angular/core';
import { RoledMenu } from 'gungnir-role-utils';

@Component({
  selector: 'app-menu',
  template: ''
})
export class MenuComponent extends RoledMenu {
  public static getMenuIcon(): string {
    return 'node-expand';
  }

  public static getMenuName(): string {
    return 'Dashboard';
  }

  public static getLink(): string {
    return '/dashboard';
  }

  public static getSelected(): boolean {
    return true;
  }
}
