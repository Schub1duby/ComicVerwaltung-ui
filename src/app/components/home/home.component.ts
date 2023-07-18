import { Component } from '@angular/core';
import {Comic} from "../../comic";

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


  submit() {
    console.log('hallo')
    const comic: Comic = {
      comicTitleEn: this.comicTitleEn,
      comicTitleDe: this.comicTitleDe,
      comicReihe: this.comicReihe,
      volume: this.volume,
      issue: this.issue,
      SerielNumber: this.SerielNumber,
      publisher: this.publisher,
      cgcGrade: this.cgcGrade
    }
    console.log(comic)
  }
}




















