import { EmpleadoService } from './Service/service.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

interface tipoDocumento {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl:  './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Prueba';
  form: FormGroup;
  isEditable = false;


  constructor(private formBuilder: FormBuilder, private empleadoService: EmpleadoService, router: Router ) {}

  tipos: tipoDocumento[] = [
    {value: 'cedula', viewValue: 'Cedula'},
    {value: 'tarjetaidentidad', viewValue: 'Tarjeta identidad'},
    {value: 'cedula-extranjeria', viewValue: 'Cedula extranjeria'}
  ];
  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.form = this.formBuilder.group({
      tipoDocumento: ['', Validators.required],
      nombre: ['', Validators.required],
      documento: ['', Validators.required],
      dolorGarganta: ['', Validators.required],
      malestarGeneral: ['', Validators.required],
      dolorHueso:  ['', Validators.required],
      fiebre: ['', Validators.required],
      tos: ['', Validators.required],
      dificultadRespirar: ['', Validators.required],
    });

  }
  create(): void {
    this.empleadoService.addRegistro(this.form.value).subscribe(
    );
  }

}
