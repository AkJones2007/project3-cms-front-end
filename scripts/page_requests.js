var pageRequest = {

  url : "http://localhost:3000",

  ajax : function(options, cb) {
    $.ajax(options).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  }, // end of ajaxRequest

  getAll : function(callback){
    this.ajax({
      method : "GET",
      url: this.url + "/pages",
      dataType: "json"
    }, callback);
  },

  getOne : function(id, callback){
    this.ajax({
      method: "GET",
      url: this.url + "/pages/" + id,
      dataType: "json"
    }, callback);
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
    }, callback);
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
    }, callback);
  },

  delete : function(id, callback){
    this.ajax({
      method : "DELETE",
      url: this.url + "/pages/" + id,
      xhrFields: {
       withCredentials: true
      },
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    }, callback);
  }
};

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
    pageRequest.getAll(function(error, data){
    $("#display-blogs-table").hide();
    $("#showAllPageTableBody").empty();
    $("#display-pages-table").show();
    $("#one-page").hide();
    var template = Handlebars.compile($("#showAllPageHandlebar").html());
      $('#result').val(JSON.stringify(data, null, 4)); //logs to test box
      var newHTML = template({pages: data.pages});
      $("#showAllPageTableBody").html(newHTML);

    });
  });

  $("#showAllPageTableBody").on("click", function(event){
    event.preventDefault();
    var id = $(event.target).data("id");
    if(id === undefined){
      return;
    }
    pageRequest.getOne(id, function(error, data){
      $("#one-page").empty();
      $("#display-pages-table").hide();
      $("#one-page").show();
      var template = Handlebars.compile($("#show-one-page").html());
      $('#result').val(JSON.stringify(data, null, 4)); //logs to test box
      var newHTML = template(data.pages);
      $("#one-page").html(newHTML);
    });
  });

  $("#create-page").on("submit", function(event){
    event.preventDefault();
    var credentials = formDataToObject(this);
    pageRequest.create(credentials, function(error, data){
    pageRequest.getAll(function(error, data){
      $("#showAllPageTableBody").empty();
      $("#display-pages-table").show();
      $("#one-page").hide();
      var template = Handlebars.compile($("#showAllPageHandlebar").html());
      $('#result').val(JSON.stringify(data, null, 4)); //logs to test box
      var newHTML = template({pages: data.pages});
      $("#showAllPageTableBody").html(newHTML);
      });
    });
  });

  // CLick on Edit Button in single page post
  $("#one-page").on("click", '#edit-page', function(event){
    event.preventDefault();
    $("#update-page-div").show();
  });


  $("#update-page").on("submit", function(event){
    event.preventDefault();
    var credentials = formDataToObject(this);
    var id = $("#edit-page").data("id");
    pageRequest.update(id, credentials, function(error, data){
      $("#one-page").empty();
      $("#update-page-div").hide();
      $("#entire-body").show();
      pageRequest.getAll(function(error, data){
        $("#showAllPageTableBody").empty();
        $("#display-pages-table").show();
        $("#one-page").hide();
        var template = Handlebars.compile($("#showAllPageHandlebar").html());
        $('#result').val(JSON.stringify(data, null, 4)); //logs to test box
        var newHTML = template({pages: data.pages});
        $("#showAllPageTableBody").html(newHTML);
      });
    });
  });

  // click on the delete button in single page
  $("#one-page").on("click", '#delete-page', function(event){
    event.preventDefault();
    console.log($(this).data("id"));
    var id = $(this).data("id");
    pageRequest.delete(id, function(){
      $("#one-page").empty();
      $("#entire-body").show();
      pageRequest.getAll(function(error, data){
    $("#showAllPageTableBody").empty();
    $("#display-pages-table").show();
    $("#one-page").hide();
    var template = Handlebars.compile($("#showAllPageHandlebar").html());
      $('#result').val(JSON.stringify(data, null, 4)); //logs to test box
      var newHTML = template({pages: data.pages});
      $("#showAllPageTableBody").html(newHTML);
      });
    });
  });


}); //end of document.ready
