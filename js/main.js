var myArray = [
    "tiger", "dragon", "balloon", "dog", "cat", "bee", "girl", "beaver",
    "elephant", "cub", "boy", "rabbit", "snake", "eagle", "flamingo",
    "fish", "penguin", "soldier", "robot", "spaceship", "alien", "planet",
    "volcano", "skateboarder", "mountain", "tree", "umbrella", "cup", "barista", "banana", "whale", "bicyle", "sky diver", "monster", "clouds", "squirrel", "toilet", "otter", "guitar", "cowboy", "bandit",
    "lizard", "knight", "wizard", "moon", "coconut", "lemon", "pineapple",
    "cherry", "hammer", "knife", "hamburger", "strawberry", "thunder", "artist", "musician", "mummy", "zombie", "spider", "chef", "motorcyle", "rat", "lumberjack", "submarine", "ice cream cone", "snowman",
     "yeti", "jack-o lantern", "cockaroach", "crystal", "birthday cake", "pizza", "scooter", "hot dog", "weiner dog", "racoon", "possum", "tank", "jellyfish", "princess", "king"
  ];
  
  var randomColor = [
    "yellow", "red", "blue", "green", "violet", "purple", "cyan", "turqoise", "navy", "baby", "blue", "brown", "gray", "orange", "pink", "magenta", "lavender", "lime", "olive", "forest", "mustard", "amber", "maroon", "burgundy", "fuschia", "lilac", "plum", "olympic"
  ];
  
  var randomAction = [
    "furious", "raging", "stylish", "sad", "scheming", "mysterious", "energetic", "happy", "laughing", "muscular", "skinny", "thick", "old", "fancy", "stinky"
  ];
  
  function doodlePrompt(myArray) { return myArray[Math.floor(Math.random()*myArray.length)];
  }
  
  function doodleColor(randomColor) {
    return randomColor[Math.floor(Math.random()*randomColor.length)];
  }
  
  function doodleAction(randomAction) {
    return randomAction[Math.floor(Math.random()*randomAction.length)];
  }
  
  