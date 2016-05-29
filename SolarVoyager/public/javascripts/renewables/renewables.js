/**
 * Created by bcuser on 5/23/16.
 */
define(function() {
    'use strict';

    var renewablesList;
    function getSimpleKeys(renewable) {
        return {
            year: renewable["Year"],
            solar: renewable["Solar (quadrillion Btu)"],
            geo: renewable["Geothermal (quadrillion Btu)"],
            otherBiomass: renewable["Other biomass (quadrillion Btu)"],
            wind: renewable["Wind power (quadrillion Btu)"],
            liquidBiofuels: renewable["Liquid biofuels (quadrillion Btu)"],
            wood: renewable["Wood biomass (quadrillion Btu)"],
            hydropower: renewable["Hydropower (quadrillion Btu)"]
        }
    }

    function showRenewable(renewable) {
        renewable = getSimpleKeys(renewable);
        console.log(renewable.year);
        $('#yearView').val(renewable.year);
        $('#solarView').val(renewable.solar);
        $('#geoView').val(renewable.geo);
        $('#otherBiomassView').val(renewable.otherBiomass);
        $('#windView').val(renewable.wind);
        $('#liquidBiofuelsView').val(renewable.liquidBiofuels);
        $('#woodView').val(renewable.wood);
        $('#hydropowerView').val(renewable.hydropower);
    }

    function getRenewable(){
        console.log('getRenewable was called');
        $.getJSON('/renewables', function(response){
                console.log(response);
                renewablesList = response.renewables;
                showRenewable(renewablesList[$('#indexInput').val()]);
                $('#debug').html(JSON.stringify(response, null, 4));
            })
            .done(function(){
                console.log("second success");
            })
            .fail(function(a,b,c){
                console.log("Error", a,b,c);
            })
            .always(function(){
                console.log("complete");
            });
    }

    function indexChange(test) {
        if (test < 12 && test >= 0) {
            var index = test;
            $('#indexInput').val(index);
            showRenewable(renewablesList[index]);
        }
    }

    var indexButtonChange = function(event) {
        var test = event.data.value + index;

        indexChange(test);
    };

    var buttonChange = function() {
        var test = $('#indexInput').val();
        indexChange(parseInt(test));
    };
    
    var renewables = {
        color: "red",
        size: "small",
        init: function() {
            console.log("renewables.init() was called");
            $('#elf-view').load('renewables/renewables-page', function(response) {
                $('#display').html(renewables.color);
                $('#display2').html(renewables.size);
                getRenewable();
                //When the input control changes, call callGetByIndex
                $('#minusButton').click(function(){
                    $('#indexInput').val(parseInt($('#indexInput').val()) - 1);
                    buttonChange();
                });
                $('#plusButton').click(function(){
                    $('#indexInput').val(parseInt($('#indexInput').val()) + 1);
                    buttonChange();
                });
                $('#indexInput').change(function(){
                    indexButtonChange();
                })
            });
        }
    };
    return renewables;
});