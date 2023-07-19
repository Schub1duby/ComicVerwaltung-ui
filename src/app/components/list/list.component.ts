import { Component } from '@angular/core';
import {Comic} from "../../comic";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(httpClient: HttpClient) {
    httpClient.get ('http://localhost:8080/api/comic/all') .subscribe(item =>{
      console.log( 'Erhalten:', item)
      this.comics =item as Comic[]

    })
  }
  comics: Comic[] = [
    {comicTitleEn: 'Badman', comicTitleDe: 'Badman'} ,
    {comicTitleEn: 'Badman', comicTitleDe: 'Badman'} ,
    {comicTitleEn: 'Badman', comicTitleDe: 'Badman'} ,
    {comicTitleEn: 'Badman', comicTitleDe: 'Badman'} ,
    {comicTitleEn: 'Badman', comicTitleDe: 'Badman'} ,
    {comicTitleEn: 'Badman', comicTitleDe: 'Badman'} ,
    {comicTitleEn: 'Asterix&Obelix', comicTitleDe: 'Asterix&Obelix'}


  ];
}

