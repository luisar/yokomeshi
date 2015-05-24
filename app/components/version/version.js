'use strict';

angular.module('yokoApp.version', [
  'yokoApp.version.interpolate-filter',
  'yokoApp.version.version-directive'
])

.value('version', '0.1');
