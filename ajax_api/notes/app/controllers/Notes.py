from system.core.controller import *
import inspect

class Notes(Controller):
    def __init__(self, action):
        super(Notes, self).__init__(action)
        self.load_model('Note')

    def trace(self):
        return __file__, inspect.stack()[1][2], inspect.stack()[1][3]

    def index(self):
        notes = self.models['Note'].get_notes()
        return self.load_view('/notes/index.html', notes=notes)

    def delete(self, id):
        self.models['Note'].delete(id)
        notes = self.models['Note'].get_notes()
        return self.load_view('/partials/notes.html', notes=notes)

    def create(self):
        print request.form, self.trace()
        notes = self.models['Note'].insert(request.form)
        print notes, self.trace()
        return self.load_view('/partials/notes.html', notes=notes)

    def update(self, id):
        print "update", id, request.form, self.trace()
        self.models['Note'].update(id, request.form.get('description'))
        notes = self.models['Note'].get_notes()
        return self.load_view('/partials/notes.html', notes=notes)

