var airPort = (function () {
    'use strict';
    //private scope
    //traverse dom for input elements
    var westSearch = document.querySelector('#westcoast_search'),
        eastSearch = document.querySelector('#eastcoast_search'),
        inputFields = document.querySelectorAll("input[value=inputFld]")[0],
        input = westSearch;

    function init() {
        this.input = input;
        this.config = config();
        //this.calculatePaths = calculatePaths(data);
        //this.autoComplete = autoComplete(this.value);
        this.getData = getData();
    }

    function config() {
        //configure autoComplete module settings
        return {
            autoFirst: true
        }
    }

    //native autocompletion class constructor
    /*function autoComplete(inputVal) {
        var self = this;
        self.inputVal = inputVal;
        //hold options element list of dropdown airports list
        var airPorts_displayed = [];
        //loop through each element of the allAirports array,
        //check if inputFields iterator argument is strict equal
        //to allAirports iterator. Then push airPorts_displayed items to it's array
        for(var i = 0; i < allAirports.length; i++){
            if (inputVal === allAirports[i].slice(0, inputVal.length)){
                airPorts_displayed.push(allAirports[i]);
            }
        }
        //return the airPorts_displayed value
        return airPorts_displayed;

        //inputFields.focus().select();
    }*/

    //get Data from api via ajax
    function getData() {
        //create a new XMLHttpRequest.
        var request = new XMLHttpRequest();

        //handle state changes for the request.
        request.onreadystatechange = function(response) {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    // Parse the JSON
                    var jsonOptions = JSON.parse(request.responseText);
                    var dataList = document.getElementById('json-datalist');

                    // Loop over the JSON array.
                    jsonOptions.map(function (item) {
                        // Create a new <option> element.
                        var option = document.createElement('option');
                            //el = jsonOptions.response.querySelector('#dataList');

                        // Set the value using the item in the JSON array.
                        option.value = item;

                        // Add the <option> element to the <datalist>.
                        dataList.appendChild(option);
                    });

                    // Update the placeholder text.
                    //input.placeholder = "input placeholder value";
                } else {
                    // An error occured :(
                    input.placeholder = "Couldn't load datalist options :(";
                }
            }


        };

        //update the placeholder text.
        input.placeholder = "Loading options...";

        //set up and make the request.
        request.open('GET', 'js/model/model.json', true);
        request.responseType = 'text';
        request.send();
    }


    //render autocompletion of input fields ( JFK to LA )
    /*function calculatePaths(data) {
        console.log('calculate path between 2 airports/ longitude + latitude');
    }*/


    //events
    /*inputFields.onkeyup = function(e) {
        var input_val = this.value; // updates the variable on each ocurrence

        if (input_val.length > 0) {
            var showAirports = [];

            var autocomplete_results = document.querySelectorAll("select[id=westcoast_airports]");
            autocomplete_results.innerHTML = '';
            showAirports = autoComplete(inputVal);

            for (var i = 0; i < showAirports.length; i++) {
                autocomplete_results.innerHTML += '<li>' + showAirports[i] + '</li>';

            }
            autocomplete_results.style.display = 'block';
        } else {
            showAirports = [];
            autocomplete_results.innerHTML = '';
        }
    }*/

    //public scope
    return {
        init: init
    }
})();
