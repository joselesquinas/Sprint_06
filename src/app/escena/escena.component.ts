import { Component, OnInit, Input } from '@angular/core';

@Component({
   selector: 'app-escena',
   templateUrl: './escena.component.html',
   styleUrls: ['./escena.component.sass']
})

export class EscenaComponent implements OnInit {
   // titulo01 = "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial";
    
   public currentSentence: number = 0;
   @Input() titulo: any; // decorate the property with @Input()

   prevTitulo(){
      this.currentSentence -= 1;
   }
   
   nextTitulo(){
      this.currentSentence += 1;
   }

   setUserAnswer(num:number) { }

   constructor() {
    }

   ngOnInit(): void {
   }

}
