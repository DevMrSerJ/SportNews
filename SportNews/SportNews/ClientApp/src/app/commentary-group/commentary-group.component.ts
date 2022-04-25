import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Comment } from '../user-commentary/user-commentary.component';

@Component({
  selector: 'app-commentary-group',
  templateUrl: './commentary-group.component.html',
  styleUrls: ['./commentary-group.component.css']
})
export class CommentaryGroupComponent implements OnInit {

  @Input() public id: string | undefined;
  public comments: Comment[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    if (!this.id) {
      return;
    }

    this.httpService.getAllCommentsForArticle(this.id).subscribe(
      (data: any) => {
        data.forEach((i: any) => this.comments.push(
          {
            id: i.id,
            userId: i.userId,
            user: i.user,
            commentary: i.commentary,
            datePublish: new Date(i.datePublish).toLocaleDateString()
          }
        ));
      },
      (error) => {
        alert(error.message);
        console.log(error)
      });
  }

}
