```python
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, NumberRange

class TimerForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    duration = IntegerField('Duration', validators=[DataRequired(), NumberRange(min=1)])
    submit = SubmitField('Add Timer')
```