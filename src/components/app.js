angular.module('video-player')

  .component('app', {
    // TODO
    controller: function() {
      this.videos = window.exampleVideoData,
      this.currentVideo = window.exampleVideoData[0],
      this.setCurrentVideo = (function(video) {
        this.currentVideo = video;
        console.log('clicked:', this.currentVideo);
        //$ctrl.currentVideo = video
      }).bind(this);
    },
    templateUrl: '/src/templates/app.html'
  });
