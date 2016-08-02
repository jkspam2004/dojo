from system.core.controller import *

# localhost:5000
class Quotes(Controller):
    def __init__(self, action):
        super(Quotes, self).__init__(action)
        self.load_model('Quote')
        

    # render index.html page
    def index(self):
        #return self.load_view('quotes/index.html')
        # get the quotes and load them up without clicking button
        quotes = self.models['Quote'].all()
        return self.load_view('quotes/index.html', quotes=quotes)
  
    # return json 
    def index_json(self):
        quotes = self.models['Quote'].all()
        return jsonify(quotes=quotes)

    # return html
    def index_html(self):
        quotes = self.models['Quote'].all()
        return self.load_view('partials/quotes.html', quotes=quotes)

    # allow users to add quote
    def create(self):
        new_quote = {
            "author" : request.form['author'],
            "quote"  : request.form['quote']
        }
        self.models['Quote'].create(new_quote)
        #return redirect('/')
        quotes = self.models['Quote'].all()
        return self.load_view('partials/quotes.html', quotes=quotes)
    


