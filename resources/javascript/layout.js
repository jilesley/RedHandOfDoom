$(document).ready(function() {
  $("body").append(
    "<header><img class='center' src='./resources/Images/Main banner.png'></header>",
    "<div id='Main'/>");

  $("#Main").append("<div id='ParchContainer'/>");

  $("#ParchContainer").append(
    "<img id='ParchTop' class='parchment' src='./resources/Images/parchment_top.png'/>",
    "<div id='ParchScroll'><div id='ParchMid' class='parchment'><div id='Content'/></div></div>",
    "<img id='ParchBtm' class='parchment' src='./resources/Images/parchment_bottom.png'/>");

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
