from flask import Flask,render_template

app=Flask(__name__)

@app.route('/')
def hello_world():
    #return '<h1>hello,world</h1>'
    #username = 'henry'
    #nav_list=['home','page1','page2']
    #blog={'title':'blogTitle','content':'blogContent'}
    #img=url_for('static',filename='pic.png')
    return render_template('index.html')

if __name__ == '__main__':
    #app.debug=True
    app.run(host='0.0.0.0')
