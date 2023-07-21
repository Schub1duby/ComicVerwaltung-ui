import {Component, ElementRef, Renderer2} from '@angular/core';
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

  constructor(private httpClient: HttpClient, private renderer: Renderer2, private el: ElementRef) {

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



  runaway($event: MouseEvent) {
    const newX = Math.floor(Math.random() * (window.innerWidth - 100)) + 'px';
    const newY = Math.floor(Math.random() * (window.innerHeight - 100)) + 'px';

    const button = this.el.nativeElement.querySelector('.runaway-button');

    this.renderer.setStyle(button, 'position', 'absolute');
    this.renderer.setStyle(button, 'left', newX);
    this.renderer.setStyle(button, 'top', newY);
  }
}




















