define(['jquery','settings'], function($, settings) {
    'use strict';

    var useDatabase = false;
    var index = $('#indexInput').val();

    function getSimpleKeys(renewable) {
        console.log('getSimpleKeys is called: ', renewable);
        return {
            year: renewable['Year'],
            solar: renewable['Solar (quadrillion Btu)'],
            geo: renewable['Geothermal (quadrillion Btu)'],
            otherBiomass: renewable['Other biomass (quadrillion Btu)'],
            wind: renewable['Wind power (quadrillion Btu)'],
            liquidBiofuels: renewable['Liquid biofuels (quadrillion Btu)'],
            wood: renewable['Wood biomass (quadrillion Btu)'],
            hydropower: renewable['Hydropower (quadrillion Btu)']
        };
    }

    function showRenewable(renewable) {
        console.log('showRenewalbe is called: ', renewable)
        if (!useDatabase) {
            renewable = getSimpleKeys(renewable);
        }
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

    function getRenewable() {
        console.log('getRenewable was called');
        var routeType = settings.useDatabase ? 0 : 1;
        var renewableRoutes = ['/database/getAllRenewables', '/renewables'];

        $.getJSON(renewableRoutes[routeType], function(response) {
                console.log(response);
                renewables.renewablesList = response.renewables;
                console.log(renewables.renewablesList[index]);
                //showRenewable(renewables.renewablesList[$('#indexInput').val()]);
                showRenewable(renewables.renewablesList[index]);
                $('#debug').html(JSON.stringify(response, null, 4));
            })
            .done(function() {
                console.log('second success');
            })
            .fail(function(a, b, c) {
                console.log('Error', a, b, c);
            })
            .always(function() {
                console.log('complete');
            });
    }

    function indexChange(test) {
        if (test < 12 && test >= 0) {
            var index = test;
            $('#indexInput').val(index);
            showRenewable(renewables.renewablesList[index]);
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
        color: 'red',
        size: 'small',
        renewablesList: [],
        getRenewable: getRenewable,
        init: function() {
            console.log('renewables.init() was called');
            $('#elf-view').load('renewables/renewables-page', function(response) {
                $('#display').html(renewables.color);
                $('#display2').html(renewables.size);
                getRenewable();
                //When the input control changes, call callGetByIndex
                $('#minusButton').click(function() {
                    $('#indexInput').val(parseInt($('#indexInput').val()) - 1);
                    buttonChange();
                });
                $('#plusButton').click(function() {
                    $('#indexInput').val(parseInt($('#indexInput').val()) + 1);
                    buttonChange();
                });
                $('#indexInput').change(function() {
                    indexButtonChange();
                });
            });
        }
    };
    return renewables;
});
