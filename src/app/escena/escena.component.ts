import { Component, OnInit, Input } from '@angular/core';

@Component({
   selector: 'app-escena',
   templateUrl: './escena.component.html',
   styleUrls: ['./escena.component.sass']
})

export class EscenaComponent implements OnInit {
   // titulo01 = "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial";

   @Input() titulo:string = ''; // decorate the property with @Input()

   constructor() { }

   ngOnInit(): void {
   }

}
