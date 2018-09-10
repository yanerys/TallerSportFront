import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Sportsman } from './sportsman';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const authors = '/sportspeople';

/**
 * The service provider for everything related to authors
 */
@Injectable()
export class SportsmanService {

    /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) {}

    /**
     * Returns the Observable object containing the list of authors retrieved from the API
     * @returns The list of authors in real time
     */
    getSportspeople(): Observable<Sportsman[]> {
        return this.http.get<Sportsman[]>(API_URL + authors);
    }
}