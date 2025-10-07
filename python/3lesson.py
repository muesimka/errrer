empty_list = []

fruits = ["apple", "banana", "dikiy ogurec"]

mixed_list = [1, "hello", 3.14, True]

numbers = list([1,2,3,4,5,6])

print(fruits[2])

print(fruits[-1])

print(fruits)

fruits.append("sliva")

print(fruits)   

fruits.insert(1, "ananas")

print(fruits)

name = ["Gena", "Gosha", "Grisha", "Anton", "Anatoliy", "Foma", "Misha", "Vlad", "Arsen", "Valik"]

print(name)

name.insert(1, "Oleg")

print(name)

name.insert(3, "Oleg")

print(name)

name.insert(9, "Oleg")

print(name)

name.append("Innokendiy")

print(name)

name.remove("Foma")

print(name)

pop_res = name.pop(-2)

print("Ubit: ", pop_res)

print(name)

numbers = [0,1,2,3,4,5,6,7,8,9]

print(numbers[2:5])

print(numbers[:5])

print(numbers[5:])

print(numbers[::2])

print(numbers[::-1])

print(numbers[7:2:-1])

for fruit in fruits:
    print("I love: ", fruit)

    list_length = len(fruits)
    print(list_length)

    for i in range(len(fruits)):
        print("Элемент под индексом: ", i, "-это", fruits[i])

        prices = [100, 200, 300, 50]

        total = 0

        for price in prices:
            total = total + prices[i]

print("сумма всех цен кириешек: ", total)

temp


list = []

for i in range(7):
    temp = int(input("ВВедите числа: "))
    list.append(temp)
