const pathImg = "../com/img/realisation/";
const CLIPS = pathImg+"Clip/";
const DRONE = pathImg+"Drone/";
const FICTION = pathImg+"Fiction/";
const PUBLICITE = pathImg+"Les_Publictes/";


const clips = [{"path": CLIPS+"Clip_1_Danse_Julie.jpg", "name": "Constellation - Julie", "url": "https://youtu.be/vPje0HRA0h0", "filter": "clip"},
			   {"path" :CLIPS+"Clip_2_HeaderSet1.png", "name": "DJset HEADER", "url": "https://youtu.be/fCPz8fTq3ag", "filter": "clip"}];

const drone = [{"path": DRONE+"Drone_1_Alpes.jpg", "name": "Les Alpes", "url": "#", "filter": "drone"}, 
               {"path": DRONE+"Drone_2_Revest.jpg", "name": "Le Revest", "url": "#", "filter": "drone"},
               {"path": DRONE+"Drone_3_Ollioule.jpg", "name": "Ollioule", "url": "https://youtu.be/jHCbtdzp0vE", "filter": "drone"}]; 

const fiction = [{"path": FICTION+"Fiction_1_The_Shelter.jpg", "name": "The Shelter", "url": "https://youtu.be/0fIIciHKRlY", "filter": "fiction"},
                 {"path": FICTION+"Fiction_2_Le_Coffre.jpg", "name": "Le Coffre", "url": "https://www.youtube.com/watch?v=Xs8_PofLvUQ&ab_channel=NightVisual", "filter": "fiction"},
                 {"path": FICTION+"Fiction_3_Hunting.jpg", "name": "Hunting", "url": "https://www.youtube.com/watch?v=qhbjP1m5xiI&ab_channel=NightVisual", "filter": "fiction"}];

const pub = [{"path": PUBLICITE+"Pub_1_Teaser_Mariage_Sam_Pierrick.jpg", "name": "Mariage Sam & Pierrick", "url": "https://youtu.be/w4O8j_Y2Glo", "filter": "pub"}];


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
                let lien = `<a class="portfolioBox_btn" href="${photos[i]["url"]}" target="_blank"><i class="fa fa-play"></i></a>`;
                if (photos[i]["url"] == "" || photos[i]["url"] == "#") lien = "";
                content += "<div class=\"portfolioBox_title\">" +photos[i]["name"] +lien +"</div>";
            content += "</div>";     
        content += "</div>";
    }

    document.getElementById("isotope").innerHTML += content;
}

setPhotos();