## Interactive Card

```
  Esse projeto foi realizado para estudo do hook useContext, para comunicação global de estados da aplicação! 
```

![image](https://github.com/gransottodev/interactive-card/assets/101595139/32215c74-b24c-4ebf-9202-f0727773c765)

Cada elemento dentro dessa página é um componente independete e por isso a comunicação via "props" é muito dificultada, por isso
o hook useContext nos ajuda a compartilhar informações entre todos os componentes de foma simplificada, assim posso ter o meu formulário
em um componente isolado dos cards, mas mesmo assim compartilhar os estados, fazendo com que o código fique melhor distribuído sem
interferir no funcionamento da aplicação.

![image](https://github.com/gransottodev/interactive-card/assets/101595139/dd2172dd-7c10-4ba8-8f14-c4da0117b2cc)

O ContextAPI é uma das principais formas de resgatar dados do globais em aplicações React.
É um projeto muito simples, mas me ajudou a compreender o funcionamento desse Hook.

### Exportando Context.
![image](https://github.com/gransottodev/interactive-card/assets/101595139/9a42ed56-9b33-439a-a6b9-4dfe7d061e66)

```
Aqui consegui exportar todas os estados globalmente para a aplicação, restando somente fazer a requisição dentro
dos componentes que serão utilizados
```

### Consumindo

![image](https://github.com/gransottodev/interactive-card/assets/101595139/fef88bf3-dfae-4274-b678-dc89ea84cbb4)


### Tecnologias utilizadas:
1. NextJS
2. ContextAPI
