$(document).ready(function () {
  var input = localStorage.getItem("Value");
    console.log(input)
// for(var j =0; j <9; j++){}
//     if (input === null) {
//         input = "a"
//     } else {
//         input = $('#plannerItem').val()

   // }
    $('#plannerItem').append(input)
    var currentDay = moment().format('dddd, MMMM Do');
    $('#currentDay').html(currentDay);
    function hourBlocks() {
        var currentHour = moment().hour('h:mma')
        var startWork = moment('8:00am', 'h:mma');
        var workHours = 9;

        //console.log(currentHour);
        for (var i = 0; i < workHours; i++) {
            var workHour = startWork.add(1, 'hour');

            $('#timeblocks').append(`<div class='row time-block'>
            <div class='col-md-1 hour description' id='${startWork}'> ${startWork}
            </div>
            <div class='col-md-10 divider'>
                <textarea cols='100%' id='plannerItem' value="${input}">${input}</textarea>
            </div>
            <div id="save" class='col-md-1 saveBtn btn btn-primary'>
                SAVE
            </div>
        `)


            $(document).on('click', '#save', function (input) {
                localStorage.setItem("Value", input)
            })

            if ((currentHour).isBefore(workHour)) {
                //alert('before');
                $('#timeblocks').addClass('past');
            }

            else if ((currentHour).isAfter(workHour)) {
                //alert('after');
                $('#timeblocks').addClass('future');
            } else {
                //alert('else')
                $('#timeblocks').addClass('present');
            }

            input = localStorage.getItem("Value");



            $(document).on('click', '#save', function (input) {
                input = $('#plannerItem').val()
                localStorage.setItem("Value", input)

            })

        }
    }



    hourBlocks();
});