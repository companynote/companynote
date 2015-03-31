'use strict';

(function($) {
  function _onReady() {
    var params = {
      success_callback: config.website_address + config.login_success_callback,
      failure_callback: config.website_address + config.login_failure_callback
    };
    var loginUrl = config.api_endpoint + config.login_path + '?' + $.param(params);
    $('.b-login').attr('href', loginUrl);

  }
  $(_onReady);
})(jQuery);