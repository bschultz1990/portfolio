// ============ HEADER ===============
let header = document.getElementById("header")

window.addEventListener("DOMContentLoaded", function () {
	// let sitelogo = document.createElement("img");
	// sitelogo.id = "sitelogo";
	// sitelogo.src = "media/apple.svg";
	// sitelogo.alt = "Site Logo"
	// header.appendChild(sitelogo);

	let btn_home = document.createElement("button");
	btn_home.classList.add("simple-button");
	header.appendChild(btn_home);

	let home = document.createElement("a");
	home.href = "index.html";
	home.innerText = "Home"
	home.classList.add("small-button-text")
	btn_home.appendChild(home);

	let btn_about = document.createElement("button");
	btn_about.classList.add("simple-button");
	header.appendChild(btn_about);

	let about = document.createElement("a");
	about.href = "#about-bg";
	about.innerText = "About"
	about.classList.add("small-button-text")
	btn_about.appendChild(about);


	let btn_contact = document.createElement("button");
	btn_contact.classList.add("simple-button");
	header.appendChild(btn_contact);

	let contact = document.createElement("a");
	contact.href = "#projects";
	contact.innerText = "Projects";
	contact.classList.add("small-button-text");
	btn_contact.appendChild(contact);
})


// // ============ FOOTER ===============
// let footer = document.getElementById("footer");

// window.addEventListener("DOMContentLoaded", function () {


// 	let footerCol1 = document.createElement("ul");
// 	footerCol1.id = "footer-col-1";
// 	footer.appendChild(footerCol1);

// 	footerCol1 = document.querySelector("#footer-col-1");

// 	// HOME
// 	let liHome = document.createElement("li");
// 	footerCol1.appendChild(liHome);

// 	let liHomeButton = document.createElement("button");
// 	liHomeButton.classList.add("simple-button");
// 	liHome.appendChild(liHomeButton);

// 	let liHomeLink = document.createElement("a");
// 	liHomeLink.href = "index.html";
// 	liHomeLink.innerText = "Home";
// 	liHomeButton.appendChild(liHomeLink);


// 	// ABOUT
// 	let liAbout = document.createElement("li");
// 	footerCol1.appendChild(liAbout);

// 	let liAboutButton = document.createElement("button");
// 	liAboutButton.classList.add("simple-button");
// 	liAbout.appendChild(liAboutButton);

// 	let liAboutLink = document.createElement("a");
// 	liAboutLink.href = "about.html";
// 	liAboutLink.innerText = "About";
// 	liAboutButton.appendChild(liAboutLink);

// 	// PROJECTS
// 	let liProjects = document.createElement("li");
// 	footerCol1.appendChild(liContact);

// 	let liProjectsButton = document.createElement("button");
// 	liProjectsButton.classList.add("simple-button");
// 	liProjects.appendChild(liProjectsButton);

// 	let liProjectsLink = document.createElement("a");
// 	liProjectsLink.href = "#projects";
// 	liProjectsLink.innerText = "Projects";
// 	liProjectsButton.appendChild(liProjectsLink);


// 	// let footerCol2 = document.createElement("ul");
// 	// footerCol2.id = "footer-col-2";
// 	// footer.appendChild(footerCol2);
// 	// footerCol2 = document.querySelector("#footer-col-2");

// 	// let liDir = document.createElement("li");
// 	// liDir.innerText = "Directions";
// 	// footerCol2.appendChild(liDir);

// 	// let liWtyCl = document.createElement("li");
// 	// liWtyCl.innerText = "Warranty Claims";
// 	// footerCol2.appendChild(liWtyCl);

// 	// let sch = document.createElement("li");
// 	// sch.innerText = "Schedule";
// 	// footerCol2.appendChild(sch);
// })
