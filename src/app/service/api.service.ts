import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../model/Category";
import { Observable, throwError } from 'rxjs';
import { catchError, retry,  toArray} from 'rxjs/operators';
import { Product } from "../model/Product";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private httpClient: HttpClient) {
        console.log("api service created");
     }
    public getAllProductCategories() : Observable<Category[]> {
        let url = 'https://fakestoreapi.com/products/categories';
        return this.httpClient.get<any>(url);
    }

    public getAllProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(environment.apiProductsUrl);
    }

    public logInUser(user: String, pass: String): Observable<any> {
        //console.log("logInUser method started!");
        let url = 'https://fmi-fakeapi-proxy.herokuapp.com/https://fakestoreapi.com/auth/login';
        //console.log("inside")
        //console.log(JSON.stringify({username: user, password:pass}));
        return this.httpClient.post<any>(url, JSON.stringify({'username': user, 'password':pass}));
    }
}