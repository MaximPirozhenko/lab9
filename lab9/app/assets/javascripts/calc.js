function show_result(data) {
    var table = document.getElementById("result");
        table.innerHTML = '';
        if (data.kolvo_posl == 0) {
            alert('Последовательностей не найдено')
        } else {
            var row = table.insertRow();
            var cell1 = row.insertCell();
            cell1.innerText = 'Номер';
            var cell2 = row.insertCell();
            cell2.innerText = 'Число';
            for (i = 0; i < data.inputed.length; i++) {
                row = table.insertRow();
                cell1 = row.insertCell();
                cell1.innerText = i + 1;
                cell2 = row.insertCell();
                cell2.innerText = data.inputed[i];
            }
            row = table.insertRow();
            cell1 = row.insertCell();
            cell1.innerText = 'Все последовательности';
            cell2 = row.insertCell();
            cell2.innerText = data.all;
            row = table.insertRow();
            cell1 = row.insertCell();
            cell1.innerText = 'Количество последовательностей';
            cell2 = row.insertCell();
            cell2.innerText = data.kolvo_posl;
            row = table.insertRow();
            cell1 = row.insertCell();
            cell1.innerText = 'Самая длинная последовательность';
            cell2 = row.insertCell();
            cell2.innerText = data.max_posl;
    }
}
$(document).ready(function(){
    $("#calc_form").bind("ajax:success",
        function(xhr, data, status) {
// data is already an object
            show_result(data)
        })
});