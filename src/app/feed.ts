export class ItemMedia {
    profile: string;
    post?: string;
}

export class ItemStats {
    star: number;
    follow: number;
    views: number;
}

export class Comment {
    id: string;
    text: string;
}

export enum ItemType {
    POST = 'post',
    COMMENT = 'comment'
}

export class FeedItem {
    id: string;
    username: string;
    type: ItemType;
    caption?: string;
    image: ItemMedia;
    stats?: ItemStats;
    postID?: string;
    postComments?: FeedItem[];
    comments?: Comment[];
}

export class FeedLinks {
    next: { url: string; };
}
export class Feed {
    skip: number;
    count: number;
    _links: FeedLinks;
    feed: FeedItem[];
}
