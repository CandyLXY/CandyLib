window.CDom = (function () {
  function cdom(els) {
    for(var i = 0; i < els.length; i++) {
      this[i] = els[i];
    }
    this.length = els.length;
  }
  
  cdom.prototype.map = function (callback) {
    var results = [], i = 0;
    
    for( ; i < this.length; i++) {
      results.push(callback.call(this, this[i], i));
    }
    
    return results;
  };
  
  var CDom = {
    get: function (selector) {
      var els;
      if(typeof selector === "string") {
        els = document.querySelectorAll(selector);        
      } else if(selector.length){
        els = selector;
      }  else {
        els = [selector];
      }
      
      return new cdom(els)
    }
    onClick: function (id) {
      
    }
  };
  
  return CDom;
}());
