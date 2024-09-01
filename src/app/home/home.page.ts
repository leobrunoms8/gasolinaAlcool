import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  
  public resultado: String = ""
  precoAlcool: any;
  precoGasolina: any;

  calcular() {

    //Validar se os campos foram preenchidos
    if(this.precoAlcool && this.precoGasolina){
      var pAlcool = parseFloat(this.precoAlcool)
      var pGasolina = parseFloat(this.precoGasolina)

      //Calculo

      var rendimento = pAlcool / pGasolina

      if(rendimento >= 0.7){
        this.resultado = "Melhor utilizar gasolina"
      }else{
        
        this.resultado = "Melhor utilizar Álcool"
      }
    }else{
      this.resultado = "Preencha corretamente os campos!"
    }
    
  }
  

  constructor() {}

}
