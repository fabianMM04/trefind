import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { async } from '@angular/core/testing';
declare var webkitSpeechRecognition: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('search', {static:true}) busqueda: ElementRef;
  @ViewChild('hackhabla', {static:true}) habla: ElementRef;

  constructor() { }

  ngOnInit() {
    
    
    prueba("Hola soy tu asistente para llenar los formularios, Ingrese usuario a registrar");
    const vSearch = new webkitSpeechRecognition();
      vSearch.lang = "es";
      vSearch.start();
      const b = this.busqueda.nativeElement;
      vSearch.onresult = function(event) {
        // console.log(event);
        const transcript =  event.results[0][0].transcript;
        b.value = transcript;
        
    }
  }

  

  loginForm = new FormGroup({
    userName: new FormControl(''),
  });

}

 function prueba(message){
  console.log("mensaje")

  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  speechSynthesis.speak(speech)
}