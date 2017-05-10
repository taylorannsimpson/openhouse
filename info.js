var orange = "#EA5449";

// 
// displayed // data from sheetlabs //
//----------------------------------//

var displayed = (function () {
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

var stored = (function () {
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


// building displayed array //
//--------------------------//

var checkedValues = [];
var filteredArrays = [];

var filterArrays = function() {

    _.map(checkedValues, function(val) {
        var filteredArray =  _.filter(displayed, function(item){           
            return item[val.key] === val.value;
        });
        filteredArrays.push(filteredArray);    
    });
};

var removeDisplayedFilterArrays = function(checkedValues) {
    filteredArrays = _.map(checkedValues, function(val) {
        return  _.filter(displayed, function(item){
            return item[val.key] === val.value;
        });
    
    });
};

var removeCheckedValue = function(checkedValues,obj) {

  return _.filter(checkedValues, function(kv) {

    return !_.isEqual(kv, obj);

  });

};

var updateCount = function() {

    filterArrays();

    var flattenedArray = _.flatten(filteredArrays);
    var flattenedLength = _.uniq(flattenedArray).length;
    var radius = Math.sqrt(flattenedLength / Math.PI);
    var numberItems = radius * 20;

    circle_target.innerHTML = "";

    infographic_template = infographic_div.innerHTML;
    circle_target.innerHTML = _.template(infographic_template,{flattenedLength:flattenedLength, numberItems:numberItems});

};

// building stored objects array //
//-------------------------------//

var storedCheckedValues = [];
var storedFilteredArrays = [];

var storedFilterArrays = function() {

    _.map(storedCheckedValues, function(val) {

        var filteredArray =  _.filter(stored, function(item){
            
            return item[val.key] === val.value;
        });

        storedFilteredArrays.push(filteredArray);
    
    });
};

var removeStoredFilterArrays = function(storedCheckedValues) {
    storedFilteredArrays = _.map(storedCheckedValues, function(val) {
        return  _.filter(stored, function(item){
            return item[val.key] === val.value;
        });
    
    });
};

var storedRemoveCheckedValue = function(storedCheckedValues,obj) {

  return _.filter(storedCheckedValues, function(kv) {

    return !_.isEqual(kv, obj);

  });

};

var storedUpdateCount = function() {

    storedFilterArrays();

    var flattenedArray = _.flatten(storedFilteredArrays);
    var flattenedLength = _.uniq(flattenedArray).length;
    var radius = Math.sqrt(flattenedLength / Math.PI);
    var numberItems = radius * 20;

    storedcircle_target.innerHTML = "";

    storedinfographic_template = storedinfographic_div.innerHTML;
    storedcircle_target.innerHTML = _.template(storedinfographic_template,{flattenedLength:flattenedLength, numberItems:numberItems});

};

// classification textboxes //
//--------------------------//

$('#ibeautiful').click(function() {
    
    var obj = {key: "use", value: "beautiful"}

    if ($('#ibeautiful').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#ibeautiful').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#iboth').click(function() {

    var obj = {key: "use", value: "both"};

    if ($('#iboth').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#iboth').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#ipractical').click(function() {

    var obj = {key: "use", value: "practical"};

    if ($('#ipractical').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#ipractical').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

// year checkboxes //
//-----------------//

$('#i03').click(function() {

    var obj = {key: "year", value: 2003};

    if ($('#i03').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#i03').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#i05').click(function() {

    var obj = {key: "year", value: 2005};

    if ($('#i05').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#i05').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#i06').click(function() {

    var obj = {key: "year", value: 2006};

    if ($('#i06').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#i06').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#i07').click(function() {

    var obj = {key: "year", value: 2007};

    if ($('#i07').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#i07').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#i08').click(function() {

    var obj = {key: "year", value: 2008};

    if ($('#i08').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#i08').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#i09').click(function() {

    var obj = {key: "year", value: 2009};

    if ($('#i09').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#i09').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});


$('#i10').click(function() {

    var obj = {key: "year", value: 2010};

    if ($('#i10').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#i10').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});


$('#i11').click(function() {

    var obj = {key: "year", value: 2011};

    if ($('#i11').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#i11').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});


$('#i12').click(function() {

    var obj = {key: "year", value: 2012};

    if ($('#i12').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#i12').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#i13').click(function() {

    var obj = {key: "year", value: 2013};

    if ($('#i13').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#i13').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});


$('#i14').click(function() {


    var obj = {key: "year", value: 2014};

    if ($('#i14').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#i14').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#i15').click(function() {

    var obj = {key: "year", value: 2015};

    if ($('#i15').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#i15').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#i16').click(function() {

    var obj = {key: "year", value: 2016};

    if ($('#i16').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#i16').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#i17').click(function() {

    var obj = {key: "year", value: 2017};

    if ($('#i17').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#i17').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

// how checkboxes //
//----------------//

$('#ifnew').click(function() {

    var obj = {key: "how", value: "found new"};

    if ($('#ifnew').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#ifnew').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#ifused').click(function() {

    var obj = {key: "how", value: "found used"};

    if ($('#ifused').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#ifused').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#ignew').click(function() {

    var obj = {key: "how", value: "given new"};

    if ($('#ignew').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#ignew').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#igused').click(function() {

    var obj = {key: "how", value: "given used"};

    if ($('#igused').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#igused').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#imade').click(function() {
    
    var obj = {key: "how", value: "made"};

    if ($('#imade').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#imade').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#ipnew').click(function() {

    var obj = {key: "how", value: "purchased new"};

    if ($('#ipnew').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#ipnew').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#ipused').click(function() {
   
    var obj = {key: "how", value: "purchased used"};

    if ($('#ipused').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#ipused').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

// location checkboxes //
//---------------------//

$('#Baltimore').click(function() {

    var obj = {key: "location", value: "Baltimore, MD"};

    if ($('#Baltimore').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#Baltimore').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#Brooklyn').click(function() {

    var obj = {key: "location", value: "Brooklyn, NY"};

    if ($('#Brooklyn').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#Brooklyn').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#Canton').click(function() {

    var obj = {key: "location", value: "Canton, MI"};

    if ($('#Canton').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#Canton').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#Caseville').click(function() {

    var obj = {key: "location", value: "Caseville, MI"};

    if ($('#Caseville').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#Caseville').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#College').click(function() {

    var obj = {key: "location", value: "College Park, MD"};

    if ($('#College').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#College').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#Commerce').click(function() {

    var obj = {key: "location", value: "Commerce Twp, MI"};

    if ($('#Commerce').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#Commerce').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#Detroit').click(function() {

    var obj = {key: "location", value: "Detroit, MI"};

    if ($('#Detroit').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#Detroit').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#Grand').click(function() {

    var obj = {key: "location", value: "Grand Haven, MI"};

    if ($('#Grand').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#Grand').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#Glen').click(function() {

    var obj = {key: "location", value: "Glen Echo, MD"};

    if ($('#Glen').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#Glen').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#Mackinac').click(function() {

    var obj = {key: "location", value: "Mackinac Island, MI"};

    if ($('#Mackinac').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#Mackinac').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#Midland').click(function() {

    var obj = {key: "location", value: "Midland, MI"};

    if ($('#Midland').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#Midland').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#New').click(function() {

    var obj = {key: "location", value: "New York, NY"};

    if ($('#New').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#New').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#Novi').click(function() {

    var obj = {key: "location", value: "Novi, MI"};

    if ($('#Novi').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#Novi').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#Petoskey').click(function() {

    var obj = {key: "location", value: "Petoskey, MI"};

    if ($('#Petoskey').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#Petoskey').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#Rockville').click(function() {

    var obj = {key: "location", value: "Rockville, MD"};

    if ($('#Rockville').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#Rockville').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#Philly').click(function() {

    var obj = {key: "location", value: "Philadelphia, PA"};

    if ($('#Philly').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#Philly').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#SF').click(function() {

    var obj = {key: "location", value: "San Francisco, MD"};

    if ($('#SF').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#SF').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#Sleeping').click(function() {

    var obj = {key: "location", value: "Sleeping Bear Dunes, MI"};

    if ($('#Sleeping').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#Sleeping').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#Souderton').click(function() {

    var obj = {key: "location", value: "Souderton, PA"};

    if ($('#Souderton').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#Souderton').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#Sunnyvale').click(function() {

    var obj = {key: "location", value: "Sunnyvale, CA"};

    if ($('#Sunnyvale').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#Sunnyvale').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#Tampa').click(function() {

    var obj = {key: "location", value: "Tampa, FL"};

    if ($('#Tampa').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#Tampa').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#White').click(function() {

    var obj = {key: "location", value: "White Marsh, MD"};

    if ($('#White').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#White').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

// category checkboxes //
//---------------------//

$('#accessory').click(function() {

    var obj = {key: "category", value: "accessory"};

    if ($('#accessory').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#accessory').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#artsupply').click(function() {

    var obj = {key: "category", value: "art supply"};

    if ($('#artsupply').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#artsupply').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#artwork').click(function() {

    var obj = {key: "category", value: "artwork"};

    if ($('#artwork').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#artwork').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#bag').click(function() {

    var obj = {key: "category", value: "bag"};

    if ($('#bag').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#bag').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#book').click(function() {

    var obj = {key: "category", value: "book"};

    if ($('#book').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#book').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#clothing').click(function() {

    var obj = {key: "category", value: "clothing"};

    if ($('#clothing').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#clothing').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#container').click(function() {

    var obj = {key: "category", value: "container"};

    if ($('#container').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#container').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#home').click(function() {

    var obj = {key: "category", value: "home decor"};

    if ($('#home').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#home').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#electronic').click(function() {

    var obj = {key: "category", value: "electronic"};

    if ($('#electronic').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#electronic').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#furniture').click(function() {

    var obj = {key: "category", value: "furniture"};

    if ($('#furniture').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#furniture').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#important').click(function() {

    var obj = {key: "category", value: "important"};

    if ($('#important').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#important').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#office').click(function() {

    var obj = {key: "category", value: "office supply"};

    if ($('#office').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#office').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#paper').click(function() {

    var obj = {key: "category", value: "paper"};

    if ($('#paper').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#paper').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});

$('#music').click(function() {

    var obj = {key: "category", value: "music"};

    if ($('#music').is(':checked')) {
        checkedValues.push(obj);
        filterArrays();
    } else {
        checkedValues = removeCheckedValue(checkedValues,obj);
        removeDisplayedFilterArrays();
    }

    if ($('#music').is(':checked')) {
        storedCheckedValues.push(obj);
        storedFilterArrays();
    } else {
        storedCheckedValues = removeCheckedValue(storedCheckedValues,obj);
        removeStoredFilterArrays();
    }

    updateCount();
    storedUpdateCount();

});