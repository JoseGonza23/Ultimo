import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {

  formGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl()
    });
  }

  ngOnInit() {
  }

}



