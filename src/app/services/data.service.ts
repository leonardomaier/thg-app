import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface APIResult {
    data: { [key: string]: any }
}

@Injectable()
export class DataService {
    public baseUrl = 'http://127.0.0.1:8000';

    public constructor(private http: HttpClient) { }

    public getPopulation(): Observable<APIResult> {
        return this.http.get<APIResult>(`${this.baseUrl}/population`);
    }

    public getCarsPerHousehold(): Observable<APIResult> {
        return this.http.get<APIResult>(`${this.baseUrl}/cars-per-household`);
    }
}
