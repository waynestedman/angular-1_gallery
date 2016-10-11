(function() {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open('GET', 'data.json');
    request.onreadystatechange = function() {
        if ((request.readyState===4) && (request.status===200)) {
          var items = JSON.parse(request.responseText);
          var output = '<div id="boxContainer">';
          var sorted = [];

          for (var key in items) {
            var sortedItems = items[key].title.toLowerCase();
        // alphabetize titles
            sorted.push(sortedItems);
            sorted.sort([items[key].title]);
            sortedItems = sorted.toString();
            console.log(sortedItems); // this is only the titles!!

        // display the block of items - seperate function?
            if (items[key].is_published != false) {                  
              output += '<div class="box">';
              output += '<img src="images/'+ items[key].image_name +'">';
              output += '<div class="box--text">';
              output += '<h4>' + items[key].title + '</h4>';
              output += '<h5>' + items[key].image_name + '</h5>';
              output += '<p>' + items[key].description + '</p>';
              output += '</div>';
              output += '<i class="material-icons">favorite</i>' + '<i class="material-icons">grade</i>'
              output += '</div>';
            } // end checking is_published = true
          } // end the for loop
        output += '</div>';

// onClick the AZ button -> reverse() sorting

        document.getElementById('imageContent').innerHTML = output;
      } // readyState and status check
    } // onreadystatechange
    request.send();
}()); // self executing function