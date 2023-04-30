# mindfully by Fullys Dev
Mindfully mind mapping

Mindamapping using LocalStorage and encoded offline storage. All data stays local to your machine and you can either CTRL-S (SAVE) the file as a snapshot to send to someone or export to file and it is base64 encoded and stored in a file for later import. This saves signifcant size in terms of html vs saving as an export of JSON format.
All code is HTML 5, CSS, Javascript. No models or 3rd party code.

Browser Local Storage - [CTRL - SHIFT - I] to load development DEVTools. Then go to Application Menu and choose Local Storage. You will see all the Mindfully mindmaps stored as strings in an object.

They are persistant as long as you dont clear the cache. Even if you close the browser the mindmaps will persist. So if you need to clear teh cache in the browser, do an EXPORT to file so that you backup the mindmap for later IMPORT into Local Storage.

Getting started:

- load ragalluf.online
- choose if you want realtime version control / backups (every change is exported to a JSON file.) - press cancel if not required (probably only required for critical data)
- CREATE new to Local Storage if its a new Mindmap - give it a name and choose a version.
- CREATE PARENT Node as the starting point of the mindmap.
- Move it or [RIGHT Click] on the node to chosse and create a Child Node(s)
- Add text to node and click outside of node to save text.

- IF you already have a mindmap, then LOAD from Local Storage and choose the one listed on the line of listed Mindmaps.

Feedback welcome. Donations welcome to keep developing and make a commercial product.

The great thing about this is all data and personal info is never uploaded to the server. ONly the framework to create minmaps is leveraged. You can store the filename.json files on Onedrive, Google, box etc and they are yours. No one else has access to the data.

Enjoy!
