import os
import webapp2
import jinja2

template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir),
                               autoescape = True)

def render_str(template, **params):
        t = jinja_env.get_template(template)
        return t.render(params)

class Handler(webapp2.RequestHandler):
    def render(self, template, **kw):
        self.response.write(render_str(template, **kw))

    def write(self, *a, **kw):
        self.response.write(*a, **kw)

class Home(Handler):
    def get(self):
        self.render('landing_page.html')

class Register(Handler):
    def get(self):
        self.render('register_page.html')

app = webapp2.WSGIApplication([('/', Home),
                               ('/register', Register) 
], debug=True)
