import express from 'express';
import {Router} from 'express'
import { query } from 'express-validator';
import {registerUser} from '../controllers/registerUser.js'
import {loginUser} from '../controllers/loginUser.js'

import {updateEmail} from '../controllers/update/updateEmail.js'
import {updateUsername} from '../controllers/update/updateUsername.js'
import {updatePassword } from '../controllers/update/updatePassword.js';
import {updateAvatar} from '../controllers/update/updateAvatar.js'
import { updateBio } from '../controllers/update/updateBio.js';
import jwt from 'jsonwebtoken'

import checkTokenValidity from '../controllers/checkTokenValidity.js';

import checkBodyErrors from '../controllers/checkBodyErrors.js';

import {body} from 'express-validator'

import {createPost} from  '../controllers/createPost.js'
import {getProfile} from  '../controllers/getProfile.js'
import {findUser} from  '../controllers/findUser.js'
import {sendFollowRequest} from  '../controllers/sendFollowRequest.js'
import {retrieveFollowRequest} from  '../controllers/retrieve/followRequest.js'
import {retrieveFeed} from  '../controllers/retrieve/feed.js'
import {retrieveExplore} from  '../controllers/retrieve/explore.js'

import {retrieveFollowers} from  '../controllers/retrieve/followers.js'
import {retrieveComments} from  '../controllers/retrieve/comments.js'
import {retrieveLikes} from  '../controllers/retrieve/likes.js'

import {commentPost} from  '../controllers/commentPost.js'

import {likePost} from  '../controllers/likePost.js'
import {checkIfLiked} from  '../controllers/checkIfLiked.js'

import {unfollowUser} from  '../controllers/unfollowUser.js'
const router = Router();

import multer from 'multer'
import { respondFollowRequest } from '../controllers/respondFollowRequest.js';
let upload
let uploadPosts 
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'/app/src/imgs/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const ext = file.originalname.split('.')[1]
    cb(null, `${file.fieldname}-${uniqueSuffix}.${ext}`)
  },
  fileFilter: function (req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 1 
  }
})

upload=multer({storage})

router.post('/register',
    body('registerUsername').trim().notEmpty().escape().withMessage("A username must be entered."),
    body('registerEmail').notEmpty().escape().withMessage("An email must be entered").escape().isEmail().trim().withMessage("Incorrect email formating."),
    body('registerPassword').notEmpty().escape().withMessage("A password must be entered").escape().isLength({min:6}).withMessage("Password must be at least 6 characters long."),
    registerUser
);
router.post('/login',
    body('loginEmail').escape().notEmpty().withMessage("An email must be entered").isEmail().trim().withMessage("Incorrect email formating."),
    body('loginPassword').escape().notEmpty().withMessage("A password must be entered"),
    loginUser
);
router.post('/update/Email',
    body('updateEmail').escape().notEmpty().withMessage("An email must be entered").isEmail().trim().withMessage("Incorrect email formating."),
    verifyToken,
    updateEmail
);
router.post('/update/Bio',
  body('bio').notEmpty().escape().withMessage("An email must be entered").trim().isLength({max:100}).escape().withMessage("Too Long."),
  checkBodyErrors,
  verifyToken,
  updateBio
);
router.post('/update/Username',
  body('updateUsername').trim().notEmpty().escape().withMessage("A username must be entered."),
  verifyToken,
  updateUsername
);
router.post('/update/Password',
  body('updatePasswordUpdate').notEmpty().escape().withMessage("A password must be entered").isLength({min:2}).escape().withMessage("Password must be at least 2 characters long."),
  body('updatePasswordCurrent').notEmpty().escape().withMessage("A password must be entered").escape().isLength({min:2}).withMessage("Password must be at least 2 characters long."),
  verifyToken,
  updatePassword
);
router.post('/update/Avatar',
  verifyToken,
  (req,res,next)=>{
    req.folder='./src/backend/imgs/' + req.headers['folder']
    next()
  },
  upload.single('updateAvatarFile'),
  updateAvatar,
);
router.post('/create/Post',
  verifyToken,
  body('postText').notEmpty().escape().trim().withMessage("You can't create a post without text or an image"),
  createPost
);
router.post('/upload/Post',
  verifyToken,
    (req,res,next)=>{
    req.folder='./src/backend/imgs/' + req.headers['folder']
    next()
  },
  upload.single('postImg'),
  (req,res)=>{
    res.send(req.file.filename);
  
  },
  // upload.single('postImg'),
  );
router.post('/send/followRequest',
  verifyToken,
  sendFollowRequest
);
router.post('/unfollow',
  verifyToken,
  unfollowUser
);
router.post('/respond/followRequest',
  verifyToken,
  respondFollowRequest
);
router.get('/avatar/:name', function (req, res) {
  const avatar = req.params.name;
  
  res.sendFile(`/app/src/imgs/${avatar}`, { root: '/' });
});
router.get('/postImg/:name', function (req, res) {
  const postImg = req.params.name;
  
  res.sendFile(`/app/src/imgs/${postImg}`, { root: '/' });
});
router.get('/liked/:postId',
  verifyToken,
  checkIfLiked
);
router.get('/profile/:username',
  verifyToken,
  getProfile
);
router.get('/find/:username', 
  findUser
);
router.get('/retrieve/followRequest', 
  verifyToken,
  retrieveFollowRequest
);
router.get('/retrieve/Feed', 
  verifyToken,
  retrieveFeed
);
router.get('/retrieve/Explore', 
  verifyToken,
  retrieveExplore
);
router.post('/comment/Post', 
  verifyToken,
  commentPost
);
router.get('/retrieve/Comments/:id', 
  retrieveComments
);
router.get('/retrieve/Likes/:id', 
  retrieveLikes
);
router.get('/followers/:id', 
  retrieveFollowers
);
router.post('/like/Post', 
  verifyToken,
  likePost
  
);
router.get('/checkTokenValidity', 
  verifyToken,  
  checkTokenValidity
);

function verifyToken(req,res,next){
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined') {
    req.token = bearerHeader;
    jwt.verify(req.token, '?', (err, authorizedData) => {
        if(err){
            console.log(err)
            res.sendStatus(403)
        } else {
            res.locals.tojwt=authorizedData.toJWT
            next()
            
        }
    })
  } else {
    console.log("no header")

    res.sendStatus(403);
  }
}
export default router;
 