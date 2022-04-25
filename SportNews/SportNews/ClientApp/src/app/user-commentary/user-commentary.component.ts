import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-commentary',
  templateUrl: './user-commentary.component.html',
  styleUrls: ['./user-commentary.component.css']
})
export class UserCommentaryComponent implements OnInit {

  @Input() public id: string | undefined;
  @Input() public name: string | undefined;
  @Input() public date: Date | undefined;

  public readonly: boolean = true;
  private isHover: boolean = false;
  private isNotEdit: boolean = true;
  private visibleSaveButton: boolean = false;

  private isCurrentUserComment: boolean = false;

  constructor() { }

  ngOnInit(): void {
    try {
      let user = localStorage.getItem('currentUser');

      if (user !== null) {
        this.isCurrentUserComment = JSON.parse(user)?.id === this.id;
      }
      else {
        this.isCurrentUserComment = false;
      }

    } catch (e) {
      console.error(e);
    }
  }

  onClick(): void {
    this.setIsHover(false);
    this.setIsNotEdit(false);
    this.setVisibleSaveButton(true);
    this.readonly = false;

  }

  onClickSaveComment(): void {
    this.setIsHover(true);
    this.setIsNotEdit(true);
    this.setVisibleSaveButton(false);

  }

  setIsHover(value: boolean): void {
    this.isHover = value;
  }

  getIsHover(): boolean {
    return this.isHover;
  }

  setIsNotEdit(value: boolean): void {
    this.isNotEdit = value;
  }

  getIsNotEdit(): boolean {
    return this.isNotEdit;
  }

  setVisibleSaveButton(value: boolean): void {
    this.visibleSaveButton = value;
  }

  getVisibleSaveButton(): boolean {
    return this.visibleSaveButton;
  }

  setIsCurrentUserComment(value: boolean): void {
    this.isCurrentUserComment = value;
  }

  getIsCurrentUserComment(): boolean {
    return this.isCurrentUserComment;
  }
}
