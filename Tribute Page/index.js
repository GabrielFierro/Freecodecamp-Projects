function prev_page(){
          
    var first = document.getElementById('first');
    var second = document.getElementById('second');

    if (first.style.display == 'none'){
      first.style.display = 'block';
      second.style.display = 'none';
    }
}

function next_page(){
    
    var first = document.getElementById('first');
    var second = document.getElementById('second');

    if (first.style.display == 'block'){
      first.style.display = 'none';
      second.style.display = 'block';
    }
}