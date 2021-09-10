// Date and Time
{
  const date = moment().format('dddd, MMMM Do');
  $('#currentDay').append(date);
}

//color code boxes for past present future
const time = moment().startOf('day').add(8, 'hour');
const hour = moment().format('H');

for (i = 9; i < 18; i++) {
  let timeColumn = time.add(1, 'h').format('hA');
  let color;

  if (hour === i) {
    color = 'present';
  } else if (hour < i) {
    color = 'past';
  } else if (hour > 1) {
    color = 'future';
  }

  const container = 
   `<container class="row" id='hour-${i}'>
      <div class="col-2"></div>
      <div class="hour p-3 col-1">${timeColumn}</div>
      <textarea class="description col-6 ${color} hour-${i}"></textarea>
      <button class="saveBtn col-1 fas fa-save fa-1x"></button
      <div class="col-2">
      </div> 
    </container>
    <p></p>`;

    $('#containers').append(container);
};

$(".saveBtn").on("click", function () {
    const savedTask = $(this).siblings(".description").val();
    const savedTime = $(this).parent().attr("id");
    localStorage.setItem(savedTime, savedTask);
});

for (var i = 9; i < 18; i++) {
    $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`));
}