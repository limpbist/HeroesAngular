import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  @Input() nombre: string;
  @Input() peso: string;
  @Input() dieta: string;
  @Input() show: boolean;
}
