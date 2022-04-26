import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

export interface Comment {
  id: string;
  userId: string;
  user: string;
  commentary: string;
  datePublish: string;
}

@Component({
  selector: 'app-user-commentary',
  templateUrl: './user-commentary.component.html',
  styleUrls: ['./user-commentary.component.css']
})
export class UserCommentaryComponent implements OnInit {

  @Input() public idArticle: string | undefined;
  @Input() public commentarys: Comment[] = [];

  public readonly: boolean = true;
  private isHover: boolean = false;
  private isNotEdit: boolean = true;
  private visibleSaveButton: boolean = false;

  private isCurrentUser: string = "";

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    try {
      let user = localStorage.getItem('currentUser');

      if (user !== null) {
        this.isCurrentUser = JSON.parse(user)?.id;
      }
      else {
        this.isCurrentUser = "";
      }

    } catch (e) {
      console.error(e);
    }
  }

  onClick(userId: string | undefined): void {
    if (this.isCurrentUser === userId) {
      this.setIsHover(userId, false);
      this.setIsNotEdit(userId, false);
      this.setVisibleSaveButton(userId, true);
      this.readonly = false;
    }
  }

  onClickSaveComment(id: string | undefined, text: string): void {
    if (!id) {
      return;
    }

    text = "\"" + text + "\"";

    this.httpService.updateComment(id, text).subscribe(
      (data: any) => {
        this.isHover = false;
        this.isNotEdit = false;
        this.visibleSaveButton = false;
        this.readonly = true;
      },
      (error) => {
        alert(error.message);
        console.log(error);
      });
  }

  setIsHover(id: string | undefined, value: boolean): void {
    if (this.isCurrentUser === id) {
      this.isHover = value;
    }
  }

  getIsHover(userId: string | undefined): boolean {
    if (!userId) {
      return false;
    }

    return this.isHover && this.getIsCurrentUserComment(userId);
  }

  setIsNotEdit(userId: string | undefined, value: boolean): void {
    if (this.isCurrentUser === userId) {
      this.isNotEdit = value;
    }
  }

  getIsNotEdit(userId: string | undefined): boolean {
    if (!userId) {
      return false;
    }

    return this.isNotEdit && this.getIsCurrentUserComment(userId);
  }

  setVisibleSaveButton(userId: string | undefined, value: boolean): void {
    if (this.isCurrentUser === userId) {
      this.visibleSaveButton = value;
    }
  }

  getVisibleSaveButton(userId: string | undefined): boolean {
    if (!userId) {
      return false;
    }

    return this.visibleSaveButton && this.getIsCurrentUserComment(userId);
  }

  getIsCurrentUserComment(userId: string | undefined): boolean {
    if (!userId) {
      return false;
    }

    return this.isCurrentUser === userId;
  }
}
