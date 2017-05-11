// shows and hides navigation //
//----------------------------//

$('#links').hide();

$('#navigation').click(function(e) {
  
  e.preventDefault();

  $(this).next('#links').slideToggle(400);

});
// shows stored section //
//----------------------//

$('#stored').hide();
$('#arc').hide();

$('#square').click(function() {

  $('#background').toggleClass('bg-white');
  $('#navigation').toggleClass('bg-white');
  $('#h1').toggleClass('t-dark-blue');
  $('#currently').toggleClass('t-dark-blue');

  $(this).next('#stored').slideToggle(400);

  $('#displayed').hide();
  $('#square').hide();
  $('#arc').show();

});

// shows displayed section //
//-------------------------//

$('#arc').click(function() {

  $('#background').toggleClass('bg-white');
  $('#navigation').toggleClass('bg-white');
  $('#h1').toggleClass('t-dark-blue');
  $('#currently').toggleClass('t-dark-blue');

  $('#displayed').slideToggle(400).show();

  $('#stored').hide();
  $('#square').show();
  $('#arc').hide();

});

// shows and hides displayed sidebar search //
//------------------------------------------//

$("#sort-displayed").hide();

$("#sidebar-displayed").click(function() {

  $(this).prev("#sort-displayed").toggle(400);

  // $(".object").addClass('object-right');

});

// shows and hides stored sidebar search //
//---------------------------------------//

$("#sort-stored").hide();

$("#sidebar-stored").click(function() {

  $(this).prev("#sort-stored").toggle(400);

});

// displayed // data from sheetlabs //
//----------------------------------//

var displayed = (function() {
    var displayed = null;
    $.ajax({
        'async': false,
        'global': false,
        'type': 'GET',
        'url': "https://sheetlabs.com/TANN/displayedobjects",
        'dataType': 'json',
        'success': function (data) {
         displayed = data
        },
        'error': function(jqXHR, textStatus, errorThrown) {
          return $("#a").text('Sorry!  There was an error requesting your data.')
        }
    });
    return displayed
})();

// stored // data from sheetlabs //
//-------------------------------//

var stored = (function() {
    var stored = null;
    $.ajax({
        'async': false,
        'global': false,
        'type': 'GET',
        'url': "https://sheetlabs.com/TANN/storedobjects",
        'dataType': 'json',
        'success': function (data) {
          stored = data
        },
        'error': function(jqXHR, textStatus, errorThrown) {
          return $("#two").text('Sorry!  There was an error requesting your data.')
        }
    });
    return stored
})();

// text change functions //
//-----------------------//

var textChanges = function() {

  // toggles object descriptions //
  //-----------------------------//

  $(".meaning").hide();

  $(".object").click(function() {

    $(this).next(".meaning").slideToggle(200);

  });

  // show dropdown navigation //
  //--------------------------//

  $(".l-dropdown").hide();

  $(".l-label").click(function() {

    $(".l-dropdown").slideToggle(200);

  });

  // toggles text colors based on use //
  // -------------------------------- //

  $(".practical").click(function() {

    $(this).toggleClass('t-blue');  

  });

  $(".both").click(function() {

    $(this).toggleClass('t-green');  

  });

  $(".beautiful").click(function() {

    $(this).toggleClass('t-yellow');  

  });

  // toggles background color of displayed objects //
  //-----------------------------------------------//

  $(".displayed").click(function() {

    $(this).toggleClass('bg-light-gray');

  });

  // toggles background color of stored objects //
  //--------------------------------------------//

  $(".stored").click(function() {

    $(this).toggleClass('bg-dark-blue');

  });

};

// dropdown labels //
//-----------------//

var dDropAlphabet = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var sDropAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var dDropUse = ['practical', 'both', 'beautiful'];

var dDropLocation = ['Baltimore, MD', 'Brooklyn, NY', 'Canton, MI', 'Caseville, MI', 'College Park, MD', 'Commerce Twp, MI', 'Grand Haven, MI', 'Mackinac Island, MI', 'New York, NY', 'Novi, MI', 'Petoskey, MI', 'Philadelphia, PA', 'Rockville, MD', 'San Francisco, CA', 'Sleeping Bear Dunes, MI', 'Sunnyvale, CA', 'Tampa, FL', 'White Marsh, MD'];

