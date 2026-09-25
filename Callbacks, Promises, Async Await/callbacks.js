//We mostly use Promises- async/await only- study them more, not this.

// A callback is simply a function that you pass into another function as an
// argument, with the explicit instruction: "Run this later the exact moment you
// finish your job."

// Why it is needed:
// JavaScript is notoriously impatient. If a task takes time—like fetching data from
// a database, saving a file, or downloading an image—JavaScript will not pause to
// wait for it. It instantly moves on to execute the very next line of code while
// the slow task finishes in the background.

// If your next line of code needs that new data to display it on the screen, it
// will fail, because it tries to display the data before it has actually arrived.

// A callback solves this timing issue. Instead of letting JavaScript rush ahead
// and execute code out of order, you wrap your screen-updating logic inside a
// callback function. You hand it to the slow task and say: "Keep doing your
// background work, and only trigger this callback when you are 100% finished."
// It forces dependent code to wait its turn.

//Here,we hand the faster/dependent fn as a callback to the slower/independent fn.

const posts = [
    { title: "Post One", body: "This is post one" }, // Assume posts is a DB
    { title: "Post Two", body: "This is post two" }
];

// 1. GET POSTS FUNCTION
// This function takes 1 second to update the screen with the current posts.
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output; // Showing O/P in body
    }, 1000)
}

// 2. CREATE POST FUNCTION
// This function takes 2 seconds to simulate saving a new post to a database.
// It accepts a 'callback' function as a parameter.
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post); 
        
        // 3. THE CALLBACK EXECUTION
        // Only AFTER the new post is pushed to the array (which took 2 seconds), 
        // we run the callback function to update the screen.
        callback();
    }, 2000)
}

// 4. THE EXECUTION
// We call createPost, pass it "Post Three", and pass getPosts as the callback.
// If we didn't use a callback, the screen would update in 1 second, 
// completely missing "Post Three" which takes 2 seconds to save.
createPost({ title: "Post Three", body: "This is post three" }, getPosts);

//Above, had we handed getPosts as a fn [getPosts()], it'd have run again faster that createPosts();
//JS treats functions as regular values ie, like vars
//So, by handing slower fn, the callback-fn-name, we dont call it then, but call it internally at a suitable time,
//ie, once new record is pushed to array.