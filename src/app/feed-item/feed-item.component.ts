import { Component, OnInit, Input } from '@angular/core';
import { FeedItem } from '../feed';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.css']
})
export class FeedItemComponent implements OnInit {

  @Input() item: FeedItem;
  constructor() { }

  ngOnInit() {
  }

}
