var snoowrap = require('snoowrap');
r = new snoowrap({
    userAgent: 'bigman',
    clientId: 'jknOULmDh_Xkmi5xLSpl_A',
    clientSecret: '5jOGVzfdgGJgRrxS7oPZAzaBZnndEA',
    username: 'fake_t4xi',
    password: 'Happyguy20031024'
});

r.search({
    query: 'unc',
    subreddit: 'FashionReps',
    sort: 'comments'}
).then(console.log)

