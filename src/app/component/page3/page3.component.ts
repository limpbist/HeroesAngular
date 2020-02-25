import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component{
  @Input() nombre: string;
  @Input() peso: string;
  @Input() dieta: string;
  @Input() show: boolean;
}