var sDropLocation = ['Baltimore, MD', 'Brooklyn, NY', 'Canton, MI', 'Caseville, MI', 'College Park, MD', 'Commerce Twp, MI', 'Detroit, MI', 'Glen Echo, MD', 'Grand Haven, MI', 'Mackinac Island, MI', 'Midland, MI', 'New York, NY', 'Novi, MI', 'Sleeping Bear Dunes, MI', 'Souderton, PA', 'Sunnyvale, CA', 'Tampa, FL', 'White Marsh, MD'];

var dDropHow = ['purchased new', 'purchased used', 'given new', 'given used', 'made', 'found used', 'found new'];

var dDropYear = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'];

var sDropYear = [ '2003', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'];

var dDropCategory = ['accessory', 'art supply', 'artwork', 'bag', 'book', 'clothing', 'container', 'home decor', 'electronic', 'furniture', 'important', 'office supply', 'paper', 'music'];

// dropdown setup //
//----------------//

var dDropdown 

var dSetUpDropdown = function() {

  dDropdown_template = dDropdown_div.innerHTML;
  dDropdown_target.innerHTML = _.template(dDropdown_template,{dDropdown:dDropdown});

};

var sSetUpDropdown = function() {

  sDropdown_template = sDropdown_div.innerHTML;
  sDropdown_target.innerHTML = _.template(sDropdown_template,{dDropdown:dDropdown});

};


// Label setup //
//-------------//

var dDropLabel

var dSetUpLabel = function() {

  dLabel_template = dLabel_div.innerHTML;
  dLabelTarget.innerHTML = _.template(dLabel_template,{dDropLabel:dDropLabel});

};

var sSetUpLabel = function() {

  sLabel_template = sLabel_div.innerHTML;
  sLabelTarget.innerHTML = _.template(sLabel_template,{dDropLabel:dDropLabel});

};

// sorting template for displayed objects //
//----------------------------------------//

var displayed_template
var groupDisplayed
var sortDisplayed
var titleLabel
var titleLabelID

var setUpTemplate = function(sortDisplayed) {

  displayed_template = displayed_div.innerHTML;
  displayed_target.innerHTML += _.template(displayed_template,{displayed:sortDisplayed});

};

// smooth scrolling displayed //
//----------------------------//

var smoothScrollDisplay = function() {
  $('a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('#scroll-displayed').animate({
          scrollTop: $('#scroll-displayed').scrollTop() + target.offset().top - 150
        }, 1000);
        return false;
      }
    }
  });
};

// displayed checkbox sorting toggles //
//------------------------------------//

$(document).ready(function() {

  displayed_target.innerHTML = "";
  
  dDropLabel = ['year'];
  dDropdown = dDropYear;

  sortGroup = _.sortBy(displayed, 'year'); 
  groupDisplayed = _.groupBy(sortGroup, 'year');
  // console.log(groupDisplayed);

  _.each(groupDisplayed, function(displayed, key) {

    var sortDisplayed = _.sortBy(displayed, 'object')
      //console.log(key)

      titleLabel = displayed[0].year;

      setUpTemplate(sortDisplayed);

  });
  
  dSetUpLabel();
  dSetUpDropdown();
  textChanges();
  smoothScrollDisplay();

});


$('#arc').click(function() {

  displayed_target.innerHTML = "";
  
  dDropLabel = ['year'];
  dDropdown = dDropYear;

  sortGroup = _.sortBy(displayed, 'year'); 
  groupDisplayed = _.groupBy(sortGroup, 'year');
  // console.log(groupDisplayed);

  _.each(groupDisplayed, function(displayed, key) {

    var sortDisplayed = _.sortBy(displayed, 'object')
      //console.log(key)

      titleLabel = displayed[0].year;

      setUpTemplate(sortDisplayed);

  });
  
  dSetUpLabel();
  dSetUpDropdown();
  textChanges();
  smoothScrollDisplay();

});


