var bio = {
		"name" : "Danijel Rahija",
		"role" : "Test Consultant",
		"contacts" : {
			"mobile" : "07947234699",
			"email" : "danijelr@gmail.com",
			"github" : "pleaides",
			"location" : "London"
			},
		"welcomeMessage" : "Welcome to my JS CV, here you will find some of my previous project experience and hopefully convince you that I can help get your project live and looking good. I am an experienced Manual/Automated tester in the Media, Telecommunications, Sports and Shipping Industries. I can get your Automated test suite returning value and your weekly deployments live with confidence.",
		"skills" : "Web, Apps, Cucumber, BDD, Kanban, Scrum, Ruby, PHP/Behat, JS, Networking, Linux",
		"bioPic" : "images/DAN4.jpg"
};

formattedName = HTMLheaderName.replace("%data%",bio.name);
formattedRole = HTMLheaderRole.replace("%data%",bio.role);
formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
formattedskills = HTMLskills.replace("%data%",bio.skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedbioPic);
$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedlocation);
$("#header").append(formattedwelcomeMsg);
if ( bio.skills.length > 0 ) {
	$("#header").append(HTMLskillsStart);
	$("#header").append(formattedskills);
}

var work = {
		"jobs": [{
			"employer": "BBC Global News Limited", 
        	"title": "Consultant - Test (Contract)", 
        	"project" : "Global News Limited Video Experience Web",
        	"location": "London", 
        	"dates": "Mar 2015 – Mar 2017",
        	"description": "Quality assurance of mobile applications and mobile/desktop video experiences in a news environment. Focus on automated testing of pre-roll video advertising and analytics for video on web. Integration testing of new video pre roll advertising formats.",
        	"techstack" : "Behat ( BDD for PHP), Mink, Browsermob Proxy, Selenium Webdriver, Google DFP, Commscore Analytics",
			"Methodology" : "BDD, Kanban, Agile"
    	},{
			"employer": "BBC Global News Limited", 
        	"title": "Consultant - Test (Contract)", 
        	"project" : "Google Doubleclick for Publishers Advertising Project",
        	"location": "London", 
        	"dates": "Nov 2012 – Mar 2015",
        	"description": "Testing of advertising/ analytics implementation on BBC App and Web news sites. Developed automated test suite. Migration of advertising configuration from legacy Doubleclick to Google DFP ensuring no loss of revenue.",
        	"techstack" : "Ruby, Capybara/Cucumber, Selenium Webdriver, Google DFP, Adobe Sitecatalyst",
			"Methodology" : "BDD, Kanban, Agile"
    	},{
			"employer": "BBC.com", 
        	"title": "Consultant - Test (Contract)", 
        	"project" : "New BBC International Homepage with Advertising",
        	"location": "London", 
        	"dates": "Feb 2011 – Nov 2012",
        	"description": "Testing of advertising and analytics on an international news front page in an Agile/ Kanban environment. BDD tests I developed in Ruby, Capybara/Cucumber, Selenium Webdriver. News app testing on iOS tablets with focus on advertising and analytics.",
        	"techstack" : "Ruby, Capybara/Cucumber, Selenium Webdriver, Doubleclick, Sitecatalyst",
			"Methodology" : "BDD, Scrum, Kanban, Agile"
    	},{
			"employer": "BBC Worldwide", 
        	"title": "Consultant - Test (Contract)", 
        	"project" : "Digital Hub tape transcoding and onward publishing project",
        	"location": "London", 
        	"dates": "Sept 2008 – Feb 2011",
        	"description": "Ruby, Cucumber, Watir framework for automated testing of content publishing platform and supporting internal systems. Implemented end to end user journeys. Liaising with 3rd party Ascent Media to test and deploy new Tape to Digital conversion options.",
        	"techstack" : "Ruby, Cucumber, Watir",
			"Methodology" : "Kanban"
    	},{
			"employer": "BBC Worldwide", 
        	"title": "Consultant - Test (Contract)", 
        	"project" : "Internal BBC web portals and systems",
        	"location": "London", 
        	"dates": "Mar 2006 – Sept 2008",
        	"description": "I was involved in testing a variety of web projects including DigitalHub, digitizing the traditional tape business and an e-commerce portal. Performed web testing in an agile environment using both manual and automated methods. I used selenium / watir for automated tests. Performed Service level testing using Parasoft SOA tool on the DigitalHub application, which consisted of 20 services bound by Microsofts Connected Services Framework.",
        	"techstack" : "Ruby, Cucumber, Watir, Selenium RC, Parasoft SOA, Microsoft CSF",
			"Methodology" : "Scrum"
    	},{
			"employer": "Data Connection Ltd, Metaswitch Group", 
        	"title": "System Test Specialist (Contract)", 
        	"project" : "Class 5 softswitch used within the telecoms industry",
        	"location": "London", 
        	"dates": "Nov 2004 – Feb 2006",
        	"description": "I was involved in both testing of new function and ongoing QA and regression testing of the existing product. Testing reliability and scalability using sophisticated test infrastructure and tools including a python based automation test suite.",
        	"techstack" : "Python, TCP/IP, SS7, MGCP, SIP, INS, H248, ISDN and Legacy analogue telephone systems and protocols"
    	},{
			"employer": "Clearswift", 
        	"title": "Test Engineer (Contract)", 
        	"location": "London", 
        	"dates": "2004 Apr-Oct",
        	"description": "Completed structured testing of the web based message management system (sql server back end) and product upgrade scenarios. This involved development of test specifications, test cases and their execution",
    	},{
			"employer": "Klaxon IQA", 
        	"title": "System Test Engineer", 
        	"location": "Sydney", 
        	"dates": "Mar 2002 – Nov 2003",
        	"description": "Software / Hardware testing of shipping container monitoring system, from sensor devices, satellite communications back to the web based management system at headquarters",
    	},{
			"employer": "Lucent", 
        	"title": "System Test Engineer", 
        	"location": ["Sydney","Chicago"], 
        	"dates": "Dec 2000 – Nov 2001",
        	"description": "Verify and validate narrow band services over ATM and V5.2 Line Access Gateway. Including services such as POTS, COIN, ISDN and HDSL. Maintain and provide support to software development, integration and test teams of the integrated test environment.",
    	},{
			"employer": "IBM GSA – Sydney Olympics Results System", 
        	"title": "Lead Tester", 
        	"location": ["Sydney","Madrid"], 
        	"dates": "Jun 1999 – Nov 2000",
        	"description": "Successfully implemented the Taekwondo Results System, with an end-to-end perspective, encompassing operations at the State Sport Centre. This included integration of information feeds and interfaces to TV, News, Internet and local venue.",
    	},{
			"employer": "SCITEC Limited", 
        	"title": "Test Automation Engineer", 
        	"location": "Sydney", 
        	"dates": "Nov 1995 – Jun 1999",
        	"description": "Software/ Hardware Testing of telecommunications nodes, Developed Visual Basic based automation tool to reduce test network configuration times by 1000%.",
    	}
    	]
}

