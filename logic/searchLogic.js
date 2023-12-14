$(document).on("input",function(ev){
searchForCities(document.getElementById("inputBox").value,response =>{
    for (let i =0;i<=response.length;i++){
        let city = response[i];
        console.log(city)


        $("<div/>", {
            id: 'link_html_edit',
            addClass: "hints",
            text: city.name,
            click: function(){
                window.open('http://localhost:63342/Weather%20forecast/weather%20information/inner.html?_ijt=jbmmftuak4656uspd96p2en6tt&_ij_reload=RELOAD_ON_SAVE')
            }
        }).appendTo(theHintMenu);

    }

});

});