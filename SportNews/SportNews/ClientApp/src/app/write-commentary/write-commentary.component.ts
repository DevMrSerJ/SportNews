import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from '../http.service';
import { Guid } from 'js-guid';

@Component({
  selector: 'app-write-commentary',
  templateUrl: './write-commentary.component.html',
  styleUrls: ['./write-commentary.component.css']
})
export class WriteCommentaryComponent implements OnInit {

  @Input() public articleId: string | undefined;

  @Output() createCommentary = new EventEmitter<void>();

  public textCommentary: string = "";
  private userId: string = "";

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    try {
      let user = localStorage.getItem('currentUser');

      if (user !== null) {
        this.userId = JSON.parse(user)?.id;
      }
      else {
        this.userId = "";
      }

    } catch (e) {
      console.error(e);
    }
  }

  onClick(text: string): void {
    if (!this.articleId) {
      return;
    }

    let comment = {
      id: Guid.EMPTY,
      userId: this.userId,
      commentary: text,
      articleId: this.articleId,
      datePublish: new Date()
    }

    this.httpService.createComment(comment).subscribe(
      (data: any) => {
        this.createCommentary.emit();
      },
      (error) => {
        alert(error.message);
        console.log(error);
      });
  }

}
