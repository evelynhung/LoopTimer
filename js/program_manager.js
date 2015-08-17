define(function(require) {
  'use strict';

  // Class Timer
  var Timer = function(time, sound, isVibrate) {
    this.time = time;
    this.sound = sound;
    this.isVibrate = isVibrate;
  };

  // Class Program
  var Program = function(name) {
    this.name = name || '';
    this.isActive = false;
    this.timers = [];
  };
  Program.prototype.addTimer = function() {
    this.timers.push(new Timer(new Date(), 'test.mov', true));
  };

  Program.prototype.activate = function() {
    this.isActive = true;
    // XXX activate every timer;
  };

  var ProgramManager = {
    list: [],
    init: function(callback) {
      // XXX load from program database
      var aProgram = new Program('Workout');
      this.list.push(aProgram);
      console.log('program loaded!');
      callback();
    },
    addProgram: function(callback) {
      console.log('add program!');
      var aProgram = new Program('timer-' + Date.now());
      this.list.push(aProgram);
      callback();
    }
  };

  return ProgramManager; 
});
