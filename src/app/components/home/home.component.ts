import {Component} from '@angular/core';
import {Comic} from "../../comic";
import {HttpClient} from "@angular/common/http";

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

  constructor(private httpClient: HttpClient) {

  }

  submit() {
    console.log('hallo')
    const comic: Comic = {
      comicTitleEn: this.comicTitleEn,
      comicTitleDe: this.comicTitleDe,
      comicReihe: this.comicReihe,
      volume: this.volume,
      issue: this.issue,
      serialNumber: this.SerielNumber,
      publisher: this.publisher,
      cgcGrade: this.cgcGrade
    }
    this.httpClient.post<Comic>('http://localhost:8080/api/comic',comic).subscribe(item => {
      console.log('Erhalten:', item)


    })
    console.log(comic)
    this.comicTitleEn=''
    this.comicTitleDe = ''
    this.comicReihe= ''
    this.volume= ''
    this.issue= ''
    this.SerielNumber= ''
    this.publisher= ''
    this.cgcGrade= ''

  }
  clear(){
    this.comicTitleEn=''
    this.comicTitleDe = ''
    this.comicReihe= ''
    this.volume= ''
    this.issue= ''
    this.SerielNumber= ''
    this.publisher= ''
    this.cgcGrade= ''

  }

}




