$('#d-year').click(function() {

  displayed_target.innerHTML = "";

  dDropLabel = ['year'];
  dDropdown = dDropYear;

  sortGroup = _.sortBy(displayed, 'year'); 
  groupDisplayed = _.groupBy(sortGroup, 'year');

  _.each(groupDisplayed, function(displayed, key) {

    var sortDisplayed = _.sortBy(displayed, 'object')
      //console.log(key)

      titleLabel = displayed[0].year;

      setUpTemplate(sortDisplayed);

  });
  
  dSetUpLabel();
  dSetUpDropdown();
  textChanges();
  smoothScrollDisplay();
  
});

// if ($('#d-year').attr('checked')) {

$('#d-alphabetical').click(function() {

  displayed_target.innerHTML = "";

  dDropLabel = ['alphabet'];
  dDropdown = dDropAlphabet;

  sortGroup = _.sortBy(displayed, 'letter'); 
  groupDisplayed = _.groupBy(sortGroup, 'letter');

  _.each(groupDisplayed, function(displayed, key) {

    var sortDisplayed = _.sortBy(displayed, 'object')
      //console.log(key)

      titleLabel = displayed[0].letter;

      setUpTemplate(sortDisplayed);

  });
      
  dSetUpLabel();
  dSetUpDropdown();
  textChanges();
  smoothScrollDisplay();

});

$('#d-location').click(function() {

  displayed_target.innerHTML = "";

  dDropLabel = ['location'];
  dDropdown = dDropLocation;
    
  sortGroup = _.sortBy(displayed, 'location'); 
  groupDisplayed = _.groupBy(sortGroup, 'location');

  _.each(groupDisplayed, function(displayed, key) {

    var sortDisplayed = _.sortBy(displayed, 'object')
      //console.log(key)

      titleLabel = displayed[0].location;
      titleLabelID = titleLabel.replace(/\s+/g, '');

      setUpTemplate(sortDisplayed);

  });

  dSetUpLabel();
  dSetUpDropdown();
  textChanges();
  smoothScrollDisplay();

});

$('#d-how').click(function() {

  displayed_target.innerHTML = "";

  dDropLabel = ['how'];
  dDropdown = dDropHow;

  sortGroup = _.sortBy(displayed, 'how'); 
  groupDisplayed = _.groupBy(sortGroup, 'how');

  _.each(groupDisplayed, function(displayed, key) {

    var sortDisplayed = _.sortBy(displayed, 'object')
      //console.log(key)

      titleLabel = displayed[0].how;

      setUpTemplate(sortDisplayed);

  });
   
  dSetUpLabel();
  dSetUpDropdown();
  textChanges();
  smoothScrollDisplay();

});

$('#d-classification').click(function() {

  displayed_target.innerHTML = "";

  dDropLabel = ['classification'];
  dDropdown = dDropUse;
  
  sortGroup = _.sortBy(displayed, 'use'); 
  groupDisplayed = _.groupBy(sortGroup, 'use');

  _.each(groupDisplayed, function(displayed, key) {

    var sortDisplayed = _.sortBy(displayed, 'object')
      //console.log(key)

      titleLabel = displayed[0].use;

      setUpTemplate(sortDisplayed);

  });
  
  dSetUpLabel();
  dSetUpDropdown();
  textChanges();
  smoothScrollDisplay();

});

$('#d-category').click(function() {

  displayed_target.innerHTML = "";

  dDropLabel = ['category'];
  dDropdown = dDropCategory;
    
  sortGroup = _.sortBy(displayed, 'category'); 
  groupDisplayed = _.groupBy(sortGroup, 'category');

  _.each(groupDisplayed, function(displayed, key) {

    var sortDisplayed = _.sortBy(displayed, 'object')
      //console.log(key)

      titleLabel = displayed[0].category;

      setUpTemplate(sortDisplayed);

  });

  dSetUpLabel();
  dSetUpDropdown();
  textChanges();
  smoothScrollDisplay();

});

// sorting template for stored objects //
//-------------------------------------//

var stored_template
var sortStored

var setUpStored = function(sortStored) {

  stored_template = stored_div.innerHTML;
  stored_target.innerHTML += _.template(stored_template,{stored:sortStored});

};

// smooth scrolling stored //
//-------------------------//

var smoothScrollStored = function() {
  $('a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('#scroll-stored').animate({
          scrollTop: $('#scroll-stored').scrollTop() + target.offset().top - 150
        }, 1000);
        return false;
      }
    }
  });
};

