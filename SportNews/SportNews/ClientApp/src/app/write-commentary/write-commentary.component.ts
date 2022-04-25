import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-commentary',
  templateUrl: './write-commentary.component.html',
  styleUrls: ['./write-commentary.component.css']
})
export class WriteCommentaryComponent implements OnInit {

  public textCommentary: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(text: string): void {
    console.log(text);
  }

}
