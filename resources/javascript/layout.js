$(document).ready(function() {
  //var pageRef = "D:/_development%20folder/RedHandOfDoom";
  var pageRef = "https://jilesley.github.io/RedHandOfDoom";

// Add general metadata
  $("head").append(
    "<meta charset='utf-8'>" +
    "<meta name='viewport' content='width=device-width, initial-scale=1'>" +
    "<meta property='og:title' content='Red Hand of Doom'>" +
    "<meta property='og:description' content='The webpage for our Red Hand of Doom D&D game run by the glorious DM: Zac'>" +
    "<meta property='og:image' content='https://i.imgur.com/YyGvoA9.png'>" +
    "<meta property='og:url' content='https://jilesley.github.io/RedHandOfDoom'>" +

    "<title>Red Hand of Doom</title>" +
    "<link href='" + pageRef + "/resources/css/reset.css' rel='stylesheet' type='text/css' />" +
    "<link href='" + pageRef + "/resources/css/style.css' rel='stylesheet' type='text/css' />" +
    "<link rel='shortcut icon' href='" + pageRef + "/resources/Images/favicon.ico' type='image/x-icon'>" +
    "<link rel='icon' href='" + pageRef + "/resources/Images/favicon.ico' type='image/x-icon'>"
  );



  $("body").append(
    "<header></header>",
    "<div id='Main'/>");




// Handle header layout
  $("header").append(
    "<nav class='center'>" +

      "<div><h3><a href='" + pageRef + "/Statistics.html'>Statistics</a></h3></div>" +



      "<div class='dropdown'>" +
        "<h3>Characters</h3>" +
        "<ul class='dropdown-content'>" +

          "<li class='dropdown-sub'>" +
            "<span>Player Characters</span>" +
            "<ul id='PlayerCharacterList' class='dropdown-sub-content'>" +

            "</ul>" +
          "</li>" +

          "<li class='dropdown-sub'>" +
            "<span>NPC Groups</span>" +
            "<ul id='NPCList' class='dropdown-sub-content'>" +

            "</ul>" +
          "</li>" +

        "</ul>" +
      "</div>" +


      "<a href='" + pageRef + "/index.html'><img src='" + pageRef + "/resources/Images/Main banner.png'></a>" +



      "<div class='dropdown'>" +
        "<h3>Quest Log</h3>" +
        "<ul id='ScribeNotesList' class='dropdown-content'>" +

        "</ul>" +
      "</div>" +



      "<div class='dropdown dropdown-left'>" +
        "<h3>World</h3>" +
        "<ul class='dropdown-content'>" +

          "<li class='dropdown-sub dropdown-sub-left'>" +
            "<span>DM Notes</span>" +
            "<ul id='DMNotesList' class='dropdown-sub-content'>" +

            "</ul>" +
          "</li>" +

          "<li class='dropdown-sub dropdown-sub-left'>" +
            "<span>Locations</span>" +
            "<ul id='LocationsList' class='dropdown-sub-content'>" +

            "</ul>" +
          "</li>" +

          "<li><a href='" + pageRef + "/World/Maps/Maps.html'>Maps</a></li>" +

        "</ul>" +
      "</div>" +


    "</nav>"
  );



  let $PlayerCharacterList = $("#PlayerCharacterList");

  $PlayerCharacterList.append("<li><strong>Main</strong><ul id='PCmainList'></ul></li>");
  PlayerCharacters.main.forEach(function(character) {
    $("#PCmainList").append("<li>" +
    "<a href='" + pageRef + "/Characters/PlayerCharacters/Character.html" +
    "?type=main&name=" + character.shortName + "'>" +
    character.name +
    "</a></li>");
  });

  $PlayerCharacterList.append("<li><strong>Guest</strong><ul id='PCguestList'></ul></li>");
  PlayerCharacters.guest.forEach(function(character) {
    $("#PCguestList").append("<li>" +
    "<a href='" + pageRef + "/Characters/PlayerCharacters/Character.html" +
    "?type=guest&name=" + character.shortName + "'>" +
    character.name +
    "</a></li>");
  });


  let $NPCList = $("#NPCList");

  NonPlayerCharacters.forEach(function(group) {
    $NPCList.append("<li>" +
    "<a href='" + pageRef + "/Characters/NPCs/Character.html" +
    "?groupName=" + group.groupName + "&character=all'>" +
    group.groupName +
    "</a></li>");
  });





  let $ScribeNotesList = $("#ScribeNotesList");

  QuestLog.ScribeNotes.forEach(function(note) {
    $ScribeNotesList.append("<li>" +
    "<a href='" + pageRef + "/QuestLog/ScribeNotes/Session.html?name=" + note.name + "'>" +
    note.name +
    "</a></li>");
  });





  let $DMNotesList = $("#DMNotesList");

  DMNotes.forEach(function(note) {
    $DMNotesList.append("<li>" +
    "<a href='" + pageRef + "/World/DMNotes/DMNote.html?name=" + note.name + "'>" +
    note.name +
    "</a></li>");
  });





  let $LocationsList = $("#LocationsList");

  Locations.forEach(function(location) {
    $LocationsList.append("<li>" +
    "<a href='" + pageRef + "/World/Locations/Location.html" +
    "?setName=" + location.setName + "?location=all'>" +
    location.setName +
    "</a></li>");
  });







// Handle main layout

  $("#Main").append("<div id='ParchContainer'/>");

  $("#ParchContainer").append(
    "<img id='ParchTop' class='parchment' src='" + pageRef + "/resources/Images/parchment_top.png'/>",
    "<div id='ParchScroll'><div id='ParchMid' class='parchment'><div id='Content'/></div></div>",
    "<img id='ParchBtm' class='parchment' src='" + pageRef + "/resources/Images/parchment_bottom.png'/>");








// Handle content

  $("#Content").append(convertStringToHTML(`
Welcome to the site for our Red Hand of Doom campaign!
Currently the site is only optimised for reading on larger screens (computers, laptops, maybe a large iPad etc). I plan on making it suitable for mobiles and smaller devices at somepoint.
I'm using a font called 'Gabriola'. It's a cool style font that works well with the whole parchment and fantasy style while still actually being readable. I know some devices may not have this font and so it may all look a bit off - I'm working on it!
I'm still working on getting everything in order, but currently all session notes are up and ready to read.
The next things on my list are;<ol>
<li>{[b]Finish adding session stats.} I've only done the stats for sessions 1, 2, 3 and 19.</li>
<li>{[b]Add player character content pages.} The pages exist, but I haven't got the code set up to fill in the details yet.</li>
<li>{[b]Add statistics page.} Same again, the page exists but no functionality. Eventually it will count up session stats and make some averages etc. We'll finally be able to see who the real damage dealer is ;)</li>
<li>{[b]Add world pages.} This is going to be pages for all of the other stuff. Maps, world lore, DM notes etc. This will be the last thing I work on most likely.</li>
</ol>
`))

});



