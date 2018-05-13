angular.module('video-player')

.component('search', {
  bindings: {
    onUpdate: '<',
  },
  controller: function(youTube) {
    this.search = () => {
      youTube.search(this.query, this.onUpdate)
    }
  },
  templateUrl: 'src/templates/search.html',
  
});
