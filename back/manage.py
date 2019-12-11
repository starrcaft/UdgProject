#!/usr/bin/env python
import os
import sys
from threading import Thread
from inotify import inotify


if __name__ == "__main__":
    th1 = Thread(target=inotify.inotify, args=())
    th1.start()
    print("Thread start")
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "back.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


