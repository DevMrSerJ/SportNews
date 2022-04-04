import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from '../http.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Output() filterClick = new EventEmitter<string[]>();

  public authorForm!: FormGroup;
  public registerForm!: FormGroup;
  public searchForm!: FormGroup;

  public allAuthors: string[] = [];
  public selectDate: Date = new Date();

  private author: string = "null";
  private date: string = "0";
  private search: string = "null";

  constructor(private httpService: HttpService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.authorForm = this.fb.group({
      author: [null]
    });

    this.getAllAuthors();

    this.authorForm.get("author")?.valueChanges
      .subscribe(f => {
        this.onAuthorChanged(f);
      });

    this.selectDate = new Date();
    this.registerForm = this.fb.group({
      selectDate: ''
    });

    this.searchForm = this.fb.group({
      searchValue: ""
    });
  }

  getAllAuthors() {
    this.httpService.getAllAuthors().subscribe(
      (data: any) => {
        data.forEach((i: any) => this.allAuthors.push(i.name.split(" ", 1)));
      },
      (error) => {
        alert(error.message);
        console.log(error);
      });
  }

  onAuthorChanged(value: string) {
    this.author = value;

    if (value === "") {
      this.author = "null";
    }

    let args = [this.date, this.author, this.search];

    this.filterClick.emit(args);
  }

  editDate(value: any) {
    let dateTime = 0;

    if (value) {
      dateTime = new Date(value).getTime() / 1000;
    }

    this.date = `${dateTime}`;

    let args = [this.date, this.author, this.search];

    this.filterClick.emit(args);
  }

  searchWords(value: string) {
    console.log(value);

    this.search = value;

    let args = [this.date, this.author, this.search];

    this.filterClick.emit(args);
  }
}
