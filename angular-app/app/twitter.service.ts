import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class TwitterService {

    constructor(private http: Http) {

    }

    getUserTweets(name: string): Observable<any> {
        let headers = new Headers();
        // headers.set('Content-Type', 'application/json');
        // headers.set('Accept', 'application/json');
        let params = new URLSearchParams();
        params.set('screen_name', name);
        params.set('count', "200");
        // strange that queries don't get appended automatically thru URLSearchParams. Will file a ticket.
        let response: Observable<Response>;
        response = this.http.get("/twitter.php" + "?" + params.toString(), {headers: headers, params: params});
        return response;
    }
}