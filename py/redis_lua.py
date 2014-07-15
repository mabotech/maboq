import redis


r = redis.Redis(host='localhost', port=6379, db=0)  


code = """if redis.call("EXISTS", KEYS[1]) == 1 then

local payload = redis.call("GET", KEYS[1])

return payload 

else

redis.call("SET", KEYS[1],"xxx")
return nil

end"""
v = r.eval(code, 2, "aas","aaa")

print v