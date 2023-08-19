```python
from flask import Flask, render_template, request, redirect, url_for
from timer_app import app
from timer_app.models import Timer
from timer_app.forms import TimerForm

@app.route('/', methods=['GET', 'POST'])
def index():
    form = TimerForm()
    if form.validate_on_submit():
        new_timer = Timer(title=form.title.data, duration=form.duration.data)
        new_timer.save()
        return redirect(url_for('index'))
    timers = Timer.get_all()
    return render_template('index.html', form=form, timers=timers)

@app.route('/start', methods=['POST'])
def start_timer_series():
    timer_list = request.get_json()
    for timer in timer_list:
        Timer.start(timer)
    return 'Timer series started', 200

@app.route('/pause', methods=['POST'])
def pause_timer():
    timer_id = request.get_json()
    Timer.pause(timer_id)
    return 'Timer paused', 200

@app.route('/resume', methods=['POST'])
def resume_timer():
    timer_id = request.get_json()
    Timer.resume(timer_id)
    return 'Timer resumed', 200

@app.route('/complete', methods=['POST'])
def timer_complete():
    timer_id = request.get_json()
    Timer.complete(timer_id)
    return 'Timer completed', 200
```