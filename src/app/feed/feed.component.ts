import { Component, OnInit } from '@angular/core';
import { Feed, ItemType, FeedItem } from '../feed';
import { FeedService } from '../feed.service';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  postFeed: Feed;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.getFeed();
  }

  getFeed(): void {
    this.feedService.getFeed()
      .subscribe(feed => {
        const commentList = Array<FeedItem>();
        feed.feed.forEach((element, index) => {
          if (element.type === ItemType.COMMENT) {
            commentList.push(element);
            feed.feed.splice(index, 1);
          }
        });
        commentList.forEach(element => {
          const temp = feed.feed.find(item => item.id === element.postID);
          if (temp) {
            if (!temp.postComments) {
              temp.postComments = Array<FeedItem>(element);
            } else {
              temp.postComments.push(element);
            }
          }
        });
        this.postFeed = feed;
      });
  }
}
