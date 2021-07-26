import { body, validationResult } from "express-validator";

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array()[0].msg });
};

export const textValidation = [
  body("text")
    .trim()
    .isLength({ min: 1 })
    .withMessage("공백 없이 1자 이상 입력해야 합니다."),
  validate,
];

// export const usernameQuery = [
//   param("username")
//     .trim()
//     .isLength({ min: 2 })
//     .withMessage("username은 공백없이 두 글자 이상입니다."),
//   validate,
// ];

// export const getParamId = [
//   param("id").trim().isInt().withMessage("id는 공백없이 숫자여야 합니다."),
//   validate,
// ];

export const joinValidation = [
  body("username")
    .trim()
    .isLength({ min: 1 })
    .withMessage("공백 없이 1자 이상 입력하세요."),
  body("password")
    .trim()
    .isLength({ min: 8, max: 16 })
    .withMessage("공백 없이 8자 이상 16자 이하로 작성하세요."),
  body("name")
    .trim()
    .isString()
    .isLength({ min: 2 })
    .withMessage("공백 없이 두 글자 이상 입력하세요."),
  body("email").isEmail().normalizeEmail().withMessage("이메일 입력해요"),
  validate,
];

export const loginValidation = [
  body("username")
    .trim()
    .isLength({ min: 1 })
    .withMessage("공백 없이 1자 이상 입력하세요."),
  body("password")
    .trim()
    .isLength({ min: 8, max: 16 })
    .withMessage("공백 없이 8자 이상 16자 이하로 작성하세요."),
  validate,
];
