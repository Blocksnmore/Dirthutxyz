---
description: A /setspawn and /spawn command for your server.
---

# Spawn

So, first you need to create the file. Lets name it `spawn.sk`. Once having the file created, enter it. Once entered input this skript:

```vb
command /spawn:
    permission: spawn.use
    trigger:
        send "&6Teleportingâ€¦" to player
        wait 5 ticks
        teleport player to {spawn}
```

Once you have that done, we need the `/setspawn` part. Once done with that, in the same file, type the following skript:

```vb
command /setspawn:
    permission: spawn.set
    trigger:
        set {spawn} to player's location
        send "&6Successfully set spawn to your location." to player
```

That should do it. You now have a `/spawn` and `/setspawn` skript! Make sure to reload the file after your finished!
