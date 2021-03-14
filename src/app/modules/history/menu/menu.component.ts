import { Component } from '@angular/core';
import { RoledMenu } from 'gungnir-role-utils';

@Component({
  selector: 'app-menu',
  template: ''
})
export class MenuComponent extends RoledMenu {
  public static getMenuIcon(): string {
    return 'history';
  }

  public static getMenuName(): string {
    return 'Historial';
  }

  public static getLink(): string {
    return '/history';
  }

  public static getSelected(): boolean {
    return true;
  }
}
