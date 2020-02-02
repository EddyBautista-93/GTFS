import React from 'react';
import logo from './logo.svg';
import './App.css';


const GtfsRealtimeBindings = () => {

var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
var request = require('request');

var requestSettings = {
  method: 'GET',
  url: 'http://gtfs.viainfo.net/tripupdate/tripupdates.pb',
  encoding: null
};
request(requestSettings, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(body);
    feed.entity.forEach(function(entity) {
      if (entity.trip_update) {
        console.log(entity.trip_update);
      }
    });
  }
});
}

function App() {
  return (
    <GtfsRealtimeBindings />
  );
}

export default App;
