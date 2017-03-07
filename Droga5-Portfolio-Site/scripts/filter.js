
var $itemsHolder = $('#projects') // grab the unordered list with a class of projects
    $itemsClone = $itemsHolder.clone()
    $filterClass = "";

$('ul.filter li').click(function(e){// filter click event
  e.preventDefault();
  $filterClass = $(this).attr('data-value');

  if($filterClass == 'all'){// filter out all items
    var $filters = $itemsClone.find('li'); //
  }else{// filter out selected items
    var $filters = $itemsClone.find('li[data-type=' + $filterClass + ']');
  }// end conditional

  $itemsHolder.quicksand($filters, {duration: 500});
  });
