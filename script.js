//const response = await fetch('https://newsapi.org/v2/top-headlines?country=au&apiKey=b65d3024e7fe4bd7a734a518e6a4bc10&category=sports&pageSize=3')
//const myJson=await response.json();

( async function(){
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=au&apiKey=0dea0679ffc24694a6ac8eadd9b0bb86&category=sports&pageSize=10')
    const myJson=await response.json();

    const articles = myJson.articles;

    articles.forEach(item => {
        var container = document.getElementById('articles-container').insertAdjacentHTML('beforeend',`
        
        <div class="column is-half-tablet is-half-desktop">
            <article class="message">
                <div class="message-header">
                  <a href="${item.url}" target="_blank">${item.title}</a>
                  <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                  ${item.content}
                </div>
            </article>
        </div>

        `)
    });

//    console.log(myJson.articles);

//问题：await；fetch；.json；forEach；item；insertAdjacentHTML；beforeend；${}都是啥函数；
//问题：其他的增删改查函数都是什么
}());