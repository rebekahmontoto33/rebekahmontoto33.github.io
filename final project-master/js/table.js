  var quiz;

  quiz = "<table border='1' width='400' cellspacing='3' cellpadding='3' textalign='center' >"

  for(i = 1; i<= 12; i++){
    quiz = quiz + "<tr>";

  for(j = 1; j<= 12; j++){
          quiz = quiz + "<td>" + i * j + "</td>";
        }
    quiz = quiz + "</tr>";
  }

  quiz = quiz + "</quiz";

  document.write(quiz);
