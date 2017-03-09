// An example script that shows how the page can make a request to our server
var $

// A function to fetch the course data
var getCourseData = function () {
  // Prepare the data for the request to the server
  var query = {
    $text: {
      $search: $('#searchbox').val()
    }
  }
  if ($('#semester').val()) {
    query.semester = $('#semester').val()
  }
  var sort = {
    score: {
      $meta: 'textScore'
    }
  }

  // Send the request to the server
  $.post('/api/courses', {
    query: JSON.stringify(query),
    sort: JSON.stringify(sort)
  }, function (courses, status) {
    // Basic error handling
    if (status != 'success') {
      window.alert('An error occured and your search could not be completed.')
    }

    // Empty the results area
    $('#results').html('')

    // Insert the course results into the area
    for (var courseIndex in courses) {
      var thisCourse = courses[courseIndex]
      $('#results').append('<div><span style="font-weight:bold">' + thisCourse.department + ' ' + thisCourse.catalogNumber + '</span> ' + thisCourse.title + '</div>')
    }
  })
}

// These functions are run once the DOM has loaded
$(document).ready(function () {
  // Every time a key is pressed inside the #searchbox, call the getCourseData function
  $('#searchbox').keyup(getCourseData)
  $('#semester').change(getCourseData)

  $.get('/api/semesters', function (semesters) {
    for (var semesterIndex in semesters) {
      var thisSemester = semesters[semesterIndex]
      $('#semester').append('<option value="' + thisSemester.code + '">' + thisSemester.name + '</select>')
    }
  })
})
