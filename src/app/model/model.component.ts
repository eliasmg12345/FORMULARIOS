import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  // C3 crear el objeto que representa el formulario con el nombre que querramos
  // pero que va ser de tipo FormGroup el cual se tiene que importar arriba

  formulario:FormGroup;

  constructor() { 
    // C3 FormGroup recibe como parametro en el cual ponemos como clave 
    // al inicializar los objetos estos tienen que ser tipo FormControl que se tiene
    // que importar ...todos estos controles tienen que tener su referencia en el html
    // ahora en hmtl C4
    this.formulario=new FormGroup({
      nombre: new FormControl(),
      apellidos:new FormControl(),
      edad:new FormControl(),
      dni:new FormControl(),
      password: new FormControl(),
      repite_password: new FormControl(),
      email:new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formulario.value);
  }
}
