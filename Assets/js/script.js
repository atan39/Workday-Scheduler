
$(function () {
  // TODO: Add a listener for click events on the save button.
  $(".saveBtn").click(function () {
    var timeBlock = $(this).parent().attr("id");
    var task = $(this).siblings(".description").val();
    localStorage.setItem(timeBlock, task);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    var currentHour = dayjs().hour();
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var task = localStorage.getItem(timeBlockId);
    $(this).find(".description").val(task);
  });

  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
