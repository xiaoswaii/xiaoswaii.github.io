from psychopy import core,visual,event
import socket,pickle

code='utf-8'
c=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
c.connect(('hpc.psy.ntu.edu.tw', 1234))

c.sendall('b05106028'.encode(code)) # Change your ID here!
print(c.recv(9).decode(code)) # Should show your ID!

w=visual.Window(size=[800,400])
for t in range(8):
  sz=int(c.recv(2).decode(code))# size
  word=pickle.loads(c.recv(sz))
  print(word)
  wordd=word.get("text")
  color=word.get("color")
  visual.TextStim(w,text=wordd,color=color).draw()
  w.flip()
  r=event.waitKeys(keyList=['r','g','b','y'],timeStamped=core.Clock())
  c.sendall(pickle.dumps(r[0]))

print(c.recv(5).decode(code)) # 3 points for passing