// Get URL Parameter function

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
};




// Convert text to HTML
function convertStringToHTML(stringToConvert) {

  var lines = stringToConvert.split("\n");

  for (var i = 0; i < lines.length; i++) {
    var initLine = lines[i];

    if (initLine.length == 0) {
      continue;
    }

    var finalLine = "";


    var splitLine = initLine.split(/{|}/);

    for (var j = 0; j < splitLine.length; j++) {
      var split = splitLine[j];
      if (split.length == 0) {
        continue;
      }

      var prefix = "<span>";

      var inner = split.replace(/“/g, "\"")
                       .replace(/”/g, "\"")
                       .replace(/’/g, "'")
                       .replace(/…/g, "...")
                       .replace(/í/g, "&#237;");

      var suffix = "</span>";


      var regex = RegExp('^\[[b|u|i|h]+\]');
      if (regex.test(inner)) {
        var modEnd = inner.indexOf("]");
        var modifiers = inner.substring(1, modEnd);

        var classes = [];
        var element = "span";

        for (var k = 0; k < modifiers.length; k++) {
          switch (modifiers[k]) {
            case "b":
              classes.push("text-bold");
              break;
            case "u":
              classes.push("text-underline");
              break;
            case "i":
              classes.push("text-italic");
              break;
            case "h":
              element = "h4";
              break;
            default:
          }
        }

        prefix = "<" + element + " class='" + classes.join(" ") + "'>";
        inner = inner.substring(modEnd + 1);
        suffix = "</" + element + ">";
      }

      finalLine += (prefix + inner + suffix);
    }

    lines[i] = "<p>" + finalLine + "</p>";
  }


  return lines.join("\n");
}