var education = {
		"schools": {
    	  "name": "University of Sydney",
       	  "location": "Sydney",
       	  "degree": "BEE(ISE) / BSC",
       	  "majors": [""],
       	  "description": "Completed Degree in Electrical Engineering (Information Systems Engineering) with 2nd Class Honors Division 1. Obtained Degree in Computer Science in 1993. Final Year Computer Science major team projects were done in C++ on a Unix platform.",
       	  "dates": "1991 – 1995",
       	  "url": "http://sydney.edu.au/"
    	}
}

for (i = 0; i < work.jobs.length; i++) {
	$("#workExperience").append(HTMLworkStart);
	$("#workExperience").append(HTMLworkEmployer.replace("%data%",work.jobs[i].employer));
	$("#workExperience").append(HTMLworkTitle.replace("%data%",work.jobs[i].title));
	$("#workExperience").append(HTMLworkDates.replace("%data%",work.jobs[i].dates));
	$("#workExperience").append(HTMLworkLocation.replace("%data%",work.jobs[i].location));
	$("#workExperience").append(HTMLworkDescription.replace("%data%",work.jobs[i].description));
	if (work.jobs[i].techstack) { $("#workExperience").append(HTMLworkTechStack.replace("%data%","Tech Stack: " + work.jobs[i].techstack)); }
	if (work.jobs[i].Methodology) { $("#workExperience").append(HTMLworkMethodology.replace("%data%","Methodology: " + work.jobs[i].Methodology)); }
}
$("#education").append(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%",education.schools.name));
$("#education").append(HTMLschoolDegree.replace("%data%",education.schools.degree));
$("#education").append(HTMLschoolDates.replace("%data%",education.schools.dates));
$("#education").append(HTMLschoolLocation.replace("%data%",education.schools.location));
$("#education").append(HTMLschoolDescription.replace("%data%",education.schools.description));

$("#mapDiv").append(googleMap);

