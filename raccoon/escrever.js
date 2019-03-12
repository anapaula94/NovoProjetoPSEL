var database = data;

File.WriteAllText("revised-database.json", database.ToString());


using (StreamWriter file = File.CreateText("revised-database.json"))
using (JsonTextWriter writer = new JsonTextWriter(file))
{
    database.WriteTo(writer);
}


