import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class freeapiservices
{
    constructor(private httpClient:HttpClient){}
    getBooks():Observable<any>{
        return this.httpClient.get("https://localhost:7251/api/Library")
    }
}