$(document).ready(function() {
    var apiKey = "f41cf05d0b4dfdfaf3af92bc47c34f78"
    var weatherDiv = $(".city-name")
    $("#search-button").on("click", function() {
    var searchValue = $("#city-input").val()
    // console.log(searchValue) 
    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}`,
        success: function(result) {
            console.log(result)
            weatherDiv.append($("div").html(result.name)
            )    
        } 
    })
    } )
})

// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=
