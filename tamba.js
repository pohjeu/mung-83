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
        "Thu Huyền": "Chúc chị sớm có bồ, mau giàu, ăn nhanh chóng lớn, làm việc nhớ giữ sức khỏe, say no with stress. Làm việc thì không cãi sếp, không đánh nhau với sếp (trừ khi thấy đánh xong có thể nhảy job ngon hơn thì cứ mạnh dạn 😊).",
        "Như Hằng": "Chúc chị 2 sớm có bồ, nếu có rồi thì chúc tình yêu bền vững như deadline, càng gần càng rộn ràng. Tiền đầy ví, công việc hanh thông, cơ hội tới tấp như quảng cáo trên YouTube hoặc web xem phim lậu.",
        "Vy Vương": "Chúc chị có công việc ổn định, 8386, thuận lợi, đặc biệt là chúc quen được Tuấn Long. Mà nếu vài năm nữa hay năm nay gửi thiệp cưới thì vui à nha, đừng để dân tình hóng dài cổ! 😊",
        "Vương Vy": "Chúc chị có công việc ổn định, 8386, thuận lợi, đặc biệt là chúc quen được Tuấn Long. Mà nếu vài năm nữa hay năm nay gửi thiệp cưới thì vui à nha, đừng để dân tình hóng dài cổ! 😊",
        "Phương Thùy": "Chúc chị 4 buôn may bán đắt, kinh doanh phát đạt, đường đời rộng mở, sự nghiệp thăng hoa như giá đất. Chúc anh Tư và chị Thùy trăm năm hạnh phúc, mà nhớ nghía sẵn mẫu thiệp cưới đi nghen, em đợi để đi dự cưới nha =)))",
        "Khánh Vy": "Chúc chị sớm tìm được người tình trong mộng, hoặc nếu có rồi thì giữ cho chặt, đừng để thất thoát như tiền trong ví cuối tháng.",
        "Thu Hậu": "Chúc chị 3 cùng tên và cũng là cô giáo lúc nào cũng tràn đầy năng lượng, lên lớp như MC, học trò nghe giảng không ngủ gật, kiểm tra không xin hoãn, bài tập giao đến đâu hoàn thành đến đó.",
        "Hồng Ngọc": "Chúc chị phát tài, tình duyên như ý, công việc suôn sẻ, sếp hiền như Phật, lương tăng vèo vèo.",
    };
    
    let matchedKey = Object.keys(messages).find(key => name.includes(key.toLowerCase()));
    let messageText = matchedKey ? messages[matchedKey] : "Bạn không thuộc hội chị em của nhóm Vô Tri rồi, bạn là ai từ đâu đến khai mau. Nếu là đom đóm thì vẫn có cơ hội quay đầu liên hệ ngay Zalo: 0786008420 Mr DHau để làm việc nhé ";
    
    document.getElementById("messageText").innerText = messageText;
    document.getElementById("messageBox").style.display = "block";
    document.getElementById("popup").style.display = "none";
}

function closeMessage() {
    document.getElementById("messageBox").style.display = "none";
    document.getElementById("mainContainer").style.display = "block";
}

document.getElementById("playMusic").addEventListener("click", () => {
    const audio = document.getElementById("bgMusic");
    audio.play().catch(error => console.log("Tự động phát bị chặn:", error));
});
