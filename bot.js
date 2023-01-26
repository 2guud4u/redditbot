var snoowrap = require('snoowrap');
r = new snoowrap({
    userAgent: 'bigman',
    clientId: 'jknOULmDh_Xkmi5xLSpl_A',
    clientSecret: '5jOGVzfdgGJgRrxS7oPZAzaBZnndEA',
    username: 'fake_t4xi',
    password: 'Happyguy20031024'
});

class post{
    constructor(url, rating, wtc){
        this.url = url;
        this.rating = rating;
        this.wtc = wtc;
    }
    link(){
        console.log(this.url);
    }
}
hi = []
const results = r.search({
    query: 'slides',
    subreddit: 'FashionReps',
    sort: 'relevance'}
).filter(post=>post.link_flair_text == "QC").map(post=>post.permalink).then(x => new post(x, 1, 3)).then(console.log)



