(function() {
	
	var features = [
	  {
		name: 'Appraisal',
		rate: 90,
		star: 1
	  },
	  {
		name: 'Site Review',
		rate: 125,
		star: 1
	  }, 
	  {
		name: 'Deed Transfer',
		rate: 195,
		star: 2
	  },
	  {
		name: 'Purchase Agreement',
		rate: 315,
		star: 2
	  },
	  {
		name: 'Lease Agreement',
		rate: 395,
		star: 3
      }
	];
	
	var rows = [],
		$min = $('#minval'),
		$max = $('#maxval'),
		$table = $('#thefeatures');
		
	function makeRows() {
      features.forEach(function(feature) {
        var $row = $('<tr></tr>');
		$row.append( $('<td></td>').text(feature.name) );
		$row.append( $('<td></td>').text(feature.star) );
		$row.append( $('<td></td>').text(feature.rate) );
		rows.push({
		  feature: feature,
		  $element: $row
		});
	  });
	}
	
	function appendRows() {
	  var $tbody = $('<tbody></tbody>');
	  rows.forEach(function(row) {
		$tbody.append(row.$element);
	  });
	  $table.append($tbody);
	}
	
	function update(min, max) {
      rows.forEach(function(row) {
	    if (row.feature.rate >= min && row.feature.rate <= max) {
		  row.$element.show();
		} else {
		  row.$element.hide();
		}
	  });
	}
	
	function init() {
	  $('#slider').noUiSlider({
        range: [100, 400], start: [100, 200], handles: 2, margin: 20, connect: true, 
		serialization: {to: [$min, $max], resolution: 1}
	  }).change(function() { update($min.val(), $max.val()); });
	  makeRows();
	  appendRows();
	  update($min.val(), $max.val());
	}
	
	$(init);
}());
	