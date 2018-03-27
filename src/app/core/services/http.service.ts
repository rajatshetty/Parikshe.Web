import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PlatformLocation } from '@angular/common';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
    private m_headers: Headers;
    private m_options: RequestOptions;
    private m_url = 'http://localhost:3000/';
    constructor(private http: Http) {
    }

    get options() {
        this.m_headers = new Headers();
        this.m_headers.append('authorization', sessionStorage.getItem('token') || '');
        return this.m_options = new RequestOptions({ headers: this.m_headers });
    }

    getdata<T>(path: string): Observable<T> {
        return this.http.get(this.m_url + path, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    postdata<T>(path: string, param: T): Observable<T> {
        return this.http.post(this.m_url + path, param, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData<T>(res: Response): Observable<T> {
        const body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Observable.throw(error);
    }
}
