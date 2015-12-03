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
    }, ajaxCB);
  },

  logout : function(callback) {
    this.ajaxRequest({
       method: "DELETE",
       url: this.url + "/logout",
       contentType: "application/json; charset=utf-8",
      data: JSON.stringify(),
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

  $("#register").on("submit", function(event){
    event.preventDefault();
    var credentials = formDataToObject(this);
    authRequest.register(credentials);
  });

  $("#login").on("submit", function(event){
    event.preventDefault();
    var credentials = formDataToObject(this);
    authRequest.login(credentials);
  });



})// end of doc ready
