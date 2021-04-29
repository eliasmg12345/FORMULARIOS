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
        Validators.minLength(4)
      ]),
      apellidos:new FormControl('',[
        Validators.maxLength(10)
      ]),
      // G3 VALOR YA ASIGNADO SOBRE el campo edad 
      //  ....tenemos que pasar la definicion y no la ejecucion
      edad:new FormControl('',[
        this.edadValidator
      ]),
      // H3 meto elvalidador ....tenemos que pasar la definicion y no la ejecucion
      dni:new FormControl('',[
        this.dniValidator
      ]),
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
  // G2 POR EJEMPLO validamos.. luego si el campo es correcto tengo que devolver 
      // un objeto NULL ...algo que indique al usiuario que esta pasando
      edadValidator(formControl){ 
        const value=formControl.value;
        const max=65;
        const min=21;
        if(value>=min && value<=max){
          return null;
        }else{
          return {edadValidator:{max,min}};
        }
      }
      // H2 le pasaremos el control al cual le vamos a aplicar este algoritmo y 
      // saco el valor (const value) para trabajar comodamente...vamos a tratar la
      // expresion regular / ***/ enJs se lanza conel .test(value) para que nos pase true o false
      //  
     dniValidator(formControl){
       const value=formControl.value;
       const letras='TRWAGMYFPDXBNJZSQVHLCKET';


       if(/^\d{8}[a-zA-Z]$/.test(value)){
         const numero=value.substr(0,value.length-1);
         const letra =value.charAt(value.length-1);
         
         const calculo=numero%23;
        
         const letraSeleccionada=letras.charAt(calculo);
         if(letra.toUpperCase()==letraSeleccionada){
           return null;

         }else{
           return{dniValidator:'la letra no oincide con el numero'};
         }
       }else{
         return{dniValidator:'el dnino tiene buen formato'};
       }

    }
}
