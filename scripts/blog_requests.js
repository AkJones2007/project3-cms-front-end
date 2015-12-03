var blogRequest = {

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
      url: this.url + "/blogs",
      dataType: "json"
    }, callback)
  },

  getOne : function(id, callback){
    this.ajax({
      method: "GET",
      url: this.url + "/blogs/" + id,
      dataType: "json"
    }, callback);
  },

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
    }, callback);
  },

  delete : function(id, callback){
    this.ajax({
      method : "DELETE",
      url: this.url + "/blogs/" + id,
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



  $("#list-blogs").on("click", function(event){
    event.preventDefault();
    blogRequest.getAll(function(error, data){
    $("#showAllBlogTableBody").empty();
    $("#one-blog").hide();
    var template = Handlebars.compile($("#showAllBlogHandlebar").html());
      $('#result').val(JSON.stringify(data, null, 4)); //logs to test box
      var newHTML = template({blogs: data.blogs});
      $("#showAllBlogTableBody").html(newHTML);

    });
  });



  $("#showAllBlogTableBody").on("click", function(event){
    event.preventDefault();
    var id = $(event.target).data("id");
    if(id === undefined){
      return;
    }
    blogRequest.getOne(id, function(error, data){
      $("#one-blog").empty();
      $("#entire-body").hide();
      $("#one-blog").show();
      var template = Handlebars.compile($("#show-one").html());
      $('#result').val(JSON.stringify(data, null, 4)); //logs to test box
      console.log(data.blogs);
      var newHTML = template(data.blogs);
      $("#one-blog").html(newHTML);
    });
  });



  $("#create-blog").on("submit", function(event){
    event.preventDefault();
    var credentials = formDataToObject(this);
    blogRequest.create(credentials);
  });

  // CLick on Edit Button
  $("#one-blog").on("click", '#edit-blog', function(event){
    event.preventDefault();
    $("#update-blog-div").show();
  });


  $("#update-blog").on("submit", function(event){
    event.preventDefault();
    var credentials = formDataToObject(this);
    var id = $("#edit-blog").data("id");
    blogRequest.update(id, credentials, function(error, data){
      $("#one-blog").empty();
      $("#entire-body").show();
    });
  });

  $("#one-blog").on("click", '#delete-blog', function(event){
    event.preventDefault();
    console.log($(this).data("id"));
    var id = $(this).data("id");
    blogRequest.delete(id, function(){

      $("#one-blog").empty();
      $("entire-body").show();
    });
  });

}); //end of document.ready
