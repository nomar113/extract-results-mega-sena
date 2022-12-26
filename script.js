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
