from system.core.controller import *

class Posts(Controller):
    def __init__(self, action):
        super(Posts, self).__init__(action)
        self.load_model('Post')

    def index(self):
        recent_posts = self.models['Post'].most_recent()
        older_posts = self.models['Post'].less_recent()
        return self.load_view('/posts/index.html', recent_posts=recent_posts, older_posts=older_posts)

    def index_json(self):
        recent_posts = self.models['Post'].most_recent()
        older_posts = self.models['Post'].less_recent()
        return jsonify({ 'recent_posts' : recent_posts, 'older_posts' : older_posts })

    def index_html(self):
        recent_posts = self.models['Post'].most_recent()
        older_posts = self.models['Post'].less_recent()
        return self.load_view('/partials/posts.html', recent_posts = recent_posts, older_posts=older_posts)

    def create(self):
        print("create")
        new_post = request.form
        self.models['Post'].create(new_post)
        recent_posts = self.models['Post'].most_recent()
        older_posts = self.models['Post'].less_recent()
        return jsonify({ 'recent_posts' : recent_posts, 'older_posts' : older_posts })
