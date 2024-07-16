function start() {
    var click = document.getElementById('stop');
       if(click.src.includes("btn-play.png")) {
          click.src = "Yebeen/image/assets/btn-play.png";
       } else {
          click.src = "Yebeen/image/assets/btn-pause.png";
       }
    }
