from system.core.controller import *
import os


class Maps(Controller):
    def __init__(self, action):
        super(Maps, self).__init__(action)
        self.directions_url = "https://maps.googleapis.com/maps/api/directions/json?key="
        self.maps_url = "https://google.com/maps/embed/v1/place?key=" 

    def index(self):
        return self.load_view('maps/index.html')

    def get_directions(self):
        data = { 
            'origin'      : request.form.get('from', ''), 
            'destination' : request.form.get('to', '') 
       }
        api_key = os.environ.get('GOOGLEMAPS_DIRECTIONS_API', None)
        # urlencode to format data for passing query string
        url = self.directions_url + api_key + "&sensor=false" + "&" + urlencode(data)
        response = requests.get(url).content
        
        return response

    def get_map(self):
        destination = request.form['destination']
        api_key = os.environ.get('GOOGLEMAPS_EMBED_API', None)
        url = self.maps_url + api_key + "&" + urlencode({'q' : destination })
        return self.load_view("partials/maps.html", url=url)

