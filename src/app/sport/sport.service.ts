import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Sport } from './sport';
import { HttpClient } from '@angular/common/http';

const API_URL = "../../assets/";
const sports = '/sports.json';

/**
* The service provider for everything related to sports
*/
@Injectable()
export class SportService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
    /**
    * Returns the Observable object containing the list of sports retrieved from the API
    * @returns The list of sports in real time
    */    
    getSports(): Observable<Sport[]> {
        return this.http.get<Sport[]>(API_URL + sports);
    }
}
