const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// إعدادات
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));  // ✅ التعديل هنا

// صفحة الدخول
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));  // ✅ هذا صحيح
});

// مسار Dashboard (نضيفه جديداً)
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));  // ✅ نضيف هذا
});

// API بسيط
app.get('/api/competitors', (req, res) => {
    res.json({
        success: true,
        data: [
            { name: 'المنافس 1', score: 85 },
            { name: 'المنافس 2', score: 72 }
        ]
    });
});

// أي مسار آخر يعيد إلى الصفحة الرئيسية (إضافة مهمة)
app.get('*', (req, res) => {
    res.redirect('/');
});

// البورت
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ الخادم يعمل على: http://localhost:${PORT}`);
    console.log(`📁 Dashboard: http://localhost:${PORT}/dashboard`);
});
