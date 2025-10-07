book = {
    "title": "1984",
    "author": "Джордж Оруэлл",
    "year": "1984",
    "ganre": "Антиутопия"
}

player = {
    "name": "Oleg52",
    "age": 52,
    "city": 18,
    "IsAlive": True
}

simple = {
    1: "Odin",
    2: "Dva"
}

print(player["name"])

print(player.get("city"))
print(player.get("class", "не найден"))

player["damage"] = 25.4

player["class"] = "Маг"

print(player)

if "name" in player:
    print("Ключ name существует")

if "HP" not in player:
    print("Ключ HP не найден")

    removed_value = player.pop("city")

    last_item = player.popitem()
    print("Удалили последнюю пару: ", last_item)

    print(player.keys())
    print(player.values())
    print(player.items())

    for key in player.keys():
        print(key)

        for value in player.values():
            print(value)
        
for key, value in player.items():
    print(f"Ключ {key}, Значение: {value}")
    
    students = [
        {"name": "Никитос", "age": 14 "grades": [5,4,3,2,1,4]}
        {"name": "Антон", "age": wda16 "grades": [5,4,5,5,5,4]}
        {"name": "Витя", "age": 9 "grades": [3,3,3,4,5,4]}
    ]

print(students[0]["age"])
print(students[1]["name"])

for student in students:
    print(student["name"])

