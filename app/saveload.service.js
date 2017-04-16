(function () {
  'use strict';

  angular
    .module('sewa.saveload.service', [])
    .service('SaveLoadService', SaveLoadService);

  SaveLoadService.$inject = ['_', '$q'];
  
  function SaveLoadService(_, $q) {
    var onLoad = function(reader, deferred, scope) {
      return function () {
        scope.$apply(function () {
          deferred.resolve(reader.result);
        });
      };
    };

    var onError = function (reader, deferred, scope) {
      return function () {
      scope.$apply(function () {
          deferred.reject(reader.result);
        });
      };
    };
 
    var getReader = function(deferred, scope) {
      var reader = new FileReader();
      reader.onload = onLoad(reader, deferred, scope);
      reader.onerror = onError(reader, deferred, scope);
      return reader;
    };

    var readAsText = function (file, scope) {
      var deferred = $q.defer();
       
      if (file) {
        var reader = getReader(deferred, scope);         
        reader.readAsText(file);
      } else {
        deferred.reject();
      }
      
      return deferred.promise;
    };
    
    return {
      saveJson: function(data, filename) {
        if (!data) {
          console.error('No data');
          return;
        }

        if (!filename) {
          filename = 'download.json';
        }
        
        if (typeof data === 'object') {
          data = JSON.stringify(data, undefined, 2);
        }

        var blob = new Blob([data], {type: 'text/json'});

        // FOR IE:

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(blob, filename);
        } else {
          var e = document.createEvent('MouseEvents'),
              a = document.createElement('a');

          a.download = filename;
          a.href = window.URL.createObjectURL(blob);
          a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
          e.initEvent('click', true, false, window,
              0, 0, 0, 0, 0, false, false, false, false, 0, null);
          a.dispatchEvent(e);
        }        
      },
      
      loadFile: function(file, scope) {
        return readAsText(file, scope);
      },
      
      parseJson: function(data) {
        var json = {};
        try {
          json = JSON.parse(data)
        } catch (e) {}
        return json;
      }
    }
  }

})();