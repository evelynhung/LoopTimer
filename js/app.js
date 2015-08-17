define(['program_manager'], function(ProgramManager) {
  'use strict';

  var App = {
    init: function() {
      this.programListView = document.getElementById('program-list');
      var addIcon = document.getElementById('program-add');
      addIcon.addEventListener('click', this.addProgram.bind(this));
      ProgramManager.init(this.showPrograms.bind(this));
    },

    addProgram: function() {
      ProgramManager.addProgram(this.showPrograms.bind(this));

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
    }

  };
  return App;
});
