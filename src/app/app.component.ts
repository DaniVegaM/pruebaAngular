import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceApiService } from './service-api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pruebaAngular';

  constructor(private apiService: ServiceApiService){

  }

  prueba = 'Hola Mundo';

  dataPsicologos:any = [];
  dataCoach:any = [];
  dataNutriologos:any = [];

  ngOnInit(){
    this.dataPsicologos = this.apiService.generarPsicologos().subscribe( data => {
      this.dataPsicologos = data;
    });

    this.dataCoach = this.apiService.generarCoach().subscribe( data => {
      this.dataCoach = data;
    });
    
    this.dataNutriologos = this.apiService.generarNutriologos().subscribe( data => {
      this.dataNutriologos = data;
    });

    console.log(this.dataPsicologos);
  }
}
