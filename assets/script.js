// a variable for each time block div, so that i can target that specific time block to add input and to compare time blockt to current time
var allDivs = $('.description');
var nineAm = $('#09').attr('id');
var tenAm = $('#10').attr('id');
var elevenAm = $('#11').attr('id');
var twelvePm = $('#12').attr('id');
var onePm = $('#13').attr('id');
var twoPm = $('#14').attr('id');
var threePm = $('#15').attr('id');
var fourPm = $('#16').attr('id');
var fivePm = $('#17').attr('id');
// an array so i can loop through all the variables to do my time/current time comparisons and add text to local storage
var hours = [nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm, threePm, fourPm, fivePm];
// this function will target each save button and set the local storage with the id (which corresponds to the time on the time block) and the text input
$(function () {
    $('.saveBtn').on("click",function(event){
    event.preventDefault();
    let id = $(this).parent().attr('id')
    let text = $(this).prev().val()
    localStorage.setItem(id,text)
  })
});
// this variable will use the day.js api to call the current hour in military time, to be used for the comparison in the next function
  var currentTime = dayjs().hour();
// this function will loop through each time-block div and use conditional statements to set the color of the text area and also log the text from local storage 
$('.time-block').each(function() {
    let timeLabel = $(this).attr('id')
    if($(this).attr('id') == currentTime) {
        $(this).addClass('present');
    } else if($(this).attr('id') > currentTime) {
        $(this).addClass('future');
    } else {
        $(this).addClass('past');
    }
    $(this).children('textarea').val(localStorage.getItem(timeLabel));
// this variable will set the current month/day/year (using day.js api) and add it to the top of the page
  var today = dayjs();
  $('#currentDay').text(today.format('dddd MMMM D, YYYY'));
});