

const dumb = [
    {
        "productor": "김 민지",
        "title": "웃는 여인",
        "introduce": "어머니의 웃는 모습을 모티브로 그린 그림입니다.",
        "img": "http://www.safetimes.co.kr/news/photo/201512/1430_436_5628.jpg"
    },
    {
        "productor": "박 윤수",
        "title": "헤매는 밤",
        "introduce": "어두운 밤을 헤매는 사람을 그린 그림",
        "img": "https://i.pinimg.com/564x/66/79/19/6679197f96ee70fdb17e43131a84d954.jpg"
    },
    {
        "productor": "박 봉춘",
        "title": "엎드린 아이",
        "introduce": "지난 힘들던 사회를 생각하며 그린 그림",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_KJhHCtvygpSgTd7X4l74mWPOnt-iHfNqQ&usqp=CAU"
    },
    {
        "productor": "이 준호",
        "title": "밤의 별",
        "introduce": "아무도 없는 어두움 밤에 그린 밤하늘의 별",
        "img": "https://www.krpia.co.kr/public-img/content/thum/286003/PLCT00005699.png"
    },
    {
        "productor": "하 윤수",
        "title": "잊혀진 도시",
        "introduce": "잊혀진 고대 도시의 풍경을 보며 그린 풍경화",
        "img": "https://cdn.mygoyang.com/news/photo/201511/38310_29712_510.jpg"
    },
    {
        "productor": "김 민지",
        "title": "웃는 여인",
        "introduce": "어머니의 웃는 모습을 모티브로 그린 그림입니다.",
        "img": "http://www.safetimes.co.kr/news/photo/201512/1430_436_5628.jpg"
    },
    {
        "productor": "박 윤수",
        "title": "헤매는 밤",
        "introduce": "어두운 밤을 헤매는 사람을 그린 그림",
        "img": "https://i.pinimg.com/564x/66/79/19/6679197f96ee70fdb17e43131a84d954.jpg"
    },
    {
        "productor": "박 봉춘",
        "title": "엎드린 아이",
        "introduce": "지난 힘들던 사회를 생각하며 그린 그림",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_KJhHCtvygpSgTd7X4l74mWPOnt-iHfNqQ&usqp=CAU"
    },
    {
        "productor": "이 준호",
        "title": "밤의 별",
        "introduce": "아무도 없는 어두움 밤에 그린 밤하늘의 별",
        "img": "https://www.krpia.co.kr/public-img/content/thum/286003/PLCT00005699.png"
    },
    {
        "productor": "하 윤수",
        "title": "잊혀진 도시",
        "introduce": "잊혀진 고대 도시의 풍경을 보며 그린 풍경화",
        "img": "https://cdn.mygoyang.com/news/photo/201511/38310_29712_510.jpg"
    }
]

function requestList(){
    dumb.forEach(function(n){
        var articleList = document.getElementById("article-list")
        var articleCard = document.createElement('article')
        var articleImg = document.createElement('img')
        var articleContent = document.createElement('div')
        var articleContentProductor = document.createElement('p')
        var articleContentTitle = document.createElement('p')
        var articleContentIntroduce = document.createElement('p')
        var detailButton = document.createElement('button')

        articleCard.className = "article-card"
        articleImg.className = "article-img"
        articleContent.className = "article-contents"
        articleContentProductor.className = "article-productor"
        articleContentTitle.className = "article-title"
        articleContentIntroduce.className = "article-introduce"
        detailButton.className = "article-detail-button"

        articleImg.src = n["img"];
        articleCard.appendChild(articleImg);
        articleContentProductor.textContent = n["productor"];
        articleContentTitle.textContent = n["title"];
        articleContentIntroduce.textContent = n["introduce"];
        detailButton.textContent = "상세보기"
        articleContent.appendChild(articleContentProductor);
        articleContent.appendChild(articleContentTitle);
        articleContent.appendChild(articleContentIntroduce);
        articleContent.appendChild(detailButton);
        articleCard.appendChild(articleContent);
        articleList.appendChild(articleCard);
    });
}

requestList();
