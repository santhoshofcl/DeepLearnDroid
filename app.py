from flask import Flask, render_template, jsonify, request
import processor

app = Flask(__name__)

@app.route('/', methods=["GET", "POST"])
def home():
    return render_template('home.html', **locals())

@app.route('/chat', methods=["GET", "POST"])
def index():
    return render_template('index.html', **locals())

@app.route('/quiz', methods=["GET", "POST"])
def quiz():
    return render_template('quiz.html',**locals())

@app.route('/contact', methods=["GET", "POST"])
def contact():
    return render_template('contact.html',**locals())

@app.route('/about', methods=["GET", "POST"])
def about():
    return render_template('about.html',**locals())

@app.route('/chatbot', methods=["GET", "POST"])
def chatbotResponse():
    if request.method == 'POST':
        the_question = request.form['question']
        response = processor.chatbot_response(the_question)
    return jsonify({"response": response })

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=False )
