$(document).ready(function() {
  let $Content = $("#Content");

  $Content.html("<div id='Summary'>" +
      "<h1 id='SummaryName'></h2>" +
      "<h2 id='SummaryTitle' class='quote'></h3>" +
      "<div class='statistics'>" +
        "<p id='SummaryParty'><strong>Party:</strong></p>" +
        "<p id='SummaryDamage'><strong>Damage Dealt:</strong></p>" +
        "<p id='SummaryDamageTaken'><strong>Damage Taken:</strong></p>" +
        "<p id='SummaryHeals'><strong>Healing Dealt:</strong></p>" +
        "<p id='SummaryHealsRecieved'><strong>Healing Recieved:</strong></p>" +
        "<p id='SummaryDmDamage'><strong>DM Damage:</strong></p>" +
        "<p id='SummaryKills'><strong>Kill count:</strong></p>" +
        "<p id='SummaryBigKills'><strong>\"How do you want to do this?\":</strong></p>" +
        "<p id='SummaryDowned'><strong>Characters Downed:</strong></p>" +
        "<p id='SummaryResurrections'><strong>Attempted Resurrections:</strong></p>" +
        "<p id='SummaryDeaths'><strong>Character Deaths:</strong></p>" +
      "</div>" +
    "</div>" +
    "<div id='Notes'></div>"
  );

  let $Name = $("#SummaryName");
  let $Title = $("#SummaryTitle");
  let $Party = $("#SummaryParty");
  let $Damage = $("#SummaryDamage");
  let $DamageTaken = $("#SummaryDamageTaken");
  let $Heals = $("#SummaryHeals");
  let $HealsRecieved = $("#SummaryHealsRecieved");
  let $DmDamage = $("#SummaryDmDamage");
  let $Kills = $("#SummaryKills");
  let $BigKills = $("#SummaryBigKills");
  let $Downed = $("#SummaryDowned");
  let $Resurrections = $("#SummaryResurrections");
  let $Deaths = $("#SummaryDeaths");

  let $Notes = $("#Notes");

  var sessionName = getUrlParameter("name");


  QuestLog.ScribeNotes.forEach(function(note) {
    if (note.name == sessionName) {

      // Handling Summary

      $Name.append(note.name + " - " + note.date);
      $Title.append(note.title);


      var DamageCnt = 0;
      var DamageTakenCnt = 0;
      var HealsCnt = 0;
      var HealsRecievedCnt = 0;
      var DMdamage = 0;
      var KillsCnt = 0;
      var BigKillsCnt = 0;
      var DownedCnt = 0;
      var ResurrectionsCnt = 0;
      var DeathsCnt = 0;


      note.characters.forEach(function(character) {

        $Party.append(" " + character.name + ",");

        if (character.damageDealt > 0) {
          DamageCnt++;
          $Damage.append(" " + character.name + " " + character.damageDealt + ",");
        }

        if (character.damageTaken > 0) {
          DamageTakenCnt++;
          $DamageTaken.append(" " + character.name + " " + character.damageTaken + ",");
        }

        if (character.healing > 0) {
          HealsCnt++;
          $Heals.append(" " + character.name + " " + character.healing + ",");
        }

        if (character.healingRecieved > 0) {
          HealsRecievedCnt++;
          $HealsRecieved.append(" " + character.name + " " + character.healingRecieved + ",");
        }

        DMdamage += character.damageTaken;

        if (character.kills > 0) {
          KillsCnt++;
          $Kills.append(" " + character.name + " " + character.kills + ",");
        }

        if (character.bigKills > 0) {
          BigKillsCnt++;
          $BigKills.append(" " + character.name + " " + character.bigKills + ",");
        }

        if (character.timesUnconcious > 0) {
          DownedCnt++;
          $Downed.append(" " + character.name + " " + character.timesUnconcious + ",");
        }

        if (character.deaths > 0) {
          DeathsCnt++;
          $Deaths.append(" " + character.name + " " + character.deaths + ",");
        }

        if (character.deaths > 0) {
          DeathsCnt++;
          $Deaths.append(" " + character.name + " " + character.deaths + ",");
        }

      })


      if (DamageCnt == 0) {
        $Damage.append(" <em>None</em>");
      }

      if (DamageTakenCnt == 0) {
        $DamageTaken.append(" <em>None</em>");
      }

      if (HealsCnt == 0) {
        $Heals.append(" <em>None</em>");
      }

      if (HealsRecievedCnt == 0) {
        $HealsRecieved.append(" <em>None</em>");
      }

      $DmDamage.append(" " + DMdamage);

      if (KillsCnt == 0) {
        $Kills.append(" <em>None</em>");
      }

      if (BigKillsCnt == 0) {
        $BigKills.append(" <em>None</em>");
      }

      if (DownedCnt == 0) {
        $Downed.append(" <em>None</em>");
      }

      if (ResurrectionsCnt == 0) {
        $Resurrections.append(" <em>None</em>");
      }

      if (DeathsCnt == 0) {
        $Deaths.append(" <em>None</em>");
      }



      // Handling Notes

      var lines = note.content.split("\n");

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

          var prefix = "<p>";
          var inner = split;
          var suffix = "</p>";

          var regex = RegExp('^\[[b|u|i|h]+\]');
          if (regex.test(split)) {
            var modEnd = split.indexOf("]");
            var modifiers = split.substring(1, modEnd);

            var classes = [];
            var element = "p";

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
            inner = split.substring(modEnd + 1);
            suffix = "</" + element + ">";
          }

          finalLine += (prefix + inner + suffix);
        }

        lines[i] = finalLine;
      }

      $Notes.append(lines.join("\n"));

    }
  });



});
