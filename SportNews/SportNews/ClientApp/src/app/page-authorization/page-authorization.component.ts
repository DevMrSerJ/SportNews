import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Guid } from 'js-guid';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-page-authorization',
  templateUrl: './page-authorization.component.html',
  styleUrls: ['./page-authorization.component.css']
})
export class PageAuthorizationComponent implements OnInit {

  public registrationForm!: FormGroup;
  public authForm!: FormGroup;

  public firstNumber: number = 0;
  public secondNumber: number = 0;
  public isErrorLogin: boolean = false;
  public isErrorSecondPassword: boolean = false;
  public isErrorFirstPassword: boolean = false;
  public isErrorMobile: boolean = false;

  public isAuth = true;

  private resultCaptcha: number = 0;

  constructor(private httpService: HttpService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      login: "",
      firstPassword: "",
      secondPassword: "",
      mobile: "",
      email: "",
      numberCaptcha: 0,
      gender: ""
    });

    this.authForm = this.fb.group({
      login: "",
      password: ""
    });

    this.createCaptcha();
  }

  onRegist(): void {
    let registration = this.registrationForm.value;
    let user: {};

    let errorMsg = "";

    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let valid = re.test(registration.email);

    let pattern = /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/;
    let validLogin = pattern.test(registration.login);

    let patternPasss = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/;
    let validPass = patternPasss.test(registration.firstPassword);

    if (!validLogin || registration.login.length < 6) {
      errorMsg = "Логин не соответствует формату\n";
      this.isErrorLogin = true;
    }
    else {
      this.isErrorLogin = false;
    }

    if (registration.firstPassword.length < 6) {
      errorMsg += "Длина пароля должна быть не менее 6 символов\n";
      this.isErrorFirstPassword = true;
    }
    else {
      this.isErrorFirstPassword = false;
    }

    if (!validPass) {
      errorMsg += "Пароль не соответствует формату!\n";
      this.isErrorFirstPassword = true;
    }
    else {
      this.isErrorFirstPassword = false;
    }

    if (registration.firstPassword !== registration.secondPassword || !registration.firstPassword || !registration.secondPassword) {
      errorMsg += "Пароли не совпадают!\n";
      this.isErrorSecondPassword = true;
    }
    else {
      this.isErrorSecondPassword = false;
    }

    if (registration.mobile[0] !== '+' || registration.mobile[1] !== '7' || registration.mobile.length !== 12) {
      errorMsg += "Такого мобильного телефона не существует!\n";
      this.isErrorMobile = true;
    }
    else {
      this.isErrorMobile = false;
    }

    if (!valid) {
      errorMsg += "Такого email не существует!\n";
    }

    if (registration.numberCaptcha !== this.resultCaptcha) {
      errorMsg += "Каптча не пройдена!\n";
    }

    if (errorMsg) {
      alert(errorMsg);
      this.createCaptcha();
    }
    else {
      let gender: boolean = registration.gender == "true";

      user = {
        id: Guid.EMPTY,
        name: "",
        surname: "",
        patronymic: "",
        gender: gender,
        mobile: registration.mobile,
        email: registration.email,
        login: registration.login,
        password: registration.firstPassword
      };

      this.sendResponseForRegistration(user);
    }
  }

  createCaptcha(): void {
    this.firstNumber = Math.floor(Math.random() * 100);
    this.secondNumber = Math.floor(Math.random() * 100);

    this.resultCaptcha = this.firstNumber + this.secondNumber;
  }

  onAuth(): void {
    let auth = this.authForm.value;
    let errorMessage = "";

    if (!auth.login) {
      errorMessage += "Введите логин!\n";
    }
    if (!auth.password) {
      errorMessage += "Введите пароль!\n";
    }

    if (errorMessage) {
      alert(errorMessage);
    }
    else {
      let response: string = "\"" + auth.password + "\"";

      this.httpService.sendAuthorization(auth.login, response).subscribe(
        (data: any) => {
          alert("Вы авторизовались!");

          let currentUser = {
            "name": auth.login,
            "id": data.message,
            "isAuthentication": true
          }

          localStorage.setItem('currentUser', JSON.stringify(currentUser));
        },
        (error) => {
          alert(error.message);
          console.log(error);
          console.log("Логин или пароль оказались неверными. Попробуйте снова!")
        });
    }
  }

  sendResponseForRegistration(body: any): void {
    this.httpService.sendRegistration(body).subscribe(
      (data: any) => {
        alert("Вы зарегистрировались!");
        this.isAuth = true;
      },
      (error) => {
        alert(error.message);
        console.log(error);
      });
  }
}
