function carrrossel () {

    // ITENS DO CARROSSEL
    const itens = [
        {
            image: 'https://picsum.photos/200',
            category: 'Webinar 1',
            thinline: 'Lorem Ipsum dolor sit amet',
            maintitle: 'Incluídos em sua associação',
            text: 'Pleasure to use so that so-called “iPad killer”, in conclusion Android is fragmented, but while Jony Ive’s incredible design, for this reason Steve Jobs was a genius.',
            link: 'http://foo.cm'
        },
        {
            image: 'https://picsum.photos/200',
            category: 'Outra Categoria 2',
            thinline: 'Trollem ipsum',
            maintitle: 'Having trouble finding the right words? Let trollem ipsum help you out!',
            text: 'CrackBerry, immediately delay in getting Ice Cream Sandwich I would say that Flash sucks, moreover awful user experience, when profit owing to Apple will only get better.',
            link: 'http://foo2.cm'
        },
        {
            image: 'https://picsum.photos/200',
            category: 'Links 3',
            thinline: 'User experience sucks while best design, first profit.',
            maintitle: 'Android geek why Flash sucks eventually so-called “iPad killer”',
            text: 'Gorgeous, as well as battery life but also MacBook Air is just beautiful however Steve Jobs was a genius, especially awful user experience overall genius, owing to Android is fragmented.',
            link: 'http://lipsum.com'
        }
    ];

    // SETUP DO CARROSSEL
    const itensSpecs = {
        width: 100,
        marginLeft: 0
    }

    // O ITEM QUE ESTA SENDO EXIBIDO
    let activeItem = 0;


    // CRIA OS BOTOES DE NAVEGACAO
    let dots = document.createElement('div');
    dots.classList.add('dots')

    let nextBtn = document.createElement('button');
    let nextTxt = document.createTextNode('Próximo');

    let prevBtn = document.createElement('button');
    let prevTxt = document.createTextNode('Anterior');

    nextBtn.appendChild(nextTxt);
    prevBtn.appendChild(prevTxt);

    nextBtn.classList.add('btnNext');
    prevBtn.classList.add('btnPrev');

    document.querySelector('.carrossel').appendChild(nextBtn);
    document.querySelector('.carrossel').appendChild(prevBtn);
    document.querySelector('.carrossel').appendChild(dots);


    // MONTA A LISTA DE ITENS DO CARROSSEL
    itens.forEach(function(item){
        document.querySelector('.carrossel__stage').innerHTML += `<li style="width:${itensSpecs.width}vw">
            <div class="img>
                <a href="${item.link}">
                    <img src="${item.image}" alt="${item.maintitle}">
                </a>
            </div>
            <div class="content">
                <span class="category">
                    ${item.category}
                </span>
                <p class="thinline">
                    ${item.thinline}
                </p>
                <a href="${item.link}">
                    <h3>${item.maintitle}</h3>
                </a>
                <a href="${item.link}">
                    <p>${item.text}</p>
                </a>
            </div>
        </li>`;

        // CRIA OS DOTS CLICAVEIS COM SEUS VALORES E INDEXES
        dots.innerHTML += `<span class="dot d${itens.indexOf(item)}">${itens.indexOf(item)}</span>`;
    })

    // GUARDA OS DOTS NUMA VARIAVEL
    const allDots = document.querySelectorAll('.dot');

    // APLICA A LARGURA DO STAGE DE ACORDO COM O NUMERO DE ITENS DO CARROSSEL
    document.querySelector('.carrossel__stage').style.width = itensSpecs.width * itens.length + 'vw'  
    allDots.forEach(function(dot) {
        dot.addEventListener('click', function (){
            let v = parseInt(dot.innerHTML)
            itensSpecs.marginLeft = v * itensSpecs.width
            applyMargin()
        })
    })
    
    
    // ACOES NOS BOTOES DE NAVEGACAO
    nextBtn.addEventListener('click', function(){
        if (itensSpecs.marginLeft >= 0 && itensSpecs.marginLeft < itens.length * itensSpecs.width - 100) {
            itensSpecs.marginLeft = itensSpecs.marginLeft + itensSpecs.width
        } else {
            itensSpecs.marginLeft = 0;
        }
        applyMargin()
    })

    prevBtn.addEventListener('click', function () {
        if (itensSpecs.marginLeft > 0) {
            itensSpecs.marginLeft = itensSpecs.marginLeft - itensSpecs.width;
        } else {
            itensSpecs.marginLeft = itensSpecs.marginLeft + (itens.length * itensSpecs.width) - itensSpecs.width;
        }
        applyMargin()
    })

    // APLICA O MOVIMENTO NA NAVEGACAO
    applyMargin = function() {
        document.querySelector('.carrossel__stage').style.marginLeft = itensSpecs.marginLeft * -1 + 'vw';        
        activeItem = itensSpecs.marginLeft / itensSpecs.width;

        allDots.forEach(function(dot) {
            dot.classList.remove('on')
        });

        document.querySelector(`.d${activeItem}`).classList.add('on')       

    }

    applyMargin()
}

carrrossel();
