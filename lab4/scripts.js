numbers_input = document.getElementById("numbers-input");
sort_button = document.getElementById("sort-button");
output_table = document.getElementById("output-table");
console.log(sort_button)
sort_button.addEventListener("click", sort_numbers);

function break_string_into_numbers(string){
    string = string.split(" ");
    let list_of_integers = [];
    for(let number of string){
        list_of_integers.push(parseInt(number));
    }
    return list_of_integers;
}

function populate_table(number_list){
    output_table.innerHTML = "";

    for(let i=0; i<number_list.length/5; i++){
        let current_row = output_table.insertRow(-1);
        for(let j = 0; j<5; j++){
            let current_cell = current_row.insertCell(-1);
            current_cell.innerText = number_list[i * 5 + j];
            console.log(i * 5 + j);
        }
    }
}

function sort_numbers(){
    let input_string = numbers_input.value;
    let number_list = break_string_into_numbers(input_string);



    let number_of_missing_elements = 0;
    if(number_list.length % 5 !== 0){
        number_of_missing_elements = 5 - number_list.length % 5;
        for(let i=0; i<number_of_missing_elements; i++){
            number_list.push("")
        }
    }

    number_list = number_list.sort(function(a, b){return a-b});
    console.log(number_list);
    populate_table(number_list);
}
