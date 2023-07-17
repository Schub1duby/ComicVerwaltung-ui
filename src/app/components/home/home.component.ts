import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  comicTitleEn: string = ''
comicTitleDe: string = ''
  comicReihe: string = ''
  volume: string = ''
  issue: string = ''
  SerielNumber: string = ''
  publisher: string = ''
  cgcGrade: string = ''


  submit(){
    console.log('hallo')

  }


}
