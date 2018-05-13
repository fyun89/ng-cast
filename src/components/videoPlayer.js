angular.module('video-player')

  .component('videoPlayer', {
    // TODO
    controller: function() {
      //this.currentVideo = window.exampleVideoData[0],
      //console.log($ctrl.currentVideo)
      //this.url = "https://www.youtube.com/embed/" + this.currentVideo.id.videoId
    },
    templateUrl: 'src/templates/videoPlayer.html',
    bindings: {
      currentVideo: '<',
      onUpdate: '<'
    }
  });
