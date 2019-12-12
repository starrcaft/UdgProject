import os
import pyinotify


class MyEventHandler(pyinotify.ProcessEvent):
    def process_IN_MODIFY(self, event):
        if event.pathname == "/":
            #result = os.popen("tail -n 1 /var/log/syslog").read()
            result = os.popen("tail -n 1 test.text").read()
            print(result)

def inotify():
    print('hi')
    #wm = pyinotify.WatchManager()
    #wm.add_watch('test.text', pyinotify.ALL_EVENTS, rec=True)

    #eh = MyEventHandler()

    #notifier = pyinotify.Notifier(wm, eh)
    #notifier.loop()
