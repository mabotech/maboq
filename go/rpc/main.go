package main

import (
"net/rpc/jsonrpc"
"fmt"
"log"
)


func main(){


fmt.Println("hi")

 client, err := jsonrpc.Dial("tcp", "127.0.0.1:6226")
    if err != nil {
        log.Fatal("dialing:", err)
    }


}