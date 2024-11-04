function run_first() {

    var output = document.getElementById("output");

    output.innerHTML = "";

    var table = new Array(10);

    for (var i = 0; i < table.length; i++) {
        table[i] = new Array(10);
    }


    // initialize the table array
    for (var row = 0; row < table.length; row++) {
        for (col = 0; col < table[row].length; col++) {
            table[row][col] = 5;
            output.innerHTML += table[row][col] + "<span>&nbsp;&nbsp;&nbsp;</span>"
                //console.log(table[row][col]);
        }
        output.innerHTML += "<br />";


    }

}
// Array Methods