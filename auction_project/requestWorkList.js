var link = document.location.href;
var param = link.split("?");


function requestList(){
    if(param.length == 1){
        var dumb = [
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
                "img": "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/gdA/image/nkKa3t7hqZuzo9hmRz9aS0mKE84"
            },
            {
                "productor": "김 민지",
                "title": "웃는 여인",
                "introduce": "어머니의 웃는 모습을 모티브로 그린 그림입니다.",
                "img": "https://images.otwojob.com/product/X/O/B/XOBLxia1ptduwcM.jpg/o2j/resize/852x622%3E"
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
            }
        ]
    }else{
        var value = param[1].split("=");
        if(value[1] == "oriental"){
            var dumb = [
                {
                    "productor": "김 민지",
                    "title": "웃는 여인",
                    "introduce": "어머니의 웃는 모습을 모티브로 그린 그림입니다.",
                    "img": "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/gdA/image/nkKa3t7hqZuzo9hmRz9aS0mKE84"
                },
                {
                    "productor": "김 민지",
                    "title": "웃는 여인",
                    "introduce": "어머니의 웃는 모습을 모티브로 그린 그림입니다.",
                    "img": "https://images.otwojob.com/product/X/O/B/XOBLxia1ptduwcM.jpg/o2j/resize/852x622%3E"
                },
                {
                    "productor": "김 민지",
                    "title": "웃는 여인",
                    "introduce": "어머니의 웃는 모습을 모티브로 그린 그림입니다.",
                    "img": "https://i.pinimg.com/originals/f5/2a/a1/f52aa1ab60afe7390e0c552871b5af1e.jpg"
                },
                {
                    "productor": "김 민지",
                    "title": "웃는 여인",
                    "introduce": "어머니의 웃는 모습을 모티브로 그린 그림입니다.",
                    "img": "https://newsimg.sedaily.com/2019/07/18/1VLQPNBJ0Q_1.jpg"
                },
                {
                    "productor": "김 민지",
                    "title": "웃는 여인",
                    "introduce": "어머니의 웃는 모습을 모티브로 그린 그림입니다.",
                    "img": "https://t1.daumcdn.net/cfile/blog/210432505182F73E11"
                }
            ]
        }else if(value[1] == "western"){
            var dumb = [
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
        }else if(value[1] == "contemporary"){
            var dumb = [
                {
                    "productor": "김 민지",
                    "title": "웃는 여인",
                    "introduce": "어머니의 웃는 모습을 모티브로 그린 그림입니다.",
                    "img": "https://file.mk.co.kr/meet/neds/2017/09/image_readmed_2017_601694_15047650883020840.jpg"
                },
                {
                    "productor": "박 윤수",
                    "title": "헤매는 밤",
                    "introduce": "어두운 밤을 헤매는 사람을 그린 그림",
                    "img": "https://og-data.s3.amazonaws.com/media/exhibitions/image/1619/ei_1619.jpg"
                },
                {
                    "productor": "박 봉춘",
                    "title": "엎드린 아이",
                    "introduce": "지난 힘들던 사회를 생각하며 그린 그림",
                    "img": "https://t2.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/3Vz6/image/3Eoq6FzqQApBuS-2O06lIsrxDC8.jpg"
                },
                {
                    "productor": "이 준호",
                    "title": "밤의 별",
                    "introduce": "아무도 없는 어두움 밤에 그린 밤하늘의 별",
                    "img": "https://newsimg.hankookilbo.com/cms/articlerelease/2014/08/31/201408311875278951_1.jpg"
                },
                {
                    "productor": "하 윤수",
                    "title": "잊혀진 도시",
                    "introduce": "잊혀진 고대 도시의 풍경을 보며 그린 풍경화",
                    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDoEpqXMoLOuhPY9uAJ_6WvMMrlAtAfsV2Qw&usqp=CAU"
                },
                {
                    "productor": "박 봉춘",
                    "title": "엎드린 아이",
                    "introduce": "지난 힘들던 사회를 생각하며 그린 그림",
                    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsSmyIlYJmy4h5StMsZMebpO5XxYE-H2t8rg&usqp=CAU"
                }
            ]
        }
        else if(value[1] == "statue"){
            var dumb = [
                {
                    "productor": "김 주용",
                    "title": "유리 왕자",
                    "introduce": "그리스 시대의 남성을 유리로 조각내었다.",
                    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlu_chSewg_XQnPnibYYuvvvGfjqLTwwcJ1Q&usqp=CAU"
                },
                {
                    "productor": "홍 주용",
                    "title": "말의 기운",
                    "introduce": "강인한 말의 기운을 표현한 나무 조각상",
                    "img": "http://artgallery1004.co.kr/web/product/big/201806/10947_shop1_15293204918834.jpg"
                },
                {
                    "productor": "김 지우",
                    "title": "웃는 소년",
                    "introduce": "대두의 웃는 소년의 조각상",
                    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhZAxe4fcjBc-Mf3mVjgWFMsSaBNEzzX8SQ&usqp=CAU"
                },
                {
                    "productor": "최 지영",
                    "title": "웃는 여인",
                    "introduce": "처연해 보이는 여인의 미소를 보며 만든 조각상",
                    "img": "https://lh3.googleusercontent.com/proxy/RdVUXYcrmoivaFJ-V9Wc1L7JmXLAFJNGnAhCrUBXvfbLk_WKInjZjnACXjXBvOH7UMgBKFoQ9QmiR1Vn2jfishzy_ims_7WioQpuzcnrTXONIxLH"
                },
                {
                    "productor": "백 운",
                    "title": "인자한 예수님",
                    "introduce": "나무로 조각낸 예수님 조각상",
                    "img": "https://www.cjob.co.kr/data/file/sell/thumb-2083893079_gKrEOYsN_6bf932902acf391b2abdf86f27be8171d4cc0643_700x933.jpg"
                }
            ]
        }
        
    }
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

requestList(param);

function addList(){
    var dumb = [
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
            "img": "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/gdA/image/nkKa3t7hqZuzo9hmRz9aS0mKE84"
        },
        {
            "productor": "김 민지",
            "title": "웃는 여인",
            "introduce": "어머니의 웃는 모습을 모티브로 그린 그림입니다.",
            "img": "https://images.otwojob.com/product/X/O/B/XOBLxia1ptduwcM.jpg/o2j/resize/852x622%3E"
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
        }
    ]
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
