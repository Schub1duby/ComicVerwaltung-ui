import {Component} from '@angular/core';
import {Comic} from "../../comic";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  comics: Comic[] = [
    {comicTitleEn: 'Badman', comicTitleDe: 'Badman'} ,
    {comicTitleEn: 'Asterix&Obelix', comicTitleDe: 'Asterix&Obelix'}


  ];
}
