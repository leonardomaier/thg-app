import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input()
  public title: string = 'Menu Item';

  @Input()
  public iconUrl: string | null = null

  @Input()
  public route: string = '/';
}
