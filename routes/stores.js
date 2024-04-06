const express = require('express');
// const { getStores, addStore } = require('../controllers/stores');

const router = express.Router();

router.get('/api/v1/stores',(req,res) =>{
    res.send('Hello') ;
});

// router
//   .route('/')
//   .get(getStores)
//   .post(addStore);

module.exports = router;