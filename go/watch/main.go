/* watch directory
* for incoming message monitor
 */

package main

import (
	"encoding/json"
	"fmt"
	"time"
	"github.com/fsnotify/fsnotify"
	"github.com/garyburd/redigo/redis"
	"log"
	"os"
)

type Configuration struct {
	Dirs   []string
	Users  []string
	Groups []string
}

func main() {

	file, _ := os.Open("conf.json")
	decoder := json.NewDecoder(file)
	configuration := Configuration{}
	err := decoder.Decode(&configuration)
	if err != nil {
		fmt.Println("error:", err)
	}
	fmt.Println(configuration.Groups[0]) // output: [UserA, UserB]
	//--------------
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		log.Fatal(err)
	}
	
	c, err := redis.DialTimeout("tcp", "localhost:6379", 0, 1*time.Second, 1*time.Second)

	if err != nil {
		fmt.Println(err)
		return
	}
	defer c.Close()
	
	n, err := c.Do("DBSIZE")
	if err != nil {
	fmt.Println(err)
		return
	}
	log.Println(n)

	c.Do("SET", "mabo", "sys")
	v, err := redis.String( c.Do("GET", "mabo") )
	
	log.Println(v)

	done := make(chan bool)

	// Process events
	go func() {
		for {
			select {
			case ev := <-watcher.Events:
				log.Println("event:", ev)
			case err := <-watcher.Errors:
				log.Println("error:", err)
			}
		}
	}()

	err = watcher.Add(configuration.Dirs[0])

	if err != nil {
		log.Fatal(err)
	}

	<-done

	/* ... do stuff ... */
	watcher.Close()
}
