const $inputForm = $("#input-form");
const $movieTable = $("#movie-table");

$inputForm.on( "submit", function( event ) {
    event.preventDefault();
    const movieName = $( "#movie-name" ).val();
    const movieRating = $( "#movie-rating" ).val();
    const tr = document.createElement("tr");
    createTDS(tr, movieName, movieRating);
    $movieTable.find("tbody").get(0).append(tr);

  });

function createTDS(tr, movieName, movieRating){
    const td1 = document.createElement("td");
    td1.innerText = movieName;
    const td2 = document.createElement("td");
    td2.innerText = movieRating;
    const myBtn = document.createElement("button");
    myBtn.setAttribute('class', 'delete-button');
    myBtn.innerText= 'X';
    tr.append(td1, td2, myBtn);
}

$movieTable.on("click", 'button', function(e){
    // console.log("Hello");
    const buttonClass = $(e.target).attr("class");


    switch (buttonClass){
        case "movie-name-ascending" :
            sortTableData($movieTable, 0, 'asc');
            break;
        case "movie-name-descending":
            sortTableData($movieTable, 0, 'desc');
            break;
        case "movie-rating-ascending":
            sortTableData($movieTable, 1, 'asc');
            break;
        case "movie-rating-descending":
            sortTableData($movieTable, 1, 'desc');
            break;
        case "delete-button":
            e.target.parentElement.remove();
        default:
    }
});

function sortTableData($table, colIDX, order){
    const tdRows = $table.find('tbody tr').get();

    tdRows.sort(function(a, b){
        const keyA = $(a).children('td').eq(colIDX).text().toUpperCase();
        const keyB = $(b).children('td').eq(colIDX).text().toUpperCase();
        if(order === 'asc'){
            return (keyA > keyB) ? 1 : (keyA < keyB) ? -1 : 0;
        }
        else if (order === 'desc'){
            return (keyA < keyB) ? 1 : (keyA > keyB) ? -1 : 0;
        }
    });

    // Now empty out the table data before populating with the sorted data
    $table.find('tbody').empty();

    $table.find('tbody').get(0).append(...tdRows);
}