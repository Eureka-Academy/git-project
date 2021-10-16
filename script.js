// Typing Effect
var i = 0;
var txt = 'Please enter you personal information, add and commit changes with Git, and push back to the repository. Refer to the process on Slack and seek help online or from team members if necessary.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
