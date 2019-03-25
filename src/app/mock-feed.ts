import * as feed from './feed';
// tslint:disable:max-line-length
export const FEED: feed.Feed = {
    skip: 0,
    count: 5,
    _links: {
      next: {
        url: 'https://staging-app.figure1.com/mock/feed?skip=5'
      }
    },
    feed: [
      {
        id: '5a1edb556384ec96b71d4a98',
        username: 'catc',
        type: feed.ItemType.POST,
        caption: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas',
        image: {
          profile: 'https://images.unsplash.com/profile-1532466997843-88fe931a8056?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff',
          post: 'https://images.unsplash.com/photo-1467934466021-f2425d752934?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=022241431650d3ce7fbffb73431a065a&auto=format&fit=crop&w=400&q=60'
        },
        stats: {
          star: 5,
          follow: 23,
          views: 122
        }
      },
      {
        id: '5a5e5b1ce43c3f5076cbba41',
        username: 'blyn',
        type: feed.ItemType.POST,
        caption: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas',
        image: {
          profile: 'https://images.unsplash.com/profile-1518819819358-613688503959?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff',
          post: 'https://images.unsplash.com/photo-1516716984596-1f6e47c5e986?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0303fcb116aa42fe677673e6fe1fa3f6&auto=format&fit=crop&w=400&q=60'
        },
        stats: {
          star: 3,
          follow: 15,
          views: 86
        }
      },
      {
        id: '5a5e5b28e43c3f5076cbba52',
        username: 'izzy',
        type: feed.ItemType.POST,
        caption: 'aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam',
        image: {
          profile: 'https://images.unsplash.com/profile-1504441128329-507ccc493342?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff',
          post: 'https://images.unsplash.com/photo-1526224617767-e92ff8a3fb71?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=085ffc8f79c50b58976278b65bb523c6&auto=format&fit=crop&w=400&q=60'
        },
        stats: {
          star: 14,
          follow: 23,
          views: 91
        }
      },
      {
        id: '5a5e5b50e43c3f5076cbba61',
        username: 'danielk',
        type: feed.ItemType.COMMENT,
        postID: '5a5e5b28e43c3f5076cbba52',
        image: {
          profile: 'https://images.unsplash.com/profile-fb-1509503094-d0ee56e8483c.jpg?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff'
        },
        comments: [
          {
            id: '5a5e5eb4c6f8ce6378ac7a88',
            text: 'suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta'
          },
          {
            id: '5a5e5f65c6f8ce6378ac7ab8',
            text: 'eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam'
          }
        ]
      },
      {
        id: '5a5e5b5ee43c3f5076cbba71',
        username: 'bhavin',
        type: feed.ItemType.POST,
        caption: 'eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo',
        image: {
          profile: 'https://images.unsplash.com/profile-1516018438351-17e6ea42c457?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff',
          post: 'https://images.unsplash.com/photo-1506691098651-355ab2a13aed?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0a3741c6b552a5c0d334731229c77bf2&auto=format&fit=crop&w=400&q=60'
        },
        stats: {
          star: 17,
          follow: 4,
          views: 76
        }
      }
    ]
  };
