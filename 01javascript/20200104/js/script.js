var id,password;
id = prompt();
// if( id == "admin"){
// 	document.write("관리자입니다.");
// }

if ( id == "admin") {
	location.href = "login.html"
}else {
	location.href = "error.html"
}