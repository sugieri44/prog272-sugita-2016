//Load jquery and stick it into '$' = code injection
define(['jquery', 'home', 'about',
    'renewables', 'renewablesByIndex', 'renewablesByYear',
    'energyOverview','energyTypes'],
    function($, home, about,
             renewables, renewablesByIndex, renewablesByYear,
             energyOverview, energyTypes) {
        'use strict';
        //Do setup work here

        function showBar() {
            //console.log('Show Bar Clicks called now');
            $('#display2').html('bar');
        }

        var control = {
            color: 'black',
            size: 'unisize',
            setup: function() {
                $(document).on('click', '#showClick', showBar);
                $('#display2').html(control.color + ' - ' + control.size);
            },
            init: function() {
                //console.log(this.color);
                //that = this;
                $('.homeButton').click(home.init);
                $('.renewablesButton').click(renewables.init);
                $('.renewablesByIndexButton').click(renewablesByIndex.init);
                $('.renewablesByYearButton').click(renewablesByYear.init);
                $('.aboutButton').click(about.init);
                $('.energyOverviewButton').click(energyOverview.init);
                $('.energyTypesButton').click(energyTypes.init);
                home.init();
            }
        };

        return control;
    });
