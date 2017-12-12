import os
import webapp2
import jinja2

from google.appengine.ext import db

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

class User(db.Model):
    name = db.StringProperty(required = True)
    organization = db.StringProperty(required = False)
    email = db.StringProperty(required = True)
    telephone = db.StringProperty(required = False)
    created = db.DateTimeProperty(auto_now_add = True)

class Home(Handler):
    def get(self):
        self.render('landing_page.html')

class Register(Handler):
    def get(self):
        self.render('register_page.html')

    def post(self):
        name = self.request.get("name")
        organization = self.request.get("organization")
        email = self.request.get("email")
        telephone = self.request.get("telephone")

        if name and email:
            user = User(name = name, organization = organization, email = email, telephone = telephone)
            user.put()
            self.render('register_page_send.html')
        else:
            self.render('register_page.html', name = name, organization = organization, email = email, telephone = telephone)


app = webapp2.WSGIApplication([('/', Home),
                               ('/register', Register) 
], debug=True)
