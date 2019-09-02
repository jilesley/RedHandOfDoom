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

      "<a href='" + pageRef + "/Statistics.html'>Statistics</a>" +



      "<div class='dropdown'>" +
        "<span>Characters</span>" +
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
        "<span>Quest Log</span>" +
        "<ul id='ScribeNotesList' class='dropdown-content'>" +

        "</ul>" +
      "</div>" +



      "<div class='dropdown dropdown-left'>" +
        "<span>World</span>" +
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

  $("#Content").append("<p>" +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    "Morbi dapibus, nulla eu fermentum molestie, orci purus vestibulum neque, ac gravida metus elit ut nisl. " +
    "Pellentesque ultricies tempor erat ut vestibulum. Fusce nec tellus ac sem imperdiet sodales et at dui. " +
    "Sed non felis nec diam euismod condimentum. Duis vehicula nulla id dolor scelerisque, eget sagittis dolor consectetur. " +
    "Integer suscipit eleifend tortor, a condimentum turpis dignissim id. Sed condimentum pretium diam id convallis. " +
    "Quisque maximus mattis nisi, quis tristique ex euismod at." +
    "Ut aliquam mi eu auctor ultrices. " +
    "Interdum et malesuada fames ac ante ipsum primis in faucibus. " +
    "Vivamus mollis semper ex quis rutrum. Nullam a finibus urna. " +
    "Maecenas hendrerit turpis libero, a finibus sapien tempus sed. " +
    "Duis quis tempor massa. Nunc ipsum urna, mollis vel mattis gravida, imperdiet sed mi." +
    "Aliquam rhoncus, orci at dignissim feugiat, ipsum urna aliquet justo, vel laoreet mauris odio vel magna. " +
    "Sed felis eros, ultricies ac metus et, fringilla porttitor risus. " +
    "Vivamus vehicula odio eu purus eleifend porttitor. Quisque a purus mauris. " +
    "Ut ac ligula non elit luctus posuere vitae eu neque. " +
    "Donec iaculis nisl sit amet libero sodales interdum. " +
    "Quisque aliquam nisi quis sollicitudin pharetra. " +
    "Maecenas tincidunt dui elit, quis hendrerit lacus interdum quis. " +
    "Aenean hendrerit, ipsum sed mattis posuere, augue ipsum mattis eros, sit amet faucibus massa tortor vitae lacus. " +
    "Sed nec bibendum odio. Nam nec convallis dolor. " +
    "Duis id orci auctor, pretium diam ut, tempus augue. " +
    "Nulla rhoncus cursus finibus. Ut mi tortor, fringilla sit amet imperdiet quis, tincidunt ut ligula." +
    "Fusce sodales, tellus vel consequat pretium, mi lorem ullamcorper justo, quis consequat metus velit nec metus. " +
    "Phasellus non laoreet metus. Morbi ex erat, varius eget dignissim sed, suscipit accumsan felis. " +
    "Maecenas varius placerat mi, a efficitur elit cursus nec. " +
    "Nullam fermentum dolor leo, a dignissim ex mollis non. " +
    "Curabitur suscipit, libero a consectetur egestas, lorem velit tempor ante, a vestibulum sem tellus porta est. " +
    "Fusce at consequat ligula. Pellentesque placerat neque in nibh accumsan, volutpat imperdiet dui aliquam. " +
    "Mauris sed justo ac nisl imperdiet dictum vitae non lectus. " +
    "Mauris sit amet porttitor tortor." +
    "Nunc id sem mollis, placerat velit eget, porta dui. " +
    "Fusce nec elementum neque. Praesent a ante a nulla elementum dapibus sit amet vitae lorem. " +
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. " +
    "Proin posuere sapien ut nisi accumsan fringilla quis a elit. Morbi in quam lorem. " +
    "Aenean luctus metus non sapien vestibulum, vitae imperdiet odio facilisis." +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    "Morbi dapibus, nulla eu fermentum molestie, orci purus vestibulum neque, ac gravida metus elit ut nisl. " +
    "Pellentesque ultricies tempor erat ut vestibulum. Fusce nec tellus ac sem imperdiet sodales et at dui. " +
    "Sed non felis nec diam euismod condimentum. Duis vehicula nulla id dolor scelerisque, eget sagittis dolor consectetur. " +
    "Integer suscipit eleifend tortor, a condimentum turpis dignissim id. Sed condimentum pretium diam id convallis. " +
    "Quisque maximus mattis nisi, quis tristique ex euismod at." +
    "Ut aliquam mi eu auctor ultrices. " +
    "Interdum et malesuada fames ac ante ipsum primis in faucibus. " +
    "Vivamus mollis semper ex quis rutrum. Nullam a finibus urna. " +
    "Maecenas hendrerit turpis libero, a finibus sapien tempus sed. " +
    "Duis quis tempor massa. Nunc ipsum urna, mollis vel mattis gravida, imperdiet sed mi." +
    "Aliquam rhoncus, orci at dignissim feugiat, ipsum urna aliquet justo, vel laoreet mauris odio vel magna. " +
    "Sed felis eros, ultricies ac metus et, fringilla porttitor risus. " +
    "Vivamus vehicula odio eu purus eleifend porttitor. Quisque a purus mauris. " +
    "Ut ac ligula non elit luctus posuere vitae eu neque. " +
    "Donec iaculis nisl sit amet libero sodales interdum. " +
    "Quisque aliquam nisi quis sollicitudin pharetra. " +
    "Maecenas tincidunt dui elit, quis hendrerit lacus interdum quis. " +
    "Aenean hendrerit, ipsum sed mattis posuere, augue ipsum mattis eros, sit amet faucibus massa tortor vitae lacus. " +
    "Sed nec bibendum odio. Nam nec convallis dolor. " +
    "Duis id orci auctor, pretium diam ut, tempus augue. " +
    "Nulla rhoncus cursus finibus. Ut mi tortor, fringilla sit amet imperdiet quis, tincidunt ut ligula." +
    "Fusce sodales, tellus vel consequat pretium, mi lorem ullamcorper justo, quis consequat metus velit nec metus. " +
    "Phasellus non laoreet metus. Morbi ex erat, varius eget dignissim sed, suscipit accumsan felis. " +
    "Maecenas varius placerat mi, a efficitur elit cursus nec. " +
    "Nullam fermentum dolor leo, a dignissim ex mollis non. " +
    "Curabitur suscipit, libero a consectetur egestas, lorem velit tempor ante, a vestibulum sem tellus porta est. " +
    "Fusce at consequat ligula. Pellentesque placerat neque in nibh accumsan, volutpat imperdiet dui aliquam. " +
    "Mauris sed justo ac nisl imperdiet dictum vitae non lectus. " +
    "Mauris sit amet porttitor tortor." +
    "Nunc id sem mollis, placerat velit eget, porta dui. " +
    "Fusce nec elementum neque. Praesent a ante a nulla elementum dapibus sit amet vitae lorem. " +
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. " +
    "Proin posuere sapien ut nisi accumsan fringilla quis a elit. Morbi in quam lorem. " +
    "Aenean luctus metus non sapien vestibulum, vitae imperdiet odio facilisis." +
    "</p>")
});
