$(document).ready(function(){

    title = $("#title")
    // console.log(title.html());
    title.html("JQuery Javascript")

    subtitle = $("#subtitle")
    subtitle.html("using Jquery Javascript for now")
    subtitle.css("color","green")
    subtitle.css("font-size",50)

    image = $("#main-img")
    image.attr("src","assets/images/EeHSbqNXsAEtsb6.jpeg")

    /**
     * Fetch from an API
     */
    $.get("https://jsonplaceholder.typicode.com/todos?_limit=50",
    function(data){
        let todo_list = $("#todo-list")

        data.forEach(d =>{
            todo_list.append(`<li>`+d.title+`</li>`)
        })
    })
});