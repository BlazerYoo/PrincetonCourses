// dependencies: search.js

/* MEL: ideally these const arrays will be stored in the database */

// distributions
const distributions = {
  'EC': 'Epistemology and Cognition',
  'EM': 'Ethical Thought and Moral Values',
  'HA': 'Historical Analysis',
  'LA': 'Literature and the Arts',
  'SA': 'Social Analysis',
  'QR': 'Quantitative Reasoning',
  'STL': 'Science and Technology with Lab',
  'STN': 'Science and Technology without Lab'
}

// departments
const departments = {
 'AAS': 'African American Studies',
 'AFS': 'African Studies',
 'AMS': 'American Studies',
 'ANT': 'Anthropology',
 'AOS': 'Atmospheric & Oceanic Sciences',
 'APC': 'Appl and Computational Math',
 'ARA': 'Arabic',
 'ARC': 'Architecture',
 'ART': 'Art and Archaeology',
 'AST': 'Astrophysical Sciences',
 'ATL': 'Atelier',
 'BCS': 'Bosnian-Croatian-Serbian',
 'CBE': 'Chemical and Biological Engr',
 'CEE': 'Civil and Environmental Engr',
 'CGS': 'Cognitive Science',
 'CHI': 'Chinese',
 'CHM': 'Chemistry',
 'CHV': 'Center for Human Values',
 'CLA': 'Classics',
 'CLG': 'Classical Greek',
 'COM': 'Comparative Literature',
 'COS': 'Computer Science',
 'CTL': 'Center for Teaching & Learning',
 'CWR': 'Creative Writing',
 'CZE': 'Czech',
 'DAN': 'Dance',
 'EAS': 'East Asian Studies',
 'ECO': 'Economics',
 'ECS': 'European Cultural Studies',
 'EEB': 'Ecology and Evol Biology',
 'EGR': 'Engineering',
 'ELE': 'Electrical Engineering',
 'ENE': 'Energy Studies',
 'ENG': 'English',
 'ENT': 'Entrepreneurship',
 'ENV': 'Environmental Studies',
 'EPS': 'Contemporary European Politics',
 'FIN': 'Finance',
 'FRE': 'French',
 'FRS': 'Freshman Seminars',
 'GEO': 'Geosciences',
 'GER': 'German',
 'GHP': 'Global Health & Health Policy',
 'GLS': 'Global Seminar',
 'GSS': 'Gender and Sexuality Studies',
 'HEB': 'Hebrew',
 'HIN': 'Hindi',
 'HIS': 'History',
 'HLS': 'Hellenic Studies',
 'HOS': 'History of Science',
 'HPD': 'History/Practice of Diplomacy',
 'HUM': 'Humanistic Studies',
 'ISC': 'Integated Science Curriculum',
 'ITA': 'Italian',
 'JDS': 'Judaic Studies',
 'JPN': 'Japanese',
 'JRN': 'Journalism',
 'KOR': 'Korean',
 'LAO': 'Latino Studies',
 'LAS': 'Latin American Studies',
 'LAT': 'Latin',
 'LCA': 'Lewis Center for the Arts',
 'LIN': 'Linguistics',
 'MAE': 'Mech and Aerospace Engr',
 'MAT': 'Mathematics',
 'MED': 'Medieval Studies',
 'MOD': 'Media and Modernity',
 'MOG': 'Modern Greek',
 'MOL': 'Molecular Biology',
 'MSE': 'Materials Science and Engr',
 'MTD': 'Music Theater',
 'MUS': 'Music',
 'NES': 'Near Eastern Studies',
 'NEU': 'Neuroscience',
 'ORF': 'Oper Res and Financial Engr',
 'PAW': 'Ancient World',
 'PER': 'Persian',
 'PHI': 'Philosophy',
 'PHY': 'Physics',
 'PLS': 'Polish',
 'POL': 'Politics',
 'POP': 'Population Studies',
 'POR': 'Portuguese',
 'PSY': 'Psychology',
 'QCB': 'Quantitative Computational Bio',
 'REL': 'Religion',
 'RES': 'Russian, East Europ, Eurasian',
 'RUS': 'Russian',
 'SAN': 'Sanskrit',
 'SAS': 'South Asian Studies',
 'SLA': 'Slavic Languages and Lit',
 'SML': 'Statistics & Machine Learning',
 'SOC': 'Sociology',
 'SPA': 'Spanish',
 'STC': 'Science and Technology Council',
 'SWA': 'Swahili',
 'THR': 'Theater',
 'TPP': 'Teacher Preparation',
 'TRA': 'Translation, Intercultural Com',
 'TUR': 'Turkish',
 'TWI': 'Twi',
 'URB': 'Urban Studies',
 'URD': 'Urdu',
 'VIS': 'Visual Arts',
 'WRI': 'Princeton Writing Program',
 'WWS': 'Woodrow Wilson School'
}

