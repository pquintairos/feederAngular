import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Feed } from './feed';
import { FEED } from './mock-feed';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private feedUrl = 'https://staging-app.figure1.com/mock/feed';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getFeed(): Observable<Feed> {
    this.messageService.add('Feedservice: fetched feed');
    // return of(FEED);
    return this.http.get<Feed>(this.feedUrl);
  }
}

