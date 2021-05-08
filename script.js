function newItem() {

// append input to list.    
    let input = $('#input').val();
    let list = $('#list');
    let li = $('<li>'+input+'</li>');
    
    if (!input) {
        alert('Please enter text.');
    } else {
        list.append(li);
    }

// cross out item
    li.on('click', function() {
        li.addClass('strike');
    })

// delete item
    let deleteButton = $('<crossOutButton></crossOutButton>');
    deleteButton.append(document.createTextNode('X'));
    li.append(deleteButton);

    deleteButton.on('click', function() {
        li.addClass('delete');
    })

// move items
    list.sortable();
   
};