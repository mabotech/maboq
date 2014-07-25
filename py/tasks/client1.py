from t1 import add, hello

result =  add.delay(4, 4)

print result.backend

result =  add(4, 4)

print result

print hello.delay()