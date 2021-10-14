var numKids = [14, 3, 0 ,17, 22, 100, 5, 6, 8];
var spouse = ["Brad Pitt", "Nobody. You are forever alone", "your career", "Timothee Chakamet"];
var city = ["New York City", "Atlanta", "Tahoe", "Zimbabwe"];
var job = ["Sanitation Expert", "Movie Watcher", "Dog Trainer", "House Sitter", "Twitch Streamer"];

var xx = Math.floor(Math.random() * 4 )

function fortune(job,city,spouse,numKids) {
document.write("You will be a " + job + " in " + city + ", and married to " + spouce + "with" + numKids + " kids.");
}

fortune (job[xx],city[xx],spouse[xx],numKids[xx])
