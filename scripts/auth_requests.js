var authRequest = {

  url : "http://localhost:3000",

  ajaxRequest : function(options, cb) {
    $.ajax(options).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  }, // end of ajaxRequest

  register : function(credentials, callback){
    this.ajaxRequest({
      method: "POST",
      url: this.url + "/signup",
      xhrFields: {
       withCredentials: true
      },
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(credentials),
    }, ajaxCB);
  }, //end of register

  login : function(credentials, callback) {
    this.ajaxRequest({
      method: "POST",
      url: this.url + "/login",
      xhrFields: {
       withCredentials: true
      },
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(credentials),
    }, callback);
  },

  logout : function(callback) {
    this.ajaxRequest({
       method: "DELETE",
       url: this.url + "/logout",
       xhrFields: {
       withCredentials: true
      },
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(),
    }, callback);
  },

  // Find out who's logged in
  currentUser: function(callback) {
    this.ajaxRequest({
      method: 'GET',
      url: this.url + '/',
      xhrFields: {
       withCredentials: true
      },
      dataType: 'json'
    }, callback);
  }

};// end of authRequest

var ajaxCB = function (error, data) {
    if (error) {
      console.error(error);
      $('#result').val('status: ' + error.status + ', error: ' +error.error);
      return;
    }
    $('#result').val(JSON.stringify(data, null, 4));
  };

  var formDataToObject = function(form) {
  var formDataObject = {};
  $(form).find(".input").each(function(index, element) {
  var type = $(this).attr("type");
  if ($(this).attr("name") && type !== "submit" && type !== "hidden") {
      formDataObject[$(this).attr("name")] = $(this).val();
    }
  });
    return formDataObject;
  };

$(document).ready(function(){

  authRequest.currentUser(function(error, data) {
    if(error || data.title === 'Nobody') {
      console.error(error);
    } else {
      $('#welcome-message').html('Welcome ' + data.title.userName + '!');
      }
    });


  $("#register").on("submit", function(event){
    event.preventDefault();
    var credentials = formDataToObject(this);
    authRequest.register(credentials);
  });

  $("#login").on("submit", function(event){
    event.preventDefault();
    var credentials = formDataToObject(this);
    authRequest.login(credentials, function(error, data) {
      if(error) {
        console.error(error);
      } else {
        authRequest.currentUser(function(error, data) {
          if(error || data.title === 'Nobody') {
            console.error(error);
          } else {
            $('#welcome-message').html('Welcome ' + data.title.userName + '!');
          }
        });
      }
    });
  });

  $('#logout').on('click', function(event) {
    event.preventDefault();
    authRequest.logout(function(error, data){
      if(error){
        console.error(error);
      }
      $('#welcome-message').html("");
    });
  });



})// end of doc ready
