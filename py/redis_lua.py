"""

redis lua

"""
import time

import redis



def main():
    # connection pool
    r = redis.Redis(host='localhost', port=6379, db=0)  

    """
    compare value 
    update value when change
    create job to update db when value change
    set heartbeat pre tag
    """

    lua_code = """if redis.call("EXISTS", KEYS[1]) == 1 then
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

    #benchmark
    """
    0.22 ms
    4545 times/second
    """
    t1 = time.time()
    n = 10
    for i in xrange(1, n):
        v = r.eval(lua_code, 1, "aac","xyz")

    t2 = time.time()

    t =  (t2-t1)*1000/n

    print(t)
    print(1000/t)
    print(v)
    
    h = r.script_load("return 'hello moto'")
    print h
    print dir(r)
    
if __name__ == "__main__":
    main()