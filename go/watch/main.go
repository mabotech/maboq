/* watch directory
* for incoming message monitor
 */

package main

import (
	"encoding/json"
	"fmt"
	"github.com/howeyc/fsnotify"
	"log"
	"os"
)

type Configuration struct {
	Dirs []string
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

	done := make(chan bool)

	// Process events
	go func() {
		for {
			select {
			case ev := <-watcher.Event:
				log.Println("event:", ev)
			case err := <-watcher.Error:
				log.Println("error:", err)
			}
		}
	}()

	err = watcher.Watch(configuration.Dirs[0])
	
	if err != nil {
		log.Fatal(err)
	}

	<-done

	/* ... do stuff ... */
	watcher.Close()
}
