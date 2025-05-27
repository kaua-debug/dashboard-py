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

    registros.sort(key=lambda r: r['data'], reverse=True)


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

@app.route('/remover', methods=['POST'])
def remover():
    materia = request.form['materia']
    data = request.form['data']

    if os.path.exists(DATA_FILE):
        with open(DATA_FILE) as f:
            registros = json.load(f)
    else:
        registros = []

    # Remove o registro com mesma matéria e data
    registros = [r for r in registros if not (r['materia'] == materia and r['data'] == data)]

    with open(DATA_FILE, 'w') as f:
        json.dump(registros, f, indent=4)

    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
