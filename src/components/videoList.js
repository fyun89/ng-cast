angular.module('video-player')
.component('videoList', {
  // TODO
  controller: function() {
    this.videos = window.exampleVideoData
  },
  templateUrl: 'src/templates/videoList.html',
  bindings: {
    setCurrentVideo: '<'
  }
});
