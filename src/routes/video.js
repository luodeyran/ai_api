const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/video', async (req, res) => {
  try {
    const response = await axios.get('https://api.kuleu.com/api/MP4_xiaojiejie?type=json');
    res.json(response.data); // 确保将从外部 API 获取的数据返回给前端
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch video data' });
  }
});

module.exports = router;