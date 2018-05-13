angular.module('video-player')
.service('youTube', function($http){
  this.search = function (query, callback) {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          maxResults: 5,
          q: query,
          part: 'snippet',
          key: window.YOUTUBE_API_KEY,
          videoEmbeddable: 'true',
          type: 'video'
        }   
      }
    )
    .then(function({data}) {
      if (callback) {
        callback(data.items);
      }
    })
  }
});
