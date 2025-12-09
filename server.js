const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// إعدادات
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// صفحة الدخول
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
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

// البورت
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ الخادم يعمل على: http://localhost:${PORT}`);
});
