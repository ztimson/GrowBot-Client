import {Component, Input} from "@angular/core";
import {MenuItem} from "../../models/menuItem";

@Component({
  selector: 'menu',
  templateUrl: `./menu.component.html`,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() items: MenuItem[] = [];
}
