function addUser() {
    player1 = document.getElementById("player1_input").value;
    player2 = document.getElementById("player2_input").value;
    
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);

    window.location = "game_page.html";

}

player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1").innerHTML = player1 + ":";
document.getElementById("player2").innerHTML = player2 + ":";


document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;


document.getElementById("player_question").innerHTML = "qustion turn - " + player1;
document.getElementById("player_answer").innerHTML = "answer turn - " + player2;

function send() {
    gword = document.getElementById("word").value;
    word = gword.toLowerCase();
    console.log("word to lower case is - " + word);

    char1 = word.charAt(1);
    console.log(char1);

    l2 = Math.floor(word.length/2);
    char2 = word.charAt(l2);
    console.log("char2");

    l1 = word.length - 1;
    char3 = word.charAt(l1);
    console.log("char3")

    r1 = word.replace(char1, "_")
    r2 = r1.replace(char2, "_")
    r3 = r2.replace(char3, "_")
    console.log(r3);

    qw = "<h4 id= 'word_display'>Q."+ r3 + "</h4>";
    ib = "<br>Answer : <input type= 'text' id= 'input_check_box'>";
    cb = "<br><br><button class= 'btn btn-info' onclick= 'check()'>Check</button>";
    row = qw + ib + cb;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";


}

question_turn = "player1";
answer_turn = "player2";



function check() {

get_answer = document.getElementById("input_check_box").value;
answer = get_answer.toLowerCase();
console.log("lowercase = " + answer);

if (answer == word) {
    if (answer_turn == "player1") {
        player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = player1_score;

    }
    else {
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;

    }
}

if (question_turn == "player1") {
    question_turn = "player2";
    document.getElementById("player_question").innerHTML = "question turn -" + player2;

}

else {
    question_turn = "player1";
    document.getElementById("player_question").innerHTML = "question turn -" + player1;


}

if (answer_turn == "player1") {
    answer_turn = "player2";
    document.getElementById("player_answer").innerHTML = "answer turn -" + player2;

}

else {
    answer_turn = "player1";
    document.getElementById("player_answer").innerHTML = "answer turn -" + player1;


}

document.getElementById("output").innerHTML = "";

}
