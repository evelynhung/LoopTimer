define(['program_manager'], function(ProgramManager) {
  'use strict';

  var App = {
    init: function() {
      this.programListView = document.getElementById('program-list');
      var iconProgramAdd = document.getElementById('icon-program-add');
      iconProgramAdd.addEventListener('click', this.addProgram.bind(this));
      var iconMenu = document.getElementById('icon-menu');
      iconMenu.addEventListener('click', this.showMenu.bind(this));
      var iconTimerAdd = document.getElementById('icon-timer-add');
      iconTimerAdd.addEventListener('click', this.addTimer.bind(this));

      ProgramManager.init(this.showPrograms.bind(this));
      location.hash = '#program-detail';
    },

    addProgram: function(evt) {
      //ProgramManager.addProgram(this.showPrograms.bind(this));
      console.log(evt.target.dataset.link);
      this.navigate(evt.target.dataset.link);
    },

    showMenu: function(evt) {
      this.navigate(evt.target.dataset.link);
    },

    addTimer: function(evt) {
      this.navigate(evt.target.dataset.link);
    },

    showPrograms: function() {
      this.programListView.innerHTML = '';
      ProgramManager.list.forEach((item, index) => {
        var div = document.createElement('div');
        div.id = 'program-' + index;
        div.classList.add('program-item');
        div.textContent = item.name;
        this.programListView.appendChild(div);
      });
    },

    navigate: function(nextHash) {
      var thisHash = location.hash.replace(/^#/, '') || 'program-detail';
      console.log(thisHash + ' -> ' + nextHash);
      var thisPanel = document.getElementById(thisHash);
      var nextPanel = document.getElementById(nextHash);

      var direction = thisPanel.dataset.index < nextPanel.dataset.index;
      console.log(thisPanel.dataset.index + ' ' + nextPanel.dataset.index);
      requestAnimationFrame(function startAnimation() {
        var animation1 = direction ? 'slide-in-right' : 'slide-in-left';
        nextPanel.classList.add(animation1);
        nextPanel.addEventListener('animationend', function a() {
          nextPanel.removeEventListener('animationend', a);
          nextPanel.classList.remove(animation1);
          nextPanel.classList.add('active');
        });
        var animation2 = direction ? 'slide-out-left' : 'slide-out-right';
        thisPanel.classList.add(animation2);
        thisPanel.addEventListener('animationend', function b() {
          console.log('/// '+thisPanel.id);
          thisPanel.removeEventListener('animationend', b);
          thisPanel.classList.remove(animation2);
          thisPanel.classList.add('hidden');
        });
      });

      nextPanel.classList.remove('hidden');
      thisPanel.classList.remove('active');
      location.hash = '#' + nextHash;
    }

  };
  return App;
});
