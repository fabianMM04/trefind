import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
declare var webkitSpeechRecognition: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('search', {static:true}) busqueda: ElementRef;
  constructor() { }

  ngOnInit() {
    const vSearch = new webkitSpeechRecognition();
      vSearch.lang = "es";
      vSearch.start();
      const b = this.busqueda.nativeElement;
      vSearch.onresult = function(event) {
        // console.log(event);
        b.value = event.results[0][0].transcript;
    }
  }

  prueba(){
    

  }

  loginForm = new FormGroup({
    userName: new FormControl(''),
  });

}
