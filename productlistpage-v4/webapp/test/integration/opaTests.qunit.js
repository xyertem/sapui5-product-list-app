sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sapui5/product/list/page/productlistpagev4/test/integration/FirstJourney',
		'sapui5/product/list/page/productlistpagev4/test/integration/pages/ProductsList',
		'sapui5/product/list/page/productlistpagev4/test/integration/pages/ProductsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sapui5/product/list/page/productlistpagev4') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage
                }
            },
            opaJourney.run
        );
    }
);