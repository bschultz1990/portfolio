// ============ HEADER ===============
let header = document.getElementById("header")

window.addEventListener("DOMContentLoaded", function (){
	// let sitelogo = document.createElement("img");
	// sitelogo.id = "sitelogo";
	// sitelogo.src = "media/apple.svg";
	// sitelogo.alt = "Site Logo"
	// header.appendChild(sitelogo);

	let home = document.createElement("a");
	home.href = "index.html";
	home.innerText = "Home"
	header.appendChild(home);

	let about = document.createElement("a");
	about.href = "about.html";
	about.innerText = "About"
	header.appendChild(about);

	let contact = document.createElement("a");
	contact.href = "contact.html"
	contact.innerText = "Blog"
	header.appendChild(contact);
})


// ============ FOOTER ===============
let footer = document.getElementById("footer");

window.addEventListener("DOMContentLoaded", function () {
	let footerCol1 = document.createElement("ul");
	footerCol1.id = "footer-col-1";
	footer.appendChild(footerCol1);
	footerCol1 = document.querySelector("#footer-col-1");
	
	let liHome = document.createElement("li");
	liHome.innerText = "Home";
	footerCol1.appendChild(liHome);

	let liAbout = document.createElement("li");
	liAbout.innerText = "About";
	footerCol1.appendChild(liAbout);

	let liContact = document.createElement("li");
	liContact.innerText = "Blog";
	footerCol1.appendChild(liContact);


	// let footerCol2 = document.createElement("ul");
	// footerCol2.id = "footer-col-2";
	// footer.appendChild(footerCol2);
	// footerCol2 = document.querySelector("#footer-col-2");

	// let liDir = document.createElement("li");
	// liDir.innerText = "Directions";
	// footerCol2.appendChild(liDir);

	// let liWtyCl = document.createElement("li");
	// liWtyCl.innerText = "Warranty Claims";
	// footerCol2.appendChild(liWtyCl);

	// let sch = document.createElement("li");
	// sch.innerText = "Schedule";
	// footerCol2.appendChild(sch);
})
