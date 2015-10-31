(function () {
  'use strict';

  angular.module('randommet.list')
    .controller('ListCtrl', ListCtrl);

  /** @ngInject */
  function ListCtrl() {
    var vm = this;
    vm.ui = {
      editMode: false,
      showDelete: false
    };
    vm.list = [
      {
        label: 'Vano'
      },
      {
        label: 'Belo'
      },
      {
        label: 'Anthony'
      },
      {
        label: 'Giulia'
      }
    ];
    vm.selectedItem = null;
    vm.newItem = '';

    vm.toggleDelete = toggleDelete;
    vm.deleteItem = deleteItem;
    vm.editItem = editItem;
    vm.endEdit = endEdit;
    vm.addItem = addItem;

    function toggleDelete() {
      vm.ui.showDelete = !vm.ui.showDelete;
    }

    function deleteItem(index) {
      vm.list.splice(index, 1);
    }

    function editItem(item, index) {
      vm.ui.editMode = true;
      vm.selectedItem = item;
    }

    function endEdit() {
      vm.ui.editMode = false;
      vm.selectedItem = null;
    }

    function addItem() {
      vm.list.push({
        label: vm.newItem
      });

      vm.newItem = '';
    }
  }
})();