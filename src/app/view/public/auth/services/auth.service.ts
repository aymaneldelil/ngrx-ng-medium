import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IRegisterReq } from 'src/app/view/public/auth/interface/i-register-req';
import { map, Observable, tap } from 'rxjs';
import { IRegisterRes } from '../interface/i-register-res';
import { ICurrentUser } from '../interface/i-current-user';
import { ILoginReq } from '../interface/i-login-req';

@Injectable()
export class AuthService {
  constructor(private _http: HttpClient) {}
  //-----------------------------------------------------------------------------------------------------------------------------------------------
  public userRegister(data: IRegisterReq): Observable<ICurrentUser> {
    const url: string = environment.apiUrl + '/users';
    return this._http.post<IRegisterRes>(url, data).pipe(
      map((m) => m.user)
    );
  }
  //-----------------------------------------------------------------------------------------------------------------------------------------------
  public userLogin(data: ILoginReq): Observable<ICurrentUser> {
    const url: string = environment.apiUrl + '/users/login';
    return this._http.post<IRegisterRes>(url, data).pipe(map((m) => m.user));
  }
}
