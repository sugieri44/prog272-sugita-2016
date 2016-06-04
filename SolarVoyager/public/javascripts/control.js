//Load jquery and stick it into '$' = code injection
define(['jquery', 'home', 'about',
        'renewables', 'renewablesByIndex', 'renewablesByYear',
        'energyOverview', 'energyTypes'
    ],
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
                $('.homeMenu').click(home.init);
                $('.renewablesMenu').click(renewables.init);
                $('.renewablesByIndexMenu').click(renewablesByIndex.init);
                $('.renewablesByYearMenu').click(renewablesByYear.init);
                $('.aboutMenu').click(about.init);
                $('.highTechEnergyOverviewMenu').click(energyOverview.init);
                $('.highTechEnergyTypesMenu').click(energyTypes.init);
                home.init();
            }
        };

        return control;
    });
