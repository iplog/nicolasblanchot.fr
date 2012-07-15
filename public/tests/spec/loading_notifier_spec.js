define([
  'views/LoadingNotifier'
], function(LoadingNotifier) {
  describe('Loading Notifier tests', function() {
    var div;

    beforeEach(function() {
      div = $('<div>').attr('id', 'loadingContainer');
      $('body').append(div);

      this.view = new LoadingNotifier();
    });

    afterEach(function() {
      div.remove();
      this.view.remove();
    });


    describe('loading notifier rendering', function() {
      it('should return the view object', function() {
        expect(this.view.render()).toEqual(this.view);
      });

      it('should display the content using fadeIn with a 150ms delay',
        function() {
        spyOn(this.view.$el, 'fadeIn');
        this.view.render();
        expect(this.view.$el.fadeIn).toHaveBeenCalledWith(150);
      });

      it('should create a new fast button', function() {
        spyOn(google.ui, 'FastButton');
        this.view.render();
        expect(google.ui.FastButton).toHaveBeenCalledWith(
          this.view.$el.find('#loadingNotifierMiddle').get(0),
          this.view.close
        );
      });

      describe('Template', function() {

        beforeEach(function() {
          this.view.render();
        });

        it('should have the correct content', function() {
          expect(this.view.$el.find('#loadingNotifierTop')).toBeVisible();
          expect(this.view.$el.find('#loadingNotifierTopError')).toBeHidden();
          expect(this.view.$el.find('#loadingNotifierMiddle')).toBeHidden();
          expect(this.view.$el.find('#loadingNotifierTop')).toHaveText('Loading...');
        });

        it('should have undefined callback', function() {
          expect(this.view.callback).toBe(undefined);
        });
      });
    });

  });
});
