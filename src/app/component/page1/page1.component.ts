import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit{

  nombre = '';
  peso: number;
  dieta = '';

  formsDates: FormGroup;

  ngOnInit() {
    this.formsDates = new FormGroup({
      nombre : new FormControl(),
      peso : new FormControl(),
      dieta : new FormControl()
    });
  }

  submit() {
    this.nombre = this.formsDates.get('nombre').value;
    this.peso = this.formsDates.get('peso').value;
    this.dieta = this.formsDates.get('dieta').value;
    if (this.peso <= 30) {
      this.dieta = 'estas bien';
    } else {
      this.dieta = 'estas gordito';
    }
  }
}
