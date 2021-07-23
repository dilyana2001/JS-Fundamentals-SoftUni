function solve(arr) {
    let socialMedia = { users: [], articles: [], comments: [] };

    arr.forEach(line => {
        if (line.includes('user')) {
            let [, userName] = line.split('user ');
            if (!socialMedia.users.hasOwnProperty(userName)) {
                socialMedia.users.push(userName);
            }
        } else if (line.includes('article')) {
            let [, articleName] = line.split('article ');
            if (!socialMedia.articles.hasOwnProperty(articleName)) {
                socialMedia.articles.push([articleName]);
            }
        } else if (line.includes('posts on')) {
            let [userName, post] = line.split(' posts on ');
            let [articleName, comment] = post.split(': ');
            let [commentTitle, commentContent] = comment.split(', ');
            socialMedia.comments.push([userName, articleName, commentTitle, commentContent]);
            if (socialMedia.articles.flat().includes(articleName)) {
                socialMedia.articles.push([articleName, 1])
            }

        }
    });
    console.log(socialMedia)
}
// Comments on Movies
// --- From user someUser: Like - I
// also like movies very much
// --- From user uSeR4: I also like
// movies - I really do
// Comments on Books
// --- From user uSeR4: I like books -
// I do really like them
// Comments on Shopping
// --- From user someUser: title - I go
// shopping every day
solve([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on  Movies: I also like movies, I reallydo',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
])