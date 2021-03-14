import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role, RoledSubmodule, RoleModuleService } from 'gungnir-role-utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isCollapsed = false;
  public items = [];
  public mockRole = new Role({
    id: 0,
    name: 'admin',
    permissions: {},
    admin: true
  });

  constructor(
    private moduleService: RoleModuleService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.moduleService.setRole(this.mockRole);
    const modules = this.moduleService.getAuthorizedModules();
    for (const module of modules) {
      const menu = module.getMenuView();
      if (menu) {
        if (this.getRoute() === menu.getLink()) {
          this.items.push({
            icon: menu.getMenuIcon(),
            title: menu.getMenuName(),
            route: menu.getLink(),
            submodules: this.moduleService.getAuthorizedSubmodules(module, this.mockRole).map((submodule: RoledSubmodule) => {
              return {
                title: submodule.getMenuName(),
                route: submodule.getLink(),
                selected: true
              };
            }),
            selected: true
          });
        } else {
          this.items.push({
            icon: menu.getMenuIcon(),
            title: menu.getMenuName(),
            route: menu.getLink(),
            submodules: this.moduleService.getAuthorizedSubmodules(module, this.mockRole).map((submodule: RoledSubmodule) => {
              return {
                title: submodule.getMenuName(),
                route: submodule.getLink(),
                selected: true
              };
            }),
            selected: false
          });
        }
      }
    }
  }

  public change(element: any): void {
    this.router.navigate([element]);
  }

  public getRoute(): string {
    return this.router.url;
  }

  public logOut(): void {
    localStorage.clear();
    window.location.reload();
  }
}
