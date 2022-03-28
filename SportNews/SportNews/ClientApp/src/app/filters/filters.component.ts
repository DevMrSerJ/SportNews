import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  public allAuthors: string[] = [];
  public authorForm!: FormGroup;

  constructor(private httpService: HttpService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.authorForm = this.fb.group({
      author: [null]
    });

    this.getAllAuthors();

    this.authorForm.get("author")?.valueChanges
      .subscribe(f => {
        this.onAuthorChanged(f);
      })
  }

  getAllAuthors() {
    this.httpService.getAllAuthors().subscribe(
      (data: any) => {
        data.forEach((i: any) => this.allAuthors.push(i.name.split(" ", 1)));
      },
      (error) => {
        alert(error.message);
        console.log(error)
      });
  }

  onAuthorChanged(value: string) {
    // proccess change
  }
}
