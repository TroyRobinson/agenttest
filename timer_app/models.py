```python
class Timer:
    def __init__(self, title, duration):
        self.title = title
        self.duration = duration
        self.is_complete = False

    def complete(self):
        self.is_complete = True

    def reset(self):
        self.is_complete = False
```