const express = require('express');
const path = require('path');
const app = express();

// لإضافة Favicon والملفات الثابتة
app.use(express.static('public'));

// جميع الصفحات تذهب إلى index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// البورت
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ الموقع يعمل على البورت ${PORT}`);
});
