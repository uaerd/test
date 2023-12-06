function getValues() {
    var totalValue = 0;
    var unansweredQuestions = [];  // เพิ่มตัวแปรเพื่อเก็บข้อที่ยังไม่ได้ตอบ

    for (let i = 1; i <= 20; ++i) {
        var elementsByName = "q" + i;
        var radioButtons = document.getElementsByName(elementsByName);
        var answered = false;  // เพิ่มตัวแปรเพื่อตรวจสอบว่ามีการตอบหรือไม่

        for (let index = 0; index < radioButtons.length; index++) {
            if (radioButtons[index].checked) {
                var value = parseInt(radioButtons[index].value);
                totalValue += value;
                answered = true;  // แทนค่าเป็น true เมื่อมีการตอบ
            }
        }

        if (!answered) {
            unansweredQuestions.push(i);  // เพิ่มข้อที่ยังไม่ได้ตอบลงใน array
        }
    }

    // ตรวจสอบว่ามีข้อที่ยังไม่ได้ตอบหรือไม่
    if (unansweredQuestions.length > 0) {
        alert("โปรดตอบคำถามที่ " + unansweredQuestions.join(", "));
    }  else {
       console.log(totalValue);
        return totalValue; 
    }
    return ''
}

function getScore_name_ageFromURL() {
    var urlParams = new URLSearchParams(window.location.search)
    document.body.innerHTML += `<p>ชื่อ: ${urlParams.get('name')} อายุ: ${urlParams.get('age')} คะแนน: ${urlParams.get('score')}  `
}
function go_to_Conclusion() {
    var urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has('name') && urlParams.has('age')) {
        if (getValues() != '') {
            window.location.href = `Conclusion.html?name=${urlParams.get("name")}&age=${urlParams.get("age")}&score=${getValues()}`
    } else{return}}
}
function getScoreFromURL() {
    // ดึง URL ปัจจุบัน
    var urlParams = new URLSearchParams(window.location.search);

    // ตรวจสอบว่ามีพารามิเตอร์ score หรือไม่
    if (urlParams.has('score') && urlParams.has('name') && urlParams.has('name')) {
        // ดึงค่าคะแนนจาก URL
        var score = parseInt(urlParams.get('score'));


        // ดำเนินการตามคะแนน
        handleScore(score);
    }
}

// ฟังก์ชันสำหรับการรับมือกับคะแนน
function handleScore(score) {
    // ทำตามคะแนนที่ได้รับ
    var tbody = document.getElementById("tbody1")
    if (score >= 0 && score <= 10) {
        // สร้างแถวในตาราง
        var row = tbody.insertRow();

        // เพิ่ม cell ในแถว
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        // เติมข้อมูลใน cell
        cell1.innerHTML = "ไม่มีความเครียด";
        cell2.innerHTML = "คุณรู้สึกสบายดีมาก ไม่มีอารมณ์เครียดหรือกังวลที่น่าสังเกตเลย.";
        cell3.innerHTML = "ไม่จำเป็นต้องทำการจัดการความเครียดมากนัก ให้สังเกตและดูแลตัวเองอย่างดี.";
    } else if (score > 11 && score <= 20) {
        // สร้างแถวในตาราง
        var row = tbody.insertRow();

        // เพิ่ม cell ในแถว
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        // เติมข้อมูลใน cell
        cell1.innerHTML = "น้อยมาก";
        cell2.innerHTML = "ความเครียดน้อยมาก บางครั้งที่คุณอาจรู้สึกเร็ว ๆ นี้แต่ไม่ค่อยมีปัญหามาก.";
        cell3.innerHTML = "ไม่จำเป็นต้องทำการจัดการความเครียดมากนัก ให้สังเกตและดูแลตัวเองอย่างดี.";
    } else if (score > 21 && score <= 30) {
        // สร้างแถวในตาราง
        var row = tbody.insertRow();

        // เพิ่ม cell ในแถว
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        // เติมข้อมูลใน cell
        cell1.innerHTML = "น้อย";
        cell2.innerHTML = "มีบางครั้งที่คุณรู้สึกเครียดเล็กน้อย แต่ยังคงสามารถจัดการได้.";
        cell3.innerHTML = "พยายามสร้างวิธีการจัดการกับสถานการณ์ที่ทำให้คุณรู้สึกเครียด อาจใช้การออกกำลังกายหรือการทำกิจกรรมที่ชอบ.";
    } else if (score > 31 && score <= 40) {
        var row = tbody.insertRow();

        // เพิ่ม cell ในแถว
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        // เติมข้อมูลใน cell
        cell1.innerHTML = "ปานกลาง";
        cell2.innerHTML = "ความเครียดที่ปานกลาง บางครั้งที่มีความกังวลหรือเกรงใจ แต่ยังคงสามารถควบคุมได้.";
        cell3.innerHTML = "พยายามหาแนวทางในการแก้ไขปัญหา และค้นหาการสนับสนุนจากคนรอบข้าง.";
    } else if (score > 41 && score <= 50) {
        var row = tbody.insertRow();

        // เพิ่ม cell ในแถว
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        // เติมข้อมูลใน cell
        cell1.innerHTML = "สูง";
        cell2.innerHTML = "มีระดับความเครียดที่สูง รู้สึกทุกข์เสียและความกังวลเพิ่มขึ้น.";
        cell3.innerHTML = "ควรพูดคุยกับคนที่เชี่ยวชาญเพื่อให้คำปรึกษา และพยายามทำกิจกรรมที่สามารถผ่อนคลายความเครียดได้.";
    } else if (score > 51 && score <= 60) {
        var row = tbody.insertRow();

        // เพิ่ม cell ในแถว
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        // เติมข้อมูลใน cell
        cell1.innerHTML = "สูงมาก";
        cell2.innerHTML = "ความเครียดสูงมาก รู้สึกทุกข์เสียและความกังวลเพิ่มขึ้น.";
        cell3.innerHTML = "ควรพบผู้เชี่ยวชาญทางจิตเวชเพื่อให้คำปรึกษาและสนับสนุนทางด้านจิตใจ.";

    }
}