var job = ["Sanitation Expert","Movie Watcher","Dog Trainer","Twitch Streamer"];
var city = ["New York City","Atlanta","Tahoe","Zimbabwe"];
var spouse = ["Brad Pitt","Nobody. You are forever alone","your career","Timothee Chakamet"];
var numKids = [14,3,0,17];




var y = Math.floor(Math.random() * 4 );

function fortune(job,city,spouse,numKids) 
{
  document.write("You will be a " + job + " in " + city + ", and married to " + spouce + "with" + numKids + " kids.");
}

fortune (job[y],city[y],spouse[y],numKids[y])
