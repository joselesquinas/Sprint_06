import { Component, OnInit, Input } from '@angular/core';

@Component({
   selector: 'app-escena',
   templateUrl: './escena.component.html',
   styleUrls: ['./escena.component.sass'],
})

export class EscenaComponent implements OnInit {

   public currentSentence: number = 0;

   @Input() titulo: any; // decorate the property with @Input()

   prevTitulo(): void {
      if (this.currentSentence > 0 && this.currentSentence <= 3) {
         this.currentSentence -= 1;
      }
   }

   nextTitulo(): void {
      if (this.currentSentence >= 0 && this.currentSentence < 3) {
         this.currentSentence += 1;
      }
   }

   getUrlimg(){
      let numTxt: string = (this.currentSentence + 1).toString();
      let imagen: string = numTxt+'.jpg';
      return 'url(../../assets/img/' + imagen + ')';
      }

   constructor() { }

   ngOnInit(): void { }

}
