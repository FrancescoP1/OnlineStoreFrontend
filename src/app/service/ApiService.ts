import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../model/Category";
import { Observable, throwError } from 'rxjs';
import { catchError, retry,  toArray} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private httpClient: HttpClient) {
        console.log("api service created");
     }
    public getAllProductCategories() : Observable<Category[]> {
        let url = 'https://fakestoreapi.com/products/categories';
        return this.httpClient.get<Category[]>(url);
    }
}