// http://code.google.com/mobile/articles/fast_buttons.html

window.google = window.google || {};
window.google.ui = window.google.ui || {};
// Construct the FastButton with a reference to the element and click handler.
google.ui.FastButton = function(element, handler) {
  this.element = element;
  this.handler = handler;

  element.addEventListener('touchstart', this, false);
  element.addEventListener('click', this, false);
};

google.ui.FastButton.prototype.handleEvent = function(event) {
  switch (event.type) {
    case 'touchstart':
      $(this.element).addClass('active');
      this.onTouchStart(event); break;
    case 'touchmove': this.onTouchMove(event); break;
    case 'touchend':
      $(this.element).removeClass('active');
      this.onClick(event);
    break;
    case 'click':
      $(this.element).addClass('active');
      setTimeout(function() {
        $(this.element).removeClass('active');
      }, 100);
      this.onClick(event);
    break;
  }
};
// Save a reference to the touchstart coordinate and start listening to
// touchmove and touchend events. Calling stopPropagation guarantees that
// other behaviors don't get a chance to handle the same click event.
google.ui.FastButton.prototype.onTouchStart = function(event) {
  event.stopPropagation();
  this.element.addEventListener('touchend', this, false);
  document.body.addEventListener('touchmove', this, false);

  this.startX = event.touches[0].clientX;
  this.startY = event.touches[0].clientY;
};
// When a touchmove event is invoked, check if the user has dragged past the
// threshold of 10px.
google.ui.FastButton.prototype.onTouchMove = function(event) {
  if (Math.abs(event.touches[0].clientX - this.startX) > 10 ||
      Math.abs(event.touches[0].clientY - this.startY) > 10) {
    this.reset();
  }
};
// Invoke the actual click handler and prevent ghost clicks if this was a
// touchend event
google.ui.FastButton.prototype.onClick = function(event) {
  event.stopPropagation();
  this.reset();
  this.handler(event);

  if (event.type == 'touchend') {
    google.clickbuster.preventGhostClick(this.startX, this.startY);
  }
};

google.ui.FastButton.prototype.reset = function() {
  $(this.element).removeClass('active');
  this.element.removeEventListener('touchend', this, false);
  document.body.removeEventListener('touchmove', this, false);
};
// Call preventGhostClick to bust all click events that happen within 25px
// of the provided x, y coordinates in the next 2.5s.
google.clickbuster = {};
google.clickbuster.preventGhostClick = function(x, y) {
  google.clickbuster.coordinates.push(x, y);
  window.setTimeout(google.clickbuster.pop, 2500);
};

google.clickbuster.pop = function() {
  google.clickbuster.coordinates.splice(0, 2);
};
// If we catch a click event inside the given radius and time threshold then
// we call stopPropagation and preventDefault. Calling preventDefault will
// stop links from being activated.
google.clickbuster.onClick = function(event) {
  for (var i = 0; i < google.clickbuster.coordinates.length; i += 2) {
    var x = google.clickbuster.coordinates[i];
    var y = google.clickbuster.coordinates[i + 1];
    if (Math.abs(event.clientX - x) < 25 && Math.abs(event.clientY - y) < 25) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
};

document.addEventListener('click', google.clickbuster.onClick, true);
google.clickbuster.coordinates = [];


// active buttons
window.ActiveButton = function(element) {
  this.element = element;
  this.startX = 0;
  this.startY = 0;
  this.hasMoved = false;
  this.touchHasFinished = false;
  this.isActivated = false;

  this.element.addEventListener('touchstart', this, false);
  this.element.addEventListener('touchend', this, false);
  this.element.addEventListener('touchmove', this, false);

};

window.ActiveButton.prototype.handleEvent = function(event) {
  switch (event.type) {
    case 'touchstart': this.onTouchStart(event); break;
    case 'touchmove': this.onTouchMove(event); break;
    case 'touchend': this.onTouchEnd(event); break;
  }
};

window.ActiveButton.prototype.onTouchStart = function(event) {
  this.startX = event.touches[0].clientX;
  this.startY = event.touches[0].clientY;
  this.touchHasFinished = false;
  this.isActivated = false;
  this.hasMoved = false;

  var that = this;

  setTimeout(function() {
    if (!that.hasMoved && !that.touchHasFinished) {
      $(that.element).addClass('active');
      that.isActivated = true;
    }
  }, 100);
};
window.ActiveButton.prototype.onTouchMove = function(event) {
  if (Math.abs(event.touches[0].clientX - this.startX) > 10 ||
    Math.abs(event.touches[0].clientY - this.startY) > 10 ||
    this.hasMoved
  ) {
    this.hasMoved = true;
  }

  if ((Math.abs(event.touches[0].clientX - this.startX) > 1 ||
    Math.abs(event.touches[0].clientY - this.startY) > 1) &&
    this.isActivated
  ) {
    $(this.element).removeClass('active');
  }
};
window.ActiveButton.prototype.onTouchEnd = function(event) {
  this.touchHasFinished = true;
  $(this.element).removeClass('active');
};
