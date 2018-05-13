angular.module('video-player')

  .component('app', {
    // TODO
    controller: function() {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.onClick = (function(video) {
        this.currentVideo = video;
      }).bind(this);
      this.updateVideos = (videos) => {
        this.videos = videos;
      };
      this.updateVideos(exampleVideoData)
    },
    templateUrl: '/src/templates/app.html'
  });
