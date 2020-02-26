import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URL} from "../environements/environement";

@Injectable({
    providedIn: 'root'
})
export class HelloService {
    constructor(private http: HttpClient) {
    }

    getPerson() {
        return this.http.get(`${URL.baseURL}`);
    }
}
