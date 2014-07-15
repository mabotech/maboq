import redis


r = redis.Redis(host='localhost', port=6379, db=0)  


code = """if redis.call("EXISTS", KEYS[1]) == 1 then

local payload = redis.call("GET", KEYS[1])

if payload == ARGV[1] then

return "same"  

else

redis.call("SET", KEYS[1],ARGV[1])

return payload

end

else

redis.call("SET", KEYS[1],ARGV[1])
return nil

end"""
v = r.eval(code, 1, "aac","xyz")

print v