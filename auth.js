// รอให้ DOM โหลดเสร็จก่อน
document.addEventListener("DOMContentLoaded", () => {

  // --- สมัครสมาชิก ---
  document.querySelector('#registerForm form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน");
      return;
    }

    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await userCredential.user.updateProfile({ displayName: name });
      alert("สมัครสมาชิกสำเร็จ!");
      // คุณอาจ redirect ไปหน้า info.html หรืออื่น ๆ
      window.location.href = "info.html";
    } catch (error) {
      alert("เกิดข้อผิดพลาด: " + error.message);
    }
  });

  // --- เข้าสู่ระบบ ---
  document.querySelector('#loginForm form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      alert("เข้าสู่ระบบสำเร็จ!");
      window.location.href = "info.html";
    } catch (error) {
      alert("เข้าสู่ระบบล้มเหลว: " + error.message);
    }
  });

  // --- ลืมรหัสผ่าน ---
  document.querySelector('#forgotPasswordForm form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('forgotEmail').value;

    try {
      await firebase.auth().sendPasswordResetEmail(email);
      alert("เราได้ส่งลิงก์รีเซ็ตรหัสผ่านไปยังอีเมลของคุณแล้ว");
    } catch (error) {
      alert("เกิดข้อผิดพลาด: " + error.message);
    }
  });

                          document.addEventListener("DOMContentLoaded", () => {
  console.log("🔥 auth.js loaded");

  document.querySelector('#registerForm form').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("🚀 กดสมัครสมาชิกแล้ว");
  });

  document.querySelector('#loginForm form').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("🚀 กดเข้าสู่ระบบแล้ว");
  });

  document.querySelector('#forgotPasswordForm form').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("🚀 กดลืมรหัสผ่านแล้ว");

  });
});
