//append file appel en cours
function save() {
  let name = document.getElementById("number").innerText;
  var date = new Date();
  var time = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  let path = __dirname + "number.txt"
  fs.appendFile(path, "\n" + name + " " + time, (err) => {
    const result = err ? err : "new number saved !!";


  })
};

//read in historique
function read() {
  let path = __dirname + "number.txt"
  fs.readFile(path, "utf-8", (erreur, data) => {
    var dataArray = [];
    var tab = document.getElementById('tab');
    tab.innerHTML = " ";
    dataArray.push(data);
    var html = ``
    for (var i = 0; i < dataArray.toString().split("\n").length; i++) {
      html = ` <div class="content-container" id="container">
        <span class="phone" id="spanphone">${dataArray.toString().split("\n")[i]}</span>
        </div>`
      tab.innerHTML = tab.innerHTML + html;
    }
  }
  )
};

//append file cantact
function saveCantact() {
  let number = document.getElementById("number").innerHTML;
  let name = document.getElementById("name-cantact").value;
  let path = __dirname + "cantact.txt"
  fs.appendFile(path, "\n" + number + " " + name, (err) => {
    const result = err ? err : "new name saved !!";
  })
};

// read cantact
function readCantact() {

  let path = __dirname + "cantact.txt"
  fs.readFile(path, "utf-8", (erreur, data) => {
    var dataArray = [];
    var tab1 = document.getElementById('tab1');
    tab1.innerHTML = " ";
    dataArray.push(data);
    var html = ``
    for (var i = 0; i < dataArray.toString().split("\n").length; i++) {
      html = ` <div class="content-container" id="container">
        <button class="open-button"><i class="icon peoples"
        style="margin-left: 4%;"></i></button>
          <span class="phone" id="spanphone">${dataArray.toString().split("\n")[i]}</span>
          </div>`
      tab1.innerHTML = tab1.innerHTML + html;
    }
  }
  )
};


$(document).ready(function () {

  /*	Current Tab 	*/
  $('.phone-tabs li a').click(function () {
    $('.phone-tabs li').removeClass('current');
    $(this).parent().addClass('current');
  });

  /*	Simple Tab 	*/
  var tabContents = $('.phone-tab-contents');
  $('.phone-tabs .getphone').click(function () {
    tabContents.removeClass('getpeoples');
    tabContents.removeClass('getclock');
  });

  $('.phone-tabs .getclock').click(function () {
    tabContents.removeClass('getpeoples');
    tabContents.addClass('getclock');

  });

  $('.phone-tabs .getpeoples').click(function () {
    tabContents.removeClass('getclock');
    tabContents.addClass('getpeoples');
  });

  /*	Delete */
  $('.delete-btn').click(function () {
    var numbers = $('.number-area .numbers').text();
    var numbers2 = $('.number-area .numbers').text().length;
    $('.number-area .numbers').text(numbers.substr(0, numbers2 - 1));
  });

  /*	Pusher	*/
  var pusher = {
    number: function (num) {
      $('.numbers-container .pushed' + num + '').click(function () {
        $('.number-area .numbers').append('' + num + '');
      });
    }
  }

  pusher.number(1);
  pusher.number(2);
  pusher.number(3);
  pusher.number(4);
  pusher.number(5);
  pusher.number(6);
  pusher.number(7);
  pusher.number(8);
  pusher.number(9);
  pusher.number(0);

  $('.numbers-container .pushedasterisk').click(function () {
    $('.number-area .numbers').append('*');
  });

  $('.numbers-container .pushednumber').click(function () {
    $('.number-area .numbers').append('#');
  });



});


//pop up de appel

function popupOpenClose(popup) {

  /* Add div inside popup for layout if one doesn't exist */
  if ($(".wrapper").length == 0) {
    $(popup).wrapInner("<div class='wrapper'></div>");
  }

  /* Open popup */
  $(popup).show();

  /* Close popup if user clicks on background */
  $(popup).click(function (e) {
    if (e.target == this) {
      if ($(popup).is(':visible')) {
        $(popup).hide();
      }
    }
  });

  /* Close popup and remove errors if user clicks on cancel or close buttons */
  $(popup).find("button[name=fermer]").on("click", function () {
    if ($(".formElementError").is(':visible')) {
      $(".formElementError").remove();
    }
    $(popup).hide();
  });
}

$(document).ready(function () {
  $("[data-js=open]").on("click", function () {
    popupOpenClose($(".popup"));
  });
});



// pop up de cantact
function popupOpenClose(popup1) {

  /* Add div inside popup for layout if one doesn't exist */
  if ($(".wrapper").length == 0) {
    $(popup1).wrapInner("<div class='wrapper'></div>");
  }

  /* Open popup */
  $(popup1).show();

  /* Close popup if user clicks on background */
  $(popup1).click(function (e) {
    if (e.target == this) {
      if ($(popup1).is(':visible')) {
        $(popup1).hide();
      }
    }
  });

  /* Close popup and remove errors if user clicks on cancel or close buttons */
  $(popup1).find("button[name=fermer]").on("click", function () {
    if ($(".formElementError").is(':visible')) {
      $(".formElementError").remove();
    }
    $(popup1).hide();
  });
}

$(document).ready(function () {
  $("[data-js=openn]").on("click", function () {
    popupOpenClose($(".popup1"));
  });
});




