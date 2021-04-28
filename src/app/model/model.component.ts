import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

    /* D2 si en el paramtro de FormGroup ponemos un valor por defecto no nos da un placeholder
    porque se edita sobre el valor  
    ---para agregar validadores es incluir como segundo parametro un array y dentro de este
    podemos pasar todos los validadores que querramos--luego accedemos a la clase Validators
    que se tiene que importar siempre.....EN fin si uno de los campos nocumple con los
    validadores el formualrio va a ser erroneo....comprobando con estilos de las clases 
    en el => css D3*/

    /* E2 de la clase Validators  usamos el .minLenght que tenemos que pasar el tama;o minimo
    y asi etceteras     */
    this.formulario=new FormGroup({
      nombre: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos:new FormControl('',[
        Validators.maxLength(10)
      ]),
      edad:new FormControl(''),
      dni:new FormControl(''),
      password: new FormControl(''),
      repite_password: new FormControl(''),
      email:new FormControl('',[
        Validators.pattern(/sad/)
      ])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formulario.value);
  }
}
