/* function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("sort");
    filter = input.value.toUpperCase();
    ul = document.getElementById("articleList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
} */
console.log(document.body);

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("sort");
    filter = input.value.toUpperCase();
    ul = document.getElementById("articleList");
    li = ul.querySelectorAll("li");
	list = document.getElementById('list');
	//console.log(li);
    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
		//	list.a.style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}