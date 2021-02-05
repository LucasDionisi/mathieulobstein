const pathImg = "../com/img/realisation/";
const CLIPS = pathImg+"Clip/";
const DRONE = pathImg+"Drone/";
const FICTION = pathImg+"Fiction/";
const PUBLICITE = pathImg+"Les_Publictes/";
const YOUTUBE_LINK = "https://www.youtube.com/watch?v=";

const clips = [{"path": CLIPS+"Clip_1_Danse_Julie.jpg", "name": "Constellation - Julie", "url": YOUTUBE_LINK +"vPje0HRA0h0", "filter": "clip"},
			   {"path" :CLIPS+"Clip_2_HeaderSet1.png", "name": "DJset HEADER", "url": YOUTUBE_LINK +"fCPz8fTq3ag", "filter": "clip"}];

const drone = [{"path": DRONE+"Drone_1_Alpes.jpg", "name": "Les Alpes", "url": "#", "filter": "drone"}, 
               {"path": DRONE+"Drone_2_Revest.jpg", "name": "Le Revest", "url": "#", "filter": "drone"},
               {"path": DRONE+"Drone_3_Ollioule.jpg", "name": "Ollioule", "url": YOUTUBE_LINK +"jHCbtdzp0vE", "filter": "drone"}]; 

const fiction = [{"path": FICTION+"Fiction_1_The_Shelter.jpg", "name": "The Shelter", "url": YOUTUBE_LINK +"0fIIciHKRlY", "filter": "fiction"},
                 {"path": FICTION+"Fiction_2_Le_Coffre.jpg", "name": "Le Coffre", "url": YOUTUBE_LINK +"Xs8_PofLvUQ", "filter": "fiction"},
                 {"path": FICTION+"Fiction_3_Hunting.jpg", "name": "Hunting", "url": YOUTUBE_LINK +"qhbjP1m5xiI", "filter": "fiction"}];

const pub = [{"path": PUBLICITE+"Pub_1_Teaser_Mariage_Sam_Pierrick.jpg", "name": "Mariage Sam & Pierrick", "url": YOUTUBE_LINK +"w4O8j_Y2Glo", "filter": "pub"}];


function setPhotos() {
    let content = "";

    let photos = [];

    for (let i = 0; i < clips.length; i++) {
        photos.push(clips[i]);
    }

    for (let i = 0; i < drone.length; i++) {
        photos.push(drone[i]);
    }

    for (let i = 0; i < fiction.length; i++) {
        photos.push(fiction[i]);
    }

    for (let i = 0; i < pub.length; i++) {
        photos.push(pub[i]);
    }

    for (let i = 0; i < photos.length; i++) {
        content += "<div class=\"imgNetB portfolioBox " +photos[i]["filter"]  +"\">";            
            content += "<div class=\"portfolioBox_in\" data-image=\"" +photos[i]["path"] +"\"></div>";
            content += "<div class=\"portfolioBox_info\">";
                let lien = `<a class="popup-youtube portfolioBox_btn" href="${photos[i]["url"]}"><i class="fa fa-play"></i></a>`;
                if (photos[i]["url"] == "" || photos[i]["url"] == "#") lien = "";
                content += "<div class=\"portfolioBox_title\">" +photos[i]["name"] +lien +"</div>";
            content += "</div>";     
        content += "</div>";
    }

    document.getElementById("isotope").innerHTML += content;
}

setPhotos();

$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});