// checkbox toggles for stored objects //
//-------------------------------------//

$('#square').click(function() {
  
  stored_target.innerHTML = '';

  dDropLabel = ['year'];
  dDropdown = sDropYear;
  
  sortGroup = _.sortBy(stored, 'year'); 
  groupStored = _.groupBy(sortGroup, 'year');

  _.each(groupStored, function(stored, key) {

    var sortStored = _.sortBy(stored, 'year');
      //console.log(key)

      titleLabel = stored[0].year;

      setUpStored(sortStored);

  });

  sSetUpLabel();
  sSetUpDropdown();
  textChanges();
  smoothScrollStored();

});

$('#s-year').click(function() {

  stored_target.innerHTML = '';

  dDropLabel = ['year'];
  dDropdown = sDropYear;
  
  sortGroup = _.sortBy(stored, 'year'); 
  groupStored = _.groupBy(sortGroup, 'year');

  _.each(groupStored, function(stored, key) {

    var sortStored = _.sortBy(stored, 'year');
      //console.log(key)

      titleLabel = stored[0].year;

      setUpStored(sortStored);

  });

  sSetUpLabel();
  sSetUpDropdown();
  textChanges();
  smoothScrollStored();
  
});

$('#s-alphabetical').click(function() {

  stored_target.innerHTML = '';

  dDropLabel = ['alphabet'];
  dDropdown = sDropAlphabet;
  
  sortGroup = _.sortBy(stored, 'letter'); 
  groupStored = _.groupBy(sortGroup, 'letter');

  _.each(groupStored, function(stored, key) {

    var sortStored = _.sortBy(stored, 'object');

      titleLabel = stored[0].letter;

      setUpStored(sortStored);

  });
   
  sSetUpLabel();
  sSetUpDropdown(); 
  textChanges();
  smoothScrollStored();

});

$('#s-location').click(function() {

  stored_target.innerHTML = '';

  dDropLabel = ['location'];
  dDropdown = sDropLocation;
  
  sortGroup = _.sortBy(stored, 'location'); 
  groupStored = _.groupBy(sortGroup, 'location');

  _.each(groupStored, function(stored, key) {

    var sortStored = _.sortBy(stored, 'location');

      titleLabel = stored[0].location;

      setUpStored(sortStored);

  });
 
  sSetUpLabel();
  sSetUpDropdown();  
  textChanges();
  smoothScrollStored();

});

$('#s-how').click(function() {

  stored_target.innerHTML = '';

  dDropLabel = ['how'];
  dDropdown = dDropHow;
  
  sortGroup = _.sortBy(stored, 'how'); 
  groupStored = _.groupBy(sortGroup, 'how');

  _.each(groupStored, function(stored, key) {

    var sortStored = _.sortBy(stored, 'how');
      //console.log(key)

      titleLabel = stored[0].how;

      setUpStored(sortStored);

  });
  
  sSetUpLabel();
  sSetUpDropdown(); 
  textChanges();
  smoothScrollStored();

});

$('#s-classification').click(function() {

  stored_target.innerHTML = '';

  dDropLabel = ['classification'];
  dDropdown = dDropUse;

  sortGroup = _.sortBy(stored, 'use'); 
  groupStored = _.groupBy(sortGroup, 'use');

  _.each(groupStored, function(stored, key) {

    var sortStored = _.sortBy(stored, 'use');
      //console.log(key)

      titleLabel = stored[0].use;

      setUpStored(sortStored);

  });
  
  sSetUpLabel();
  sSetUpDropdown();
  textChanges();
  smoothScrollStored();

});

$('#s-category').click(function() {

  stored_target.innerHTML = '';

  dDropLabel = ['category'];
  dDropdown = dDropCategory;

  sortGroup = _.sortBy(stored, 'category'); 
  groupStored = _.groupBy(sortGroup, 'category');

  _.each(groupStored, function(stored, key) {

    var sortStored = _.sortBy(stored, 'use');
      //console.log(key)

      titleLabel = stored[0].category;

      setUpStored(sortStored);

  });
  
  sSetUpLabel();
  sSetUpDropdown();
  textChanges();
  smoothScrollStored();

});