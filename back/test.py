import os
import sys
from threading import Thread
from inotify import inotify

if __name__ == "__main__":
    th1= Thread(target=inotify.inotify, args=())
    th1.start()
