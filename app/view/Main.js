Ext.define('CustomerMap.view.Main', {
    
    extend: 'Ext.Container',
    
    requires: ['Ext.Map'],
    
    xtype: 'main',
    
    config: {
    
        layout : 'fit',
    items : [
      {
          xtype : 'map',
          id : 'mapView',
          useCurrentLocation:  {
              autoUpdate : false,
          },
          mapOptions: {
              zoom: 9,
          }

      }      
     ]

    }
});
