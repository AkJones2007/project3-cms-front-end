var pageRequest = {

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
      url: this.url + "/pages",
      dataType: "json"
    }, ajaxCB);
  },

  getOne : function(id){
    this.ajax({
      method: "GET",
      url: this.url + "/pages/" + id,
      dataType: "json"
    }, ajaxCB);
  },

  create : function(credentials, callback){
    this.ajax({
      method : "POST",
      url: this.url + "/pages",
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
      url: this.url + "/pages/" + id,
      xhrFields: {
       withCredentials: true
      },
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(credentials),
      dataType: "json"
    }, ajaxCB);
  },

  delete : function(id, credentials, callback){
    this.ajax({
      method : "DELETE",
      url: this.url + "/pages/" + id,
      xhrFields: {
       withCredentials: true
      },
      contentType: "application/json; charset=utf-8",
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

  $("#list-pages").on("click", function(event){
    event.preventDefault();
    pageRequest.getAll();
  });

  $("#show-one-page").on("submit", function(event){
    event.preventDefault();
    var id = $("#one-page-view").val();
    pageRequest.getOne(id);
  });

  $("#create-page").on("submit", function(event){
    event.preventDefault();
    var credentials = formDataToObject(this);
    pageRequest.create(credentials);
  });

  $("#update-page").on("submit", function(event){
    event.preventDefault();
    var credentials = formDataToObject(this);
    var id = $("#page-id").val();
    pageRequest.update(id, credentials)
  })

  $("#delete-page").on("click", function(event){
    event.preventDefault();
    var id = $("#page-id").val();
    pageRequest.delete(id);
  })






}) //end of document.ready
