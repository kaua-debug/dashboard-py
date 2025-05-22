from flask import Flask, render_template, request, redirect
import json
import os

app = Flask(__name__)
DATA_FILE = 'data/registros.json'

@app.route('/')
def dashboard():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE) as f:
            registros = json.load(f)
    else:
        registros = []
    return render_template('dashboard.html', registros=registros)

@app.route('/adicionar', methods=['POST'])
def adicionar():
    nova_entrada = {
        'materia': request.form['materia'],
        'horas': float(request.form['horas']),
        'data': request.form['data']
    }

    if os.path.exists(DATA_FILE):
        with open(DATA_FILE) as f:
            registros = json.load(f)
    else:
        registros = []

    registros.append(nova_entrada)

    with open(DATA_FILE, 'w') as f:
        json.dump(registros, f, indent=4)

    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
