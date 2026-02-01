/*jslint browser: true, devel: true */
"use strict";

// 1. 产生爱心的逻辑 (放在最前面)
function createHeart() {
    var heart = document.createElement('div');
    heart.innerHTML = '💖'; 
    heart.className = 'heart'; 
    heart.style.left = Math.random() * 100 + 'vw';
    var size = Math.random() * 20 + 10;
    heart.style.fontSize = size + 'px';
    var duration = Math.random() * 3 + 2;
    heart.style.animationDuration = duration + 's';
    document.body.appendChild(heart);
    setTimeout(function() {
        heart.remove();
    }, duration * 1000);
}

// 2. 准备情书内容
var loveLetter = "Snoopy is one of the central characters in the comic strip Peanuts by American cartoonist Charles M. Schulz. He also appears in all of the Peanuts films and television specials. Debuting in the strip on October 4, 1950, the original drawings of Snoopy were inspired by Spike, one of Schulz's childhood dogs。作为你的朋友想问你在2月14号可以和我出去吗，我想看人家打鼓，但是如果想拒绝我的话，你就不用回复我了，就是就是seen 我就好了，以上就是我想说的。Snoopy is a loyal, imaginative, and good-natured beagle who is prone to imagining fantasy lives, including being an author,[8] a college student known as （Joe Cool）, an attorney, and a World War I flying ace.[9] He is perhaps best known in this last persona, wearing an aviator's helmet and goggles and a scarf while carrying a swagger stick (like a stereotypical British Army officer of World War I and II).Snoopy can be selfish, gluttonous, and lazy at times, and occasionally mocks his owner, Charlie Brown. But on the whole, he shows great love, care, and loyalty for his owner (even though he cannot even remember his name and always refers to him as （the round-headed kid). In the 1990s comic strips, he is obsessed with cookies, particularly the chocolate-chip variety. This, and other instances in which he indulges in large chocolate-based meals and snacks, indicate that chocolate is not poisonous to Snoopy, the way it is for real dogs.";

// 3. 设置打字速度
var typingSpeed = 100;

// 4. 打字机函数
function typeWriter(text, i, element, speed) {
    if (i < text.length) {
        element.textContent += text.charAt(i);
        setTimeout(function () {
            typeWriter(text, i + 1, element, speed);
        }, speed);
    } else {
        // --- 打字结束后的逻辑 ---
        setInterval(createHeart, 300);

        var photo = document.getElementById('cat-photo');
        if (photo) {
            photo.style.display = 'block';
        }
        console.log("打字完成，开始撒花！");
    } // <--- 这里是你之前漏掉的第一个大括号
} // <--- 这里是你之前漏掉的第二个大括号

// 5. 确保页面加载完后再运行
window.onload = function () {
    var btn = document.getElementById('start-btn');

    if (btn) {
        btn.onclick = function () {
            btn.style.display = 'none'; 
            audio.play().catch(function(e) {
                console.log("音频播放被拦截:", e);
            }); 

            var outputElement = document.getElementById('letter-output');
            typeWriter(loveLetter, 0, outputElement, typingSpeed);
        };
    }
};