n = input('Digite um valor: ') 
print('Ele é um número?', n.isnumeric())
print('Ele é um alfabeto?', n.isalpha())
print('Ele tem letras e números?', n.isalnum())
print('Ele é apenas com letras maiusculas?', n.isupper())
print('Ele é apenas com letras minúsculas?', n.islower())
print('Qual é o tipo primitivo deste valor', type(n))
print('Ele é apenas espaços?', n.isspace())
print('Ela está capitalizada?', n.istitle()) #Perguntando se está com a primeira letra em maiúsculo.


