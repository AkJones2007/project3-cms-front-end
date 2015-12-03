$(document).ready(function(){

  $("#update-blog-div").hide();

  $("#one-blog").hide(); // where single blog is compiled

  $("#display-blogs-table").hide();  //contains table of all blogs and create blog

// Pages----------------------
  $("#update-page-div").hide();

  $("#one-page").hide(); // where single page is compiled

  $("#display-pages-table").hide();  //contains table of all pages and create blog



});

uxControl = {
  listPages: function(){
    $("#create-page").show();
    logInCheck();
    $("#display-blogs-table").hide();
    $("#showAllPageTableBody").empty();
    $("#display-pages-table").show();
    $("#one-blog").hide();
    $("#one-page").hide();
    $("#update-page-div").hide();
    $("#update-blog-div").hide();
  },

  listBlogs: function(){
    $("#create-blog").show();
    logInCheck();
    $("#display-pages-table").hide();
    $("#showAllBlogTableBody").empty();
    $("#display-blogs-table").show();
    $("#one-blog").hide();
    $("#one-page").hide();
    $("#update-page-div").hide();
    $("#update-blog-div").hide();
  }

}
