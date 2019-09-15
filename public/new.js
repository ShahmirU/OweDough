

$('#submit_btn').on("click", function(){
    submit_new($("#first_name"), $("#last_name"), $("#amount"), $("#date"), $("#desc"));
});


function submit_new(first_name, last_name, amount, date, desc){
	$(document).ready(function () {
        $.get('/predict'+'?first_name='+first_name+'&last_name='+last_name+'&amount='+amount+'&date='+date+'&desc='+desc, function(data){
            if(!data){
                console.log("Unable to submit");
                alert("Error: Unable to submit");
            }
            else{
                console.log(data);
                //TODO
            }
        });
    });  
}