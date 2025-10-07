lenght1 = 5 
width1 = 3
area1 = lenght1 * width1 
print(f"Площадь комнаты 1 (area1)")

lenght2 = 7
width2 = 4 
area2 = lenght2 * width2
print(f"Площадь комнаты 2 (area2)")

def great():
    print("Привет, это моя первая функция")

great("Oleg")
great("Sanek")
great("Nikitos")

def introduce(name, age, city):
    print(f"меня зовут {name}, мне {age} лет, я живу в City: {city}")
    introduce("oleg", 42, "Megalodon")

def calculate_area(length, width):
    area = length * width
    return area 

room_area = calculate_area(5, 3)
print(f"площадь комнаты: (room_area)")

def isAdult(age):
    if age >= 18:
        return True
    else:
        return False

if isAdult(50):
    print("Доступ разрешен")
else: 
    print("Катись отсюда малой")


radius = int(input("Введите радиус круга"))

def circle_area(radius):
    area = 3.14 * radius**2
    return area
circle = circle_area(radius)
print(f"площадь круга: {circle}")
a = int(input("Ветите первое число"))
b = int(input("Ветите второе число"))
c = int(input("Ветите третье число"))
def max_of_three(a,b,c):
    max = 0
    if a > max:
        max = a
    if b > max:
        max = b
    if c > max:
        max = c
    return max
maximum = max_of_three(a,b,c)
print(f"Максимальное число: {maximum}")