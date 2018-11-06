import pandas as pd
import copy
import numpy as np
def analyze():
	df1=pd.read_csv("https://ceiba.ntu.edu.tw/course/4671ea/content/keller2017.csv")
	df1=df1[["cond","expansiveness_1","expansiveness_2","expansiveness_3","expansiveness_4","performance_1","performance_2","performance_3","performance_4","hire_1","hire_2","hire_3","hire_4"]]
	df1=df1.dropna()
	df2=copy.copy(df1)
	df2["expansiveness"]=df2[["expansiveness_1","expansiveness_2","expansiveness_3","expansiveness_4"]].mean(axis=1)
	df2['performance']=df2[['performance_1','performance_2','performance_3','performance_4']].mean(axis=1)
	df2['hire']=df2[['hire_1','hire_2','hire_3','hire_4']].mean(axis=1)
	df2=df2.drop(['expansiveness_1','expansiveness_2','expansiveness_3','expansiveness_4','hire_1','hire_2','hire_3','hire_4',		'performance_1','performance_2','performance_3','performance_4'],axis=1)
	df3=copy.copy(df2)
	df3=df3.groupby('cond').agg({'performance':np.mean,'expansiveness':np.mean,'hire':np.mean})
	return ([df1,df2,df3])
[df1,df2,df3]=analyze()
#print(df1)
print(df1.shape,df2.shape)
#print(df3)
#print(df)
#print(df.shape)
#print (df2)
#print (df2.shape)
print (df3)
#print (df2.dtypes)
#print (df3.shape)
