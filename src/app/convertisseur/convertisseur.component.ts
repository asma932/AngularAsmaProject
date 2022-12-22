import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.css']
})
export class ConvertisseurComponent implements OnInit {
Montant! : number;
MontantConvert! : number;
  constructor() { }

  recap(e : any){
    this.MontantConvert = e;
  }
  ngOnInit(): void {
  
  }

}
