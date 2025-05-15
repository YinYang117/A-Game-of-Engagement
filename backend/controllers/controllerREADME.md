This file is to seperate out the buiseness logic of what a route does, from the http verb and path logic of routing.
In a simple application this might seem like extra work with no benifit but it's good practice.
Also, controller functions can be reused, and it's easier to change db logic and stuff from here instead of having everything in a routes folder with all the logic in there.