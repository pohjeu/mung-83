var hoveredNo = function(){
    var btn = document.getElementById("btnMove");

    var maxMoveDistanceX = 400; 
    var maxMoveDistanceY = 600;
    var originalTop = btn.offsetTop;
    var originalLeft = btn.offsetLeft;

    var top = originalTop + Math.floor(Math.random() * maxMoveDistanceY) - (maxMoveDistanceY / 2);
    var left = originalLeft + Math.floor(Math.random() * maxMoveDistanceX) - (maxMoveDistanceX / 2);

    top = Math.max(0, Math.min(top, window.innerHeight - btn.offsetHeight));
    left = Math.max(0, Math.min(left, window.innerWidth - btn.offsetWidth));
    
    btn.style.position = "absolute"; 
    btn.style.top = top + "px";
    btn.style.left = left + "px";
}

document.getElementById("btnClick").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("mainContainer").style.display = "none";
});

function showMessage() {
    let name = document.getElementById("inputName").value.trim().toLowerCase();
    let messages = {
        "Thu Huyền": "Chúc chị sớm có bồ, mau giàu, ăn nhanh chóng lớn, làm việc nhớ giữ sức khỏe, say no with stress - live life at its best. Làm việc thì không cãi sếp, không đánh nhau với sếp (trừ khi thấy đánh xong có thể nhảy job ngon hơn thì cứ mạnh dạn 😂).",
        "Như Hằng": "Chúc chị 2 sớm có bồ, nếu có rồi thì chúc tình yêu bền vững như deadline, càng gần càng rộn ràng. Tiền đầy ví, công việc hanh thông, cơ hội tới tấp như quảng cáo trên YouTube hoặc web xem phim lậu. 😂",
        "Vy Vương": "Chúc chị có công việc ổn định, 8386, thuận lợi, đặc biệt là chúc chị quen được Tuấn Long vừa lâu vừa dài. Mà nếu vài năm nữa hay năm nay gửi thiệp cưới thì vui à nha, đừng để dân tình hóng dài cổ! 😂",
        "Vương Vy": "Chúc chị có công việc ổn định, 8386, thuận lợi, đặc biệt là chúc chị quen được Tuấn Long vừa lâu vừa dài. Mà nếu vài năm nữa hay năm nay gửi thiệp cưới thì vui à nha, đừng để dân tình hóng dài cổ! 😂",
        "Phương Thùy": "Chúc chị 4 buôn may bán đắt, kinh doanh phát đạt, đường đời rộng mở, sự nghiệp thăng hoa như giá đất và giá vàng. Chúc anh Tư và chị Thùy trăm năm hạnh phúc, nhớ nghía sẵn mẫu thiệp cưới đi nghen, em đợi để đi dự cưới nha 😂",
        "Khánh Vy": "Chúc chị sớm tìm được người tình như trong mộng, rộng lượng nhưng không gia trưởng, nếu rồi thì đừng vội buông tay mong là gặp nhiều điều may, năm nay sẽ có người say đắm c \n+ 1 trạm sạc pin cho ngày dài mệt mỏi",
        "Thu Hậu": "Chúc chị cùng tên và cũng là cô giáo lúc nào cũng tràn đầy năng lượng, lên lớp nhập vai như MC, học trò ngoan ngoãn không lầm lì, kiểm tra bài vở ko tự ti, bài tập hoàn thành từng mili. Việc lặt vặt có Long làm kuli 😂",
        "Hồng Ngọc": "Chúc chị phát tài, tình duyên như ý, công việc suôn sẻ, sếp hiền như Phật, lương tăng vèo vèo có người đèo đi chơi. 😂"
    };

    let images = {
        "Thu Huyền": "./pictures/thuyen.jpg",
        "Như Hằng": "./pictures/nhang.jpg",
        "Vy Vương": "./pictures/vuongvy.jpg",
        "Vương Vy": "./pictures/vuongvy.jpg",
        "Phương Thùy": "./pictures/pthuy.jpg",
        "Khánh Vy": "./pictures/kvy.jpg",
        "Thu Hậu": "./pictures/thau.jpg",
        "Hồng Ngọc": "./pictures/hngoc.jpg"
    };

    let matchedKey = Object.keys(messages).find(key => name.includes(key.toLowerCase()));
    let messageText = matchedKey ? messages[matchedKey] : "Bạn không thuộc hội chị em nhóm Vô Tri rồi, bạn là ai ? \nĐến từ tổ chức nào ? \n\nNếu bạn đang tìm kiếm đóm con thì gặp đúng người rồi đó hãy tham gia cộng đồng đóm con chúng tớ <3 ";
    let imageSrc = matchedKey ? images[matchedKey] : "./pictures/j97.jpg";

    document.getElementById("messageText").innerText = messageText;
    document.getElementById("messageImage").src = imageSrc;
    document.getElementById("messageBox").style.display = "block";
    document.getElementById("popup").style.display = "none";

    let joinButton = document.getElementById("joinButton");
    if (matchedKey) {
        joinButton.style.display = "none";
    } else {
        joinButton.style.display = "block";
    }
}

function closeMessage() {
    document.getElementById("messageBox").style.display = "none";
    document.getElementById("mainContainer").style.display = "block";
}

function closeThankYouBox() {
    document.getElementById("thankYouBox").style.display = "none";
    document.getElementById("mainContainer").style.display = "block";
}

document.getElementById("playMusic").addEventListener("click", () => {
    const audio = document.getElementById("bgMusic");
    audio.play().catch(error => console.log("Tự động phát bị chặn:", error));
});

document.getElementById("btnClick").addEventListener("click", function() {
    let popup = document.getElementById("popup");
    popup.style.display = "block";
    popup.style.opacity = 0;

    let opacity = 0;
    let fadeIn = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        } else {
            opacity += 0.1;
            popup.style.opacity = opacity;
        }
    }, 50);
    
    document.getElementById("mainContainer").style.display = "none";
});

window.onload = function() {
    let btnMove = document.getElementById("btnMove");
    let btnClick = document.getElementById("btnClick");

    btnMove.style.opacity = "0";
    btnClick.style.opacity = "0";

    setTimeout(() => {
        btnMove.style.transition = "opacity 1s ease-out";
        btnMove.style.opacity = "1";
    }, 1000); 

    setTimeout(() => {
        btnClick.style.transition = "opacity 1s ease-out";
        btnClick.style.opacity = "1";
    }, 2000); 
};



function closeThankYouBox() {
    document.getElementById("thankYouBox").style.display = "none";
}