// complete list of filters
const filters = [
  {
    'id': 'special',
    'label': 'Special',
    'options': {
      '*': 'All courses'
    },
    'props': {}
  },
  {
    'id': 'distributions',
    'label': 'Distributions',
    'options': distributions,
    'props': {'button': 1}
  },
  {
    'id': 'courselevels',
    'label': 'Course levels',
    'options': {
      '1XX': '100 Level',
      '2XX': '200 Level',
      '3XX': '300 Level',
      '4XX': '400 Level',
      '5XX': '500 Level'
    },
    'props': {'button': 1}
  },
  {
    'id': 'ratings',
    'label': 'Ratings',
    'options': {
      'NEW': 'New course'
    },
    'props': {'button': 1}
  },
  {
    'id': 'pdfoptions',
    'label': 'P/D/F options',
    'options': {
      'PDF': 'P/D/F available',
      'PDFO': 'P/D/F only',
      'NPDF': 'No P/D/F'
    },
    'props': {'button': 1}
  },
  {
    'id': 'auditoptions',
    'label': 'Audit options',
    'options': {
      'AUDIT': 'Audit available',
      'NAUDIT': 'Audit unavailable'
    },
    'props': {'button': 1}
  },
  {
    'id': 'departments',
    'label': 'Departments',
    'options': departments,
    'props': {'button': 1}
  }
]

// updates buttons in the suggest pane based on search query
function updateSuggest() {
  $('.suggest-button').each(function() {
    $(this).removeClass('active')
    $(this).find('i.suggest-icon').removeClass('fa-minus')
    $(this).find('i.suggest-icon').addClass('fa-plus')
    $(this).attr('data-original-title', 'Add to search')
  })

  var queries = $('#searchbox').val().split(' ')

  for (var index in queries) {
    var query = queries[index]
    $('.suggest-button').each(function() {
      var term = this.term
      if (query.toLowerCase() !== term.toLowerCase()) return

      $(this).addClass('active')
      $(this).find('i.suggest-icon').removeClass('fa-plus')
      $(this).find('i.suggest-icon').addClass('fa-minus')
      $(this).attr('data-original-title', 'Remove from search')
    })
  }
}

// handles click in navbar to toggle suggest pane
function toggleSuggest() {
  // swipe if in mobile
  if (document.isMobile) {
    $('#main-pane').slick('slickGoTo', 0)
    $('.navbar-collapse').collapse('hide')
    $('#suggest-toggle').tooltip('hide')
    $('#suggest-toggle').blur()
    return false
  }

  var isVisible = $('#suggest-pane').is(':visible')

  if (isVisible) $('#suggest-pane').animate({width: 'hide'})
  else $('#suggest-pane').animate({width: 'show'})
  $('#suggest-resizer').removeClass(isVisible ? 'resizer' : 'resizer-inactive')
  $('#suggest-resizer').addClass(isVisible ? 'resizer-inactive' : 'resizer')
  if (isVisible) $('#suggest-toggle').removeClass('active')
  else $('#suggest-toggle').addClass('active')
  $('#suggest-toggle').attr('data-original-title', isVisible ? 'Show search filters' : 'Hide search filters')
  $('#suggest-toggle').tooltip('hide')
  $('#suggest-toggle').blur()

  return false
}

// loads contents of suggest pane
function suggest_load() {
  $('#suggest-all-toggle').click(function() {
    $('.suggest-button').each(function() {
      removeFromSearchBox(this.term)
    })
  })

  for (var i in filters) {
    var filter = filters[i]
    $padding = $('#suggest-padding').detach()
    $('#suggest-pane').append(newDOMsuggestSection(filter))
    $('#suggest-pane').append($padding)
  }
}

