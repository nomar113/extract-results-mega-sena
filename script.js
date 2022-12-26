// part 1

var table = document.querySelector("#ctl50_g_cf05b8d5_fd75_46b5_bdfa_a623e654362c > div > div > table")

var results = [];

var i = 0;

while (table.querySelectorAll("tbody > tr")[i].innerText) {
  var row = table.querySelectorAll("tbody > tr")[i].innerText

  var fields = row.split("\t")

  var result = [];

  if (fields[2]) {

    result.push(fields[2]);
    result.push(fields[3]);
    result.push(fields[4]);
    result.push(fields[5]);
    result.push(fields[6]);
    result.push(fields[7]);

    results.push(result);
  }

  result = [];
  i = i + 1;
}

// part 2

var resultsStringify = JSON.stringify(results);
var firstGameStringify = JSON.stringify(['006', '015', '023', '031', '037', '059']);
var myGameStringify = JSON.stringify(['002', '013', '019', '022', '040', '050']);

var existFirstGame = resultsStringify.indexOf(firstGameStringify);
if (existFirstGame != -1) {
  console.log('First game present');
}

var existMyGame = resultsStringify.indexOf(myGameStringify);
if (existMyGame != -1) {
  console.log('My game present');
}
