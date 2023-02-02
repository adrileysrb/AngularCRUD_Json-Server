import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  private url : string = "http://localhost:3000/productList/";

  postProduct(data : any) {
    return this.http.post<any>(this.url, data);
  }

  getProduct() {
    return this.http.get<any>(this.url);
  }

  putProduct(data : any, id : number){
    return this.http.put<any>(this.url+id, data);
  }

  deleteProduct(id : number){
    return this.http.delete<any>(this.url+id);
  }
}