// returns a DOM object for a section of the suggest pane with the given filter
function newDOMsuggestSection(filter) {
  var id = filter.id
  var label = filter.label
  var options = filter.options
  var props = filter.props
  var hasButton = filter.props.hasOwnProperty('button')

  var buttons = (
    '<h5 class="flex-item-rigid">'
    + '<small class="text-button suggest-all" data-toggle="tooltip" data-original-title="Include all"><strong>ALL</strong></small> '
    + '<small>&middot;</small> '
    + '<small class="text-button suggest-none" data-toggle="tooltip" data-original-title="Remove all"><strong>NONE</strong></small>'
  + '</h5> '
  )

  var htmlString = (
    '<div id="suggest-' + id + '">'
    + '<div id="suggest-' + id + '-header" class="flex-container-row section-header">'
      + '<h5 class="flex-item-stretch truncate"><strong>' + label + '</strong></h5>'
      + (hasButton ? buttons : '')
    + '</div>'
    + '<ul id="suggest-' + id + '-body" class="list-group marginless">'
      + '<!-- ' + label + ' go here -->'
    + '</ul>'
  + '</div>'
  )

  var section = $.parseHTML(htmlString)[0]
  var $body = $(section).find('ul')
  if (hasButton) {
    var $all = $(section).find('.suggest-all')
    var $none = $(section).find('.suggest-none')

    $all.click(suggest_toggle(id, 'all'))
    $none.click(suggest_toggle(id, 'none'))
  }

  for (var term in options) {
    var description = options[term]
    $body.append(newDOMsuggestResult(term, description, props))
  }

  return section;
}

// returns a function that enables all/none filters in section with given id
// -- prop: should be 'all' or 'none'
function suggest_toggle(id, prop) {
  if (prop === 'all')
    var func = appendToSearchBox
  else /* if (prop === 'none') */
    var func = removeFromSearchBox

  return function() {
    var $body = $('#suggest-' + id + '-body')
    $body.children().each(function() {
      func(this.term)
    })
  }
}

// returns a DOM object for a search suggestion
// props: properties for conditional rendering:
//  - 'button' is defined => displays button to add/remove from search
function newDOMsuggestResult(term, description, props) {
  var hasButton = (props != undefined) && props.hasOwnProperty('button')
  if (hasButton) var button = (
    '<div '
    + 'class="flex-item-rigid suggest-button" '
    + 'data-toggle="tooltip" '
    + 'data-original-title="Add to search" '
    + 'data-placement="right"'
  + '>'
      + '<i class="fa fa-plus suggest-icon"></div>'
  + '</div>'
  )

  var tooltip = ' title="' + description + '"'

  var htmlString = (
    '<li class="list-group-item suggest-result flex-container-row">'
    + '<div '
      + 'data-toggle="tooltip"'
      + 'data-original-title="' + description + '" '
      + 'class="flex-item-stretch truncate suggest-text"'
    + '>'
        + '<strong>' + term + '</strong>&nbsp; '
        + description
    + '</div>'
    + (hasButton ? button : '')
  + '</li>'
  )

  var entry = $.parseHTML(htmlString)[0]         // create DOM object
  entry.term = term
  if (hasButton) {
    var button = $(entry).find('.suggest-button')[0] // button
    button.term = term                               // bind term

    $(button).click(toggleTerm)
  }

  // enable click to search
  $(entry).click(function() {
    $('#searchbox').val(term.toLowerCase())
    searchFromBox()
    return false
  })

  return entry
}

// handles click of suggest button
function toggleTerm() {
  var $button = $(this)
  var isSearched = $button.hasClass('active')
  var term = this.term

  if (isSearched) { /* remove from searchbox */
    removeFromSearchBox(term)
  } else { /* insert into searchbox */
    appendToSearchBox(term)
  }
  return false
}

// appends the term to the #searchbox
function appendToSearchBox(term) {
  var termCount = 0
  var queries = $('#searchbox').val().split(' ')
  var newqueries = []
  for (index in queries) {
    var query = queries[index]
    if (query.toLowerCase() !== term.toLowerCase() || termCount === 0) {
      newqueries.push(query)
      if (query.toLowerCase() === term.toLowerCase()) termCount += 1
    }
  }
  if (termCount === 0) newqueries.push(term.toLowerCase())

  $('#searchbox').val(newqueries.join(' '))

  searchFromBox(true)
}

// removes the term from the #searchbox
function removeFromSearchBox(term) {
  var queries = $('#searchbox').val().split(' ')
  var newqueries = []
  for (index in queries) {
    var query = queries[index]
    if (query.toLowerCase() !== term.toLowerCase()) {
      newqueries.push(query)
    }
  }
  $('#searchbox').val(newqueries.join(' '))

  searchFromBox(true)
}
