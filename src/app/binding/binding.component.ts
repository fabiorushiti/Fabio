import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  inputValue: string = '';
  submitted: boolean = false;

  handleClick() {
    this.submitted = true;
    this.inputValue = '';
  }  
}
