import {Injectable} from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
// @ts-ignore
import {Md5} from 'ts-md5';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  private readonly publicKey = '80e0887a7fa981214e1a66ca227213a4';
  private readonly privateKey = '484d64f3d290ab535ab45329c4abbcdbf29f0d52';
  private readonly ts = Date.now();
  private readonly hash = Md5.hashStr(this.ts + this.privateKey + this.publicKey);
  private readonly tokenString = `&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`;

  constructor() {
  }

  intercept(req, next) {
    const request = req.clone({
      url: req.url + this.tokenString
    });

    return next.handle(request);
  }
}
