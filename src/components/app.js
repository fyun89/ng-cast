angular.module('video-player')

.component('app', {
  // TODO
  controller: function() {
    this.videos = window.exampleVideoData,
    this.currentVideo = window.exampleVideoData[0],
    this.setCurrentVideo = (function(video) {
      console.log('clicked:', video);
      //debugger;
      this.currentVideo = video;
      //$ctrl.currentVideo = video
    }).bind(this);
  },
  templateUrl: '/src/templates/app.html'
});
