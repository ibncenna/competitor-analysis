const express = require('express');
const path = require('path');
const app = express();

// للملفات الثابتة
app.use(express.static('public'));

// مسارات التطبيق
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// API وهمي للبيانات
app.get('/api/competitors', (req, res) => {
    res.json([
        { id: 1, name: 'TechStore', score: 92 },
        { id: 2, name: 'DigitalAgency', score: 85 }
    ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 الموقع يعمل: http://localhost:${PORT}`);
});
