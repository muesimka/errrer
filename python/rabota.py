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