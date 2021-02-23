const list = []

const renderList = () => {
    $('ul').empty();
    list.forEach((item) => {
        $('ul').append('<li>' + item + '</li>').appendTo('#to-do-list')            
        $('<li>').addClass('to-do-list') 
    });

    // create click event that will strike through the string when the task is completed
    // add the id 'completed' to clicked string
    $('li').on('click', (e) => {
            
        $(e.currentTarget).css('text-decoration', 'line-through').appendTo('#completed');
        
    });

}