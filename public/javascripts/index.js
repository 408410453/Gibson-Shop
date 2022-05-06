var search = document.querySelector(".nav_listsearch");
var searchIcon = document.querySelector(".nav_listsearch_icon");
var searchInput = document.querySelector(".nav_listsearch_input");
var searchClose = document.querySelector(".nav_listsearch_close");
var searchDelete = document.querySelector(".nav_listsearch_delete");

searchIcon.addEventListener("click", ()=> {
  search.classList.add("nav_listsearch_open");
  searchInput.focus();
});

searchClose.addEventListener("click",  ()=>{
  search.classList.remove("nav_listsearch_open");
  //clear search field on close
  searchInput.value = "";
});

searchDelete.addEventListener("click", ()=>{
  searchInput.value = "";
  searchInput.focus();
});

//console.log
const input = document.querySelector(".nav_listsearch_input");
input.addEventListener("keydown", function(e){
  if (e.code ==='Enter') {
    document.getElementById("myBtn").click();
    e.preventDefault();
  }
},false);
  
  function getnumber(){
    const valelement = document.getElementsByName("search_input");
    const val = valelement[0].value;
    //alert("輸入成功");
    console.log(val);
  };


//number
var select = document.getElementById('number_select');
var input_visible = document.getElementById('number_input');
var numberUpdate = document.getElementById("number_update");

document.getElementById('number_select').onchange = function ()
 {
  if(select.value==='10'){
    select.classList.add("content_list_body_number_delete") ;
    input_visible.style.setProperty('display', 'initial');
  }
}

numberUpdate.addEventListener("click",function(){
  input_visible.style ="display:none"
  select.classList.remove("content_list_body_number_delete") ;
  select[0].selected=true;
})