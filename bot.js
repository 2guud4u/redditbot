var snoowrap = require('snoowrap');
r = new snoowrap({
    userAgent: 'bigman',
    clientId: 'jknOULmDh_Xkmi5xLSpl_A',
    clientSecret: '5jOGVzfdgGJgRrxS7oPZAzaBZnndEA',
    username: 'fake_t4xi',
    password: 'Happyguy20031024'
});

class post{
    constructor(post_url, rating, wtc, comments){
        this.post_url = post_url;
        this.rating = rating;
        this.wtc = wtc;
        this.comments = comments
    }
    link(){
        console.log(this.url);
    }
}
list = []

const results = r.search({
    query: 'slides',
    subreddit: 'FashionReps',
    sort: 'relevance'}
).filter(post=>post.link_flair_text == "QC").then(hi => {
    for (let i of hi) {
        obj = new post("https://www.reddit.com"+ i.permalink, 0, i.url, i.comments)
        list.push(obj)
    }
    console.log(list)
})



