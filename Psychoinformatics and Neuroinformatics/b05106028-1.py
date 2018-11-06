# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""
import time,random
def measure():
    for i in range (3):
        print("Get ready...",flush=True) 
        time.sleep(10*random.uniform(0.5,1))
        t0=time.time()
        input("Press [Enter] now!") 
        t1=time.time()-t0
        print(t1)
        if i==0:
            t2=t1
        else:
            t2+=t1
    return (t2/3)

print (measure())




    
