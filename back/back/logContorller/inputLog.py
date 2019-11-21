
#input

import os
import threading
import time

def thread_run():
	result = os.popen("tail -n 10 /var/log/syslog | egrep '(approach log : |sudo)'").read()
	result2 = os.popen('tail -n 5 /var/log/auth.log').read()
	print(result)
	print(result2)
	
	threading.Timer(10, thread_run).start()

def main():
	thread_run()


if __name__=="__main__":
	main()
