$(() => {
  $.getJSON('feedback', updateFeeback);

  $('#feedback-form').submit((e) => {
    e.preventDefault();
    $.post('feedback', {
      displayName: $('#feedback-name').val(),
      content: $('#feedback-content').val()
    }, updateFeeback);

    $('#feedback-name').val('');
    $('#feedback-content').val('');
    $('#feedback-name').focus();
  }); // handle weather form

  function updateFeeback(data) {
    var feedback = $("<div>", {'class': 'well feedback-display'})
    feedback.html(`
      <p><strong>${data.displayName}: </strong></p>
      <p><strong>${data.content}</strong></p>
      `);
    $('.feedback-display').prepend(feedback);
  }
});
