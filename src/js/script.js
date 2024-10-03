$(document).ready(function() {  
  $('#btnCities1').on('click', function() {  
      $('#cities').attr('src', '/images/cities.svg');
  });  

  $('#btnCities2').on('click', function() {  
      $('#cities').attr('src', '/images/cities2.svg');
  });

  $('#btnCities3').on('click', function() {  
    $('#cities').attr('src', '/images/cities3.svg'); 
  });

  $('#btnCities4').on('click', function() {  
    $('#cities').attr('src', '/images/cities4.svg');
  }); 

  $('#btnCities5').on('click', function() {  
    $('#cities').attr('src', '/images/cities5.svg');
  }); 

  $('#btnCities6').on('click', function() {  
    $('#cities').attr('src', '/images/cities6.svg');
  }); 

  $('#btnCities7').on('click', function() {  
    $('#cities').attr('src', '/images/cities7.svg');
  }); 

  $('#btnCities8').on('click', function() {  
    $('#cities').attr('src', '/images/cities8.svg');
  });  

  $('#btnCities9').on('click', function() {  
    $('#cities').attr('src', '/images/cities9.svg');
  });
  
  $('#openBlock').on('click', function() {
    const $image = $('#switchVector');
    const currentSrc = $image.attr('src');
  
    if (currentSrc === '/images/map__vector.svg') {
      $image.attr('src', '/images/map__vector2.svg');
    } else {
      $image.attr('src', '/images/map__vector.svg');
    }
  });

  $('.business__card').on('click', function() {
    $(this).toggleClass('h-100');
    $(this).find('img').toggleClass('img-dark');
    $(this).find('.highlight').toggleClass('d-none');
}); 
});

function toggleVisibility() {  
  var block = document.getElementById('myBlock');
  if (block.classList.contains('d-none')) {  
      block.classList.remove('d-none');  
      block.classList.add('d-block');  
  } else {  
      block.classList.remove('d-block');  
      block.classList.add('d-none');
  }
}

function toggleVisibilityMoscow() {  
  var block = document.getElementById('moscow');
  if (block.classList.contains('d-none')) {  
      block.classList.remove('d-none');  
      block.classList.add('d-block');  
  } else {  
      block.classList.remove('d-block');  
      block.classList.add('d-none');
  }
}

function toggleVisibilityCenter() {  
  var block = document.getElementById('center');
  if (block.classList.contains('d-none')) {  
      block.classList.remove('d-none');  
      block.classList.add('d-block');  
  } else {  
      block.classList.remove('d-block');  
      block.classList.add('d-none');
  }
}

function toggleVisibilityNorthWest() {  
  var block = document.getElementById('north-west');
  if (block.classList.contains('d-none')) {  
      block.classList.remove('d-none');  
      block.classList.add('d-block');  
  } else {  
      block.classList.remove('d-block');  
      block.classList.add('d-none');
  }
}

function toggleVisibilitySouth() {  
  var block = document.getElementById('south');
  if (block.classList.contains('d-none')) {  
      block.classList.remove('d-none');  
      block.classList.add('d-block');  
  } else {  
      block.classList.remove('d-block');  
      block.classList.add('d-none');
  }
}

function toggleVisibilityVolga() {  
  var block = document.getElementById('volga');
  if (block.classList.contains('d-none')) {  
      block.classList.remove('d-none');  
      block.classList.add('d-block');  
  } else {  
      block.classList.remove('d-block');  
      block.classList.add('d-none');
  }
}

function toggleVisibilityUral() {  
  var block = document.getElementById('ural');
  if (block.classList.contains('d-none')) {  
      block.classList.remove('d-none');  
      block.classList.add('d-block');  
  } else {  
      block.classList.remove('d-block');  
      block.classList.add('d-none');
  }
}

function toggleVisibilitySibir() {  
  var block = document.getElementById('sibir');
  if (block.classList.contains('d-none')) {  
      block.classList.remove('d-none');  
      block.classList.add('d-block');  
  } else {  
      block.classList.remove('d-block');  
      block.classList.add('d-none');
  }
}

function toggleVisibilityEast() {  
  var block = document.getElementById('east');
  if (block.classList.contains('d-none')) {  
      block.classList.remove('d-none');  
      block.classList.add('d-block');  
  } else {  
      block.classList.remove('d-block');  
      block.classList.add('d-none');
  }
}