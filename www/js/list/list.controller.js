(function () {
  'use strict';

  angular.module('randommet.list')
    .controller('ListCtrl', ListCtrl);

  /** @ngInject */
  function ListCtrl(ListStorage, Counter) {
    var vm = this;
    var counterId = 'list';
    
    vm.ui = {
      editMode: false,
      showDelete: false
    };
    vm.list = [];
    vm.selectedItem = null;
    vm.newItem = '';

    vm.toggleDelete = toggleDelete;
    vm.deleteItem = deleteItem;
    vm.editItem = editItem;
    vm.endEdit = endEdit;
    vm.addItem = addItem;

    onStart();

    function onStart() {
      vm.list = ListStorage.query();
    }

    function toggleDelete() {
      vm.ui.showDelete = !vm.ui.showDelete;
    }

    function deleteItem(index) {
      vm.list.splice(index, 1);
      saveList();
    }

    function editItem(item, index) {
      vm.ui.editMode = true;
      vm.selectedItem = item;
    }

    function endEdit() {
      vm.ui.editMode = false;
      vm.selectedItem = null;
      saveList();
    }

    function saveList() {
      resetCounter();
      ListStorage.post(vm.list);
    }
    
    function resetCounter() {
      Counter.reset(counterId);
    }

    function addItem() {
      if (vm.newItem != '') {
        vm.list.push({
          label: vm.newItem
        });

        vm.newItem = '';
        saveList();
      }
    }
  }
})();