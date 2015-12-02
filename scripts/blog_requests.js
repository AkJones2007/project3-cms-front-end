var blogRequest = {

  url : "http://localhost:3000",

  ajax : function(options, cb) {
    $.ajax(options).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  }, // end of ajaxRequest

  getAll : function(){
    this.ajax({
      method : "GET",
      url: this.url + "/blogs",
      dataType: "json"
    }, ajaxCB);
  },

  // getOne : function(){}

  create : function(credentials, callback){
    this.ajax({
      method : "POST",
      url: this.url + "/blogs",
      xhrFields: {
       withCredentials: true
      },
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(credentials),
      dataType: "json"
    }, ajaxCB);
  },

  update : function(id, credentials, callback){
    this.ajax({
      method : "PATCH",
      url: this.url + "/blogs/" + id,
      xhrFields: {
       withCredentials: true
      },
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(credentials),
      dataType: "json"
    }, ajaxCB);
  }
}

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

  $("#list-blogs").on("click", function(event){
    event.preventDefault();
    blogRequest.getAll();
  });

  $("#create-blog").on("submit", function(event){
    event.preventDefault();
    var credentials = formDataToObject(this);
    blogRequest.create(credentials);
  });

  $("#update-blog").on("submit", function(event){
    event.preventDefault();
    var credentials = formDataToObject(this);
    var id = $("#blog-id").val();
    blogRequest.update(id, credentials)
  })






}) //end of document.ready
