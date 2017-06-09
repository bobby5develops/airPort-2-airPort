var airPort = (function () {
    'use strict';
    //private scope
    //traverse dom for input elements
    var westSearch = document.querySelector('#westcoast_search'),
        eastSearch = document.querySelector('#eastcoast_search'),
        inputFields = document.querySelectorAll("input[value=inputFld]");

    function init() {

    }

    function config() {

    }

    //native autocompletion class constructor
    function autoComplete(westSearch) {

        westSearch.focus().select();
        eastSearch.focus().select();
    }

    //render autocompletion of input fields ( JFK to LA )
    function calculatePaths(data) {

    }

    //public scope
    return {
        init: init(),
        config: config(),
        calculate: calculatePaths(),
        autocomplete: autoComplete()
    }
})();
