import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Find all DOM containers, and render widgets into them.
document.querySelectorAll('.widget_container_indian_culinary')
    .forEach(domContainer => {
        // Read the widget ID from a data-* attribute.
        const widgetID = parseInt(domContainer.dataset.widgetid, 10);
        // get config and data for this widget id
        var config = eval('widget_config_' + widgetID);
        var data = eval('widget_data_' + widgetID);

        // invoke app for this config and data
        ReactDOM.render(<App data={data} config={config} />, domContainer);
    });
