const { Router } = require("express");
const router = Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("../config");

// /auth/register
router.post(
   "/register",
   [
      check("name", "Введите что нибудь!").notEmpty(),
      check("username", "Введите что нибудь!").notEmpty(),
      check("password", "Минимальная длина пароля 6 символов").isLength({
         min: 6,
      }),
   ],
   async (req, res) => {
      try {
         const errors = validationResult(req);
         if (!errors.isEmpty()) {
            return res.status(400).json({
               errors: errors.array(),
               message: "Некорректные данные при регистрации",
            });
         }
			
         const { name, username, password } = req.body;
			
         const candidate = await User.findOne({ username });
         if (candidate) {
            return res
               .status(400)
               .json({ message: "Такой пользователь не существует" });
         }
			
         const hashedPassword = await bcrypt.hash(password, 12);
         const user = new User({ name, username, password: hashedPassword });
		
         await user.save();
         res.status(201).json({ message: "Пользователь создан!" });
      } catch (e) {
         res.status(500).json({
            message: "Что-то пошло не так, попробуйте снова!",
         });
      }
   }
);

// /auth/login
router.post(
   "/login",
   [
      check("username", "Введите что нибудь!").notEmpty(),
      check("password", "Введите пароль").exists(),
   ],
   async (req, res) => {
      try {
         const errors = validationResult(req);
         if (!errors.isEmpty()) {
            return res.status(400).json({
               errors: errors.array(),
               message: "Некорректные данные при входе в систему",
            });
         }

         const { name, username, password } = req.body;
         const user = await User.findOne({ username });
         if (!user) {
            return res.status(400).json({ message: "Пользователь не найден!" });
         }

         const isMath = await bcrypt.compare(password, user.password);
         if (!isMath) {
            return res
               .status(400)
               .json({ message: "Неверный пароль, попробуйте еще раз!" });
         }

         const token = jwt.sign({ userId: user.id }, config.jwtSecret, {
            expiresIn: "1h",
         });

         res.json({ token, userId: user.id });
      } catch (e) {
         res.status(500).json({
            message: "Что-то пошло не так, попробуйте снова!",
         });
      }
   }
);

module.exports = router;
