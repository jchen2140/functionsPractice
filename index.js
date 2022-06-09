//Social Media Challenge! 
//Objective: Complete these coding exercises using 
//Javascript, and you can post these on the Slack morning thread as a way for you to share your social media with each other! 



//The Basics
//Part 1: Create two variables -- one for your name, and one for your location, and store two pieces of information inside these variables: your current name and where you're Zooming from! 


var name = "Jessie"
var location = "Bay Area"





//Making Conditionals
//Which social media do you use?
//Part 2: Fill in the variables below with strings with "yeah" if you use that social media. If you do not use that particular social medial,  then fill in the missing part of the declaration with the string "nope!", but don't delete any of the variables below! <3 

var useMyspace =  "nope!";
var useFacebook =  "nope!";
var useInstagram = "yeah";
var useTiktok = "nope!";
var useTwitter =   "nope!";



//Your handle (userName)? <- (Does TikTok even have those lol....) <- we don't know - Eleanna and Corey)
//Part 3: Fill in the variables below with the appropriate strings for your social media handles! If you don't use that particular platform, then just fill it in the string with "n/a", but don't delete any of the variables below! <3

var myspaceName =   "n/a"               ;
var facebookName =    "n/a"             ;
var instagramHandle =   "jessay_c"           ;
var tikTokHandle =   "n/a"              ;
var twitterHandle =   "n/a"             ;





//plug-them into our interpolation and our if blocks!!
//By completing this, you can output your entire social media to your console for screenshotting!

//Replace the "placeholder" string inside the interpolation with the correct variables from your previous section


console.log(`Hi! My name is ${name}. I am currently a student inthe ${location}.`) //what variables do we need to complete this interpolation?

if (useMyspace === "yeah") {
  console.log("Myspace: ");
  console.log(myspaceName); //fill this console statement in with the appropriate variable which holds your myspace username
}

if (useFacebook === "yeah") {
  console.log("Facebook: ");
  console.log(facebookName); //fill this console statement in with the appropriate variable which holds your Facebook username
} 

if (useInstagram === "yeah") {
  console.log("Instagram: ");
  console.log(instagramHandle);
  //fill this console statement in with the appropriate variable which holds your Instagram username
} 

if (useTiktok === "yeah") {//fill in the leftside of this conditional! You want a line of code inside the () which tests whether or not you use TikTok!
  console.log("TikTok: ");
  console.log(tikTokHandle);
}

if (useTwitter === "yeah" ) {//fill in both sides of this conditional with a piece of code that checks whether or not you specifically use Twitter!
  console.log("Twitter: ");
  console.log(twitterHandle);    //fill this console statement in with the appropriate variable which holds your Twitter username
} else {
  console.log("With <3 From KWK 2021 Summer <3");
}



//Part 5: Run your code, and screenshot your console output (or take a picture) and upload it to our morning submission thread so y'alls teammates can add you! 






























