import { Component } from '@angular/core';
import { RoledMenu } from 'gungnir-role-utils';

@Component({
  selector: 'app-menu',
  template: ''
})
export class MenuComponent extends RoledMenu {
  public static getMenuIcon(): string {
    return 'dashboard';
  }

  public static getMenuName(): string {
    return 'General';
  }

  public static getLink(): string {
    return '/overview';
  }

  public static getSelected(): boolean {
    return true;
  }
}
