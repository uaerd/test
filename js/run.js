document.addEventListener("DOMContentLoaded", function() {
    // สร้างคำถามที่ถูกสร้างด้วย JavaScript
    const questions = [
        "รู้สึกหงุดหงิด รำคาญใจ",
        "ทำอะไรไม่ได้เลยเพราะประสาทตึงเครียด",
        "มีความวุ่นวายใจ",
        "ไม่อยากพบปะผู้คน",
        "ปวดหัวข้างเดียวหรือปวกบริเวณขมับทั้ง 2 ข้าง",
        "รู้สึกไม่มีความสุขและเศร้าหมอง",
        "รู้สึกหมดหวังในชีวิต",
        "รู้สึกว่าชีวิตตนเองไม่มีคุณค่า",
        "กระวนกระวายอยู่ตลอดเวลา",
        "รู้สึกว่าตนไม่มีสมาธิ",
        "รู้สึกเพลียจนไม่มีแรงทำอะไร",
        "รู้สึกเหนื่อยหน่ายจนไม่อยากทำอะไร",
        "มีอาการหัวใจเต้นแรง",
        "เสียงสั่น ปากสั่น หรือมือสั่นเวลาไม่พอใจ",
        "รู้สึกกลัวผิดพลาดในการทำสิ่งต่างๆ",
        "ปวดหรือกล้ามเนื้อบริเวณท้ายทอย หลัง ไหล่",
        "ตื่นเต้นง่ายกับเหตุการณ์ที่ไม่คุ้นเคย",
        "มึนงงหรือเวียนศรีษะ",
        "ความสุขทางเพศลดลง"
      ];

    // รอให้เว็บโหลดเสร็จก่อนที่จะทำงาน
    // สร้างแท็ก <tbody>
    const tbody = document.getElementById("tbody1");

    // สร้างแท็ก <tr> สำหรับแต่ละคำถาม
    for (let i = 0; i < questions.length; i++) {
        const row = document.createElement("tr");

        // สร้างแท็ก <td> สำหรับข้อความคำถาม
        const questionCell = document.createElement("td");
        questionCell.innerText = `${i + 2}. ${questions[i]}`;
        row.appendChild(questionCell);

        // สร้างแท็ก <td> สำหรับ input type radio
        for (let j = 0; j < 4; j++) {
            const radioCell = document.createElement("td");
            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.name = `q${i + 2}`;
            radioInput.value = j;
            radioCell.appendChild(radioInput);
            row.appendChild(radioCell);
        }

        // เพิ่มแถวลงใน tbody
        tbody.appendChild(row);
    }
});