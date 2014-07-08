

import time

import gevent


def main():
    
    while True:
        
        print(int(time.time()))
        gevent.sleep(2) #SystemError: (libev) select: Unknown error
  
    
if __name__ == "__main__":
    main()