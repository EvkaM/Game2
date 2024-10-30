const questions = [
    {
        questions:"1. Ինչպես կարելի է միացնել CSS-ը HTML-ի մեջ:",
        options:["<script> տեգի միջոցով","<style> տեգի միջոցով","<link> տեգի միջոցով","<meta> տեգի միջոցով"],
        answer:2
    },
    {
        questions:"2. Ինչ է DOM-ը:",
        options:["տվյալների կազմակերպման մոդել","HTML-ի կառուցվածքի ներկայացում","ոճավորման համակարգ","ծրագրավորման լեզու"],
        answer:1
    },
    {
        questions:"3. Ինչ է նշանակում background-image CSS-ում:",
        options:["տարրի ֆոնի գույն","պատկերի արտահայտություն","տարրի ֆոնի պատկերը","իմիջի փոխակերպում"],
        answer:2
    },
    {
        questions:"4. Ի՞նչ է HTML-ը",
        options:["ծրագրավորման լեզու","նշումային լեզու","ոճավորման լեզու","տվյալների բազա"],
        answer:1
    },
    {
        questions:"5. Ի՞նչ է CSS-ը:",
        options:["մուլտիմեդիա լեզու","ոճավորման լեզու","օպերացիոն համակարգ","ծրագրավորման լեզու"],
        answer:1
    },
    {
        questions:"6. Ի՞նչ է JavaScript-ը:",
        options:["տվյալների շտեմարան","վեբ էջերի ինտերակտիվություն ապահովող լեզու","օպերացիոն համակարգ","սերվերային կողմի լեզու"],
        answer:1
    },
    {
        questions:"7. Ինչ է <img> տեգը:",
        options:["տեքստի տեգ","պատկերներ ավելացնելու տեգ","հիպերլինքեր ավելացնելու տեգ","ձևերի տեգ"],
        answer:1
    },
    {
        questions:"8. Ինչ է margin-ը:",
        options:["տարրի գույն","տարրի շուրջը գտնվող տարածություն","ձևի ոճ","փաստաթղթի հոլովույթ"],
        answer:1
    },
    {
        questions:"9. Ի՞նչ է console.log():",
        options:["կոդի վերլուծիչ","տեղեկատվություն ցուցադրելու մեթոդ","սերվերի հետ կապի մեթոդ","տվյալների ստացմամբ զբաղվող գործիք"],
        answer:1
    },
    {
        questions:"10. Ինչպես կարելի է ստեղծել ձև JavaScript-ի միջոցով:",
        options:["<form>","<div>","<button>","<section>"],
        answer:0
    },
    {
        questions:"11. Ինչ է addEventListener() մեթոդը:",
        options:["տարրի գույնը փոխելու մեթոդ","տվյալների ստանալու մեթոդ"," օգտվողի գործողություններին արձագանքելու մեթոդ","DOM-ը փոխելու մեթոդ"],
        answer:2
    },
    {
        questions:"12. Ինչ է <table> տեգը:",
        options:["պատկերներ ցուցադրելու տեգ","տվյալների աղյուսակ ստեղծելու տեգ","հիպերլինքեր ավելացնելու տեգ","բեքգրաունդ պատկերների տեգ"],
        answer:1
    },
    {
        questions:"13. Ի՞նչ է opacity հատկությունը",
        options:["տարրի սահմանները","տարրի թափանցիկությունը","ֆոնի գույնը","տարրի դիրքը"],
        answer:1
    },
    {
        questions:"14. Ի՞նչ է var, let, և const:",
        options:["տարբեր ծրագրավորման լեզուներ","փոփոխականներ ստեղծելու բանաձևեր","ֆունկցիաներ","տվյալների տեսակներ"],
        answer:1
    },
    {
        questions:"15. Ինչ է this բանաձևը JavaScript-ում:",
        options:["Օբյեկտի անուն","Այդ պահին գործող օբյեկտը","Կոդի մի մասը","Ֆունկցիայի անուն"],
        answer:1
    },
    {
        questions:"16. Ո՞ր մեթոդն է JavaScript-ում զանգվածին նոր արժեք ավելացնում։",
        options:["push()","add()","append()","insert()"],
        answer:0
    },
    {
        questions:"17. Ո՞ր մեթոդն է օգտագործվում զանգվածում արժեքը ստանալու համար JavaScript-ում:",
        options:["get()","pop()","shift()","indexOf()"],
        answer:3
    },
    {
        questions:"18. Ի՞նչ է :hover սելեկտորը CSS-ում",
        options:["Վերևի դիրքում ցուցադրում","Մեր տարրի վրա մկնիկի կուրսորն է","Տարրի ցուցադրում","Տարրի կտրվածքը"],
        answer:1
    },
    {
        questions:"19. Ի՞նչ է JavaScript-ի -ը",
        options:["Տվյալների պահեստավորման մեթոդ","Մուտքագրում","Դանդաղեցված գործողություն","Ֆունկցիայի կազմակերպում"],
        answer:2
    },
    {
        questions:"20. Ի՞նչ է CSS-ի z-index հատկությունը",
        options:["Տարրի պատկերի չափը","Տարրի տեսքի կարգավորում","Տարրի տարածությունը","Տարրի շերտի կարգավորումը"],
        answer:3
    },
    {
        questions:"21. Ի՞նչ է -ի հատկանիշը",
        options:["Պիտակի տեսակ","Գոյություն չունեցող հատկանիշ","Նկարների այլընտրանքային տեքստ","Հաճախականություն"],
        answer:2
    }
]
    let currentQuestion = 0;
    let score = 0;

    function loadQuestion() {
        const questionContainer = document.getElementById('question');
        const optionsContainer = document.getElementById('options');
        const nextButton = document.getElementById('next')

        if(currentQuestion < questions.length) {
            const current = questions[currentQuestion];
            questionContainer.textContent = current.questions;
            optionsContainer.innerHTML = '';

            current.options.forEach((option,index) => {
                const button = document.createElement('button');
                button.textContent = option;
                button.onclick = () => checkAnswer(index,button);
                optionsContainer.appendChild(button)
            })
            nextButton.style.display = 'none';
        } else {
            showScore()
        }
    }

    function checkAnswer(selectedIndex, button) {
        const current = questions[currentQuestion];
        const optionsButtons = document.querySelectorAll('#options button');
        if(selectedIndex === current.answer){
            score++;
            button.style.backgroundColor = 'green';
        }else {
            button.style.backgroundColor = 'red'
            optionsButtons[current.answer].style.backgroundColor = 'green'
        }
        currentQuestion++;
        document.getElementById('next').style.display = 'block';
    }

    function showScore(){
        const questionContainer = document.getElementById('question');
        const optionsContainer = document.getElementById ('options');
        const nextButton = document.getElementById ('next');

        questionContainer.textContent = "Ավարտեցիք խաղը!";
        optionsContainer.innerHTML = '';
        document.getElementById('score').textContent = `Ձեր միավորները։ ${score} / ${questions.length}`;
        nextButton.style.display='none';
    };
    document.getElementById('next').onclick = () => {
        loadQuestion()
    };

    loadQuestion()

  