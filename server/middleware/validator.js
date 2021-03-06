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

export const loginValidation = [
  body("username")
    .trim()
    .isLength({ min: 1 })
    .withMessage("공백 없이 1자 이상 입력하세요."),
  body("password")
    .trim()
    .isLength({ max: 16 })
    .withMessage("공백 없이 16자 이하로 작성하세요."),
  validate,
];

export const joinValidation = [
  ...loginValidation,
  body("name")
    .trim()
    .isString()
    .isLength({ min: 2 })
    .withMessage("공백 없이 두 글자 이상 입력하세요."),
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("공백없이 이메일을 입력하세요."),
  body("url")
    .isURL()
    .withMessage("URL이 유효하지 않습니다.")
    .optional({ nullable: true, checkFalsy: true }),
  validate,
];
