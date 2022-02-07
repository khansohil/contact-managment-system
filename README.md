# contact-managment-system

Add/Find/Update/Delete Contacts

- `show dbs` - lists all database present
- `use <dbs>` - to logging to required database
- `use test` - create new database, test is a schema underwhich we can create new collections.
- `db` - to list the current working database
- `show collections` - shows the list of collections
- `db.createCollection("<name>")` - creates collection with given name
- Collection = Table; Document = Rows
- `db.<collection>.insert([{key1: value1, key2:value2}]);` - creates new collection if not existing, and inserted the given documents in that collection
- `db.<collection>.find()` - lists all documents in collection
- `db.<collection>.find().pretty()` - lists documents but in an organized way.