function set_information() {
    var name = document.getElementById("name");
    var age = document.getElementById("age");

    // ตรวจสอบว่ามีข้อมูลทั้ง name และ age หรือไม่
    if (name.value && age.value) {
        // มีข้อมูล, ดำเนินการเปลี่ยนหน้า
        window.location.href = `test/index.html?name=${name.value}&age=${parseInt(age.value)}`;
    } else {
        // ไม่มีข้อมูล, แจ้งเตือนหรือทำอย่างอื่นตามต้องการ
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        // หรือให้ไม่ทำการเปลี่ยนหน้า
    }
}

function hasNoURLParameters() {
    // ดึง URL Parameters จาก URL
    const urlParams = new URLSearchParams(window.location.search);

    // ตรวจสอบว่าไม่มี URL Parameters
    if (urlParams.toString() === '') {
        window.location.href = "https://experimentations.vercel.app/"
    }
